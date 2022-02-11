const API_KEY = require('../config.js').API_KEY;
const express = require('express');

let app = express();
let port = 8080;

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


// middleware
app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.end();
});

app.all('/*', (req, res) => {
  var url = req.url;
  var method = req.method;
  var data = req.body;
  console.log('url:', url);

  $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    jqXHR.setRequestHeader('Authorization', API_KEY);
  })

  $.ajax({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${url}`,
    method: method,
    data: data,
    success: function (results) {
      res.send({ data: results } );
    }
  });
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});