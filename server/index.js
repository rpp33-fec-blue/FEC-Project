// const API_KEY = require('../config.js').API_KEY;
const API_KEY = process.env.API_KEY;
const express = require('express');
const axios = require( "axios" );

let app = express();
let port = 8080;

// middleware
app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.end();
});

app.all('/*', (req, res) => {
  var url = req.url;
  var method = req.method;
  var data = req.body;
  console.log('data:', data);
  console.log('url:', url);

  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${url}`,
    headers: { "Authorization": API_KEY },
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