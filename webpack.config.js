var path = require('path');
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const zlib = require("zlib");


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
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],
}