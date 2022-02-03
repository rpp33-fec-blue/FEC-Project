const express = require('express');
let app = express();
let port = 8080;

// middleware
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});