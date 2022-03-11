require('dotenv').config()
const API_KEY = process.env.API_KEY
console.log(API_KEY);
const express = require('express');
const axios = require( "axios" );
const cluster = require('cluster');
const numberOfCores = require('os').cpus().length;
var multer = require('multer');
var forms = multer();
var cors = require('cors')
const generateUploadURL = require('./s3.js');

let app = express();
let port = 8080;

var startClusters = () => {
  for ( let i = 0; i < numberOfCores; i++ ) {
    cluster.fork();
  }
}

var handleWorkerStopping = () => {
  cluster.on( 'exit', ( worker, code, signal ) => {
    console.log(`Worker ${worker.process.pid} went offline`);
    console.log('Creating another worker');
    cluster.fork();
  });
}

var applyMiddleware = () => {
  app.use(express.static('client/dist'));
  app.use('/product/*', express.static('client/dist'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(forms.array());
  app.use(cors());
}

var sendCompressedBundle = () => {
  app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
    next();
  });
}

var authorizedGet = (url) => {
  return axios({
    url: url,
    headers: {
      "Authorization": API_KEY
    },
    method: 'GET'
  })
}

if ( cluster.isMaster ) {
  console.log(`Number of CPU cores: ${numberOfCores}`);
  startClusters();
  handleWorkerStopping();
} else {
  sendCompressedBundle();
  applyMiddleware();

  // TALK TO S3
  app.get('/s3Url', async (req, res) => {
    var url = await generateUploadURL();
    res.send(url);
  });

  app.get('/initializeState', (req, res) => {
    console.log(req.url);
    var params = req.url.split('?')[1];
    var productId = req.url.split('=')[1];

    var relatedItems = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`);
    var reviews = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?${params}`);
    var questions = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?${params}&page=1&count=100`);
    var metadata = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?${params}`);
    var styles = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`);
    var productInfo = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`);
    var cart = authorizedGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart');

    Promise.all([relatedItems, reviews, questions, metadata, styles, productInfo, cart])
    .then((results) => {
      var data = [results[0].data, results[1].data, results[2].data.results, results[3].data, results[4].data, results[5].data, results[6].data];
      res.send({data});
    })
    .catch( ( error ) => {
      console.log(error);
      console.log( 'Error getting data!' );
      res.end();
    });
  })

  app.get('/switchProduct', (req, res) => {
    var params = req.url.split('?')[1];
    var productId = req.url.split('=')[1];

    var relatedItems = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`);
    var reviews = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?${params}`);
    var questions = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?${params}`);
    var metadata = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?${params}`);
    var styles = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`);
    var productInfo = authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`);

    Promise.all([relatedItems, reviews, questions, metadata, styles, productInfo])
    .then((results) => {
      var data = [results[0].data, results[1].data, results[2].data.results, results[3].data, results[4].data, results[5].data];
      res.send({data});
    })
    .catch( ( error ) => {
      console.log( 'Error getting data!' );
      res.end();
    });
  });

  app.get('/relatedProducts', (req, res) => {
    var relatedProducts = JSON.parse(req.url.split('=')[1]);

    var apiCalls = [];
    for ( var i = 0; i < relatedProducts.length; i++ ) {
      var productId = relatedProducts[i];
      apiCalls.push(authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`));
      apiCalls.push(authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${productId}`));
      apiCalls.push(authorizedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`));
    }

    Promise.all(apiCalls).then(( results ) => {
      var data = [];
      for (var i = 0; i < results.length; i++) {
        data.push(results[i].data);
      }
      res.send({data});
    })
    .catch( ( error ) => {
      console.log( 'Error getting data!' );
      res.end();
    });
  })

  // Get DATA from HR API
  app.all('/*', (req, res) => {
    var url = req.url;
    var method = req.method;
    var data = req.body;
    var params = req.params;
    var contentType = req.headers['content-type'];

    axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${url}`,
      headers: {
        "Authorization": API_KEY,
        "Content-Type": contentType
      },
      method: method,
      data: data
    })
    .then( ( results ) => {
      res.send({ data: results.data } );
    })
    .catch( ( error ) => {
      res.status(500).send({ error: 'Fail retrieving data from Heroku!' })
      res.end();
    })
  })

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}



module.exports