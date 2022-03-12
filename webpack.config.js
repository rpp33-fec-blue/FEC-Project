var path = require('path');
const CompressionWebpackPlugin = require("compression-webpack-plugin");
<<<<<<< HEAD
=======
// const BrotliPlugin = require('brotli-webpack-plugin');
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // doesn't improve performance
// const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // doesn't improve performance
>>>>>>> 1f3ac4ac0572eafdfb3b8cedd1b690bb99d467ed
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
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CompressionWebpackPlugin({
      filename: "[file].gz",
      algorithm: "gzip",
      test: /\.js$/,
    })
  ]
}