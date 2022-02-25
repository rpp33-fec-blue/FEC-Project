const API_KEY = require('../config.js').API_KEY;
const express = require('express');
const axios = require( "axios" );
const cluster = require('cluster');
const numberOfCores = require('os').cpus().length;
var multer = require('multer');
var forms = multer();
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
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(forms.array());
}

if ( cluster.isMaster ) {
  console.log(`Number of CPU cores: ${numberOfCores}`);
  startClusters();
  handleWorkerStopping();
} else {
  applyMiddleware();

  app.get('/s3Url', async (req, res) => {
    var url = await generateUploadURL();
    console.log('url from app.get', url);
    res.send(url);
  })

  app.all('/*', (req, res) => {
    var url = req.url;
    var method = req.method;
    var data = req.body;
    var params = req.params;
    // var files = req.files;
    var contentType = req.headers['content-type'];

    console.log('url:', url);
    console.log('data:', data);
    console.log('headers:', contentType);
    console.log('params:', params);

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