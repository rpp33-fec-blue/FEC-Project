var path = require('path');

module.exports = {
  mode: 'development',
  entry: `${path.join( __dirname, 'client/src/index.jsx' )}`,
  output: {
    path: `${path.join( __dirname, 'client/dist' )}`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: `${path.join( __dirname, 'client/src' )}`,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }

}