const webpack = require('webpack');
const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    stats: 'errors-only'
  },   
  plugins: [
    // new CleanWebpackPlugin(['dist/index.html']),
    // new HtmlWebpackPlugin({
      // title: 'My app'
    // })
  ]
}

module.exports = config;