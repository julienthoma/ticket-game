const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'app': [
        'babel-polyfill',
        'react-hot-loader/patch',
         APP_DIR + '/js/index.js'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
          {
              test: /\.(less|css)$/,
              exclude: /node_modules/,
              loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })

          }
      ]
  },
    plugins: [
        new ExtractTextPlugin({ filename: BUILD_DIR + '/style.css',  allChunks: true })
    ]
}
