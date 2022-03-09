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

if ( cluster.isMaster ) {
  console.log(`Number of CPU cores: ${numberOfCores}`);
  startClusters();
  handleWorkerStopping();
} else {
  applyMiddleware();

  // // GET DATA FOR PRODUCT ID
  // app.get('/:product_id', (req, res) => {
  //   var product_id = req.params.product_id
  //   res.send({ product_id });
  // })

  // TALK TO S3
  app.get('/s3Url', async (req, res) => {
    var url = await generateUploadURL();
    res.send(url);
  })

  // Get DATA from HR API
  app.all('/*', (req, res) => {
    var url = req.url;
    var method = req.method;
    var data = req.body;
    var params = req.params;
    var contentType = req.headers['content-type'];

    app.get('/bundle.js', (req, res, next) => {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    });

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
      console.log( 'error:', error );
      res.end();
    })
  })

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}



module.exports