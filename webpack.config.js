var path = require('path');
// const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',

  devtool: 'inline-source-map',
  entry: `${path.join( __dirname, 'client/src/index.js' )}`,

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
      },
      {
        test: /\.css$/i,
        include: `${path.join( __dirname, 'client/dist/style.css' )}`,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin({ /* additional options here */ })],
  },
}