const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

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
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
  }
};
