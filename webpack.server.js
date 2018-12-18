const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    // filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './build')
  },

  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);