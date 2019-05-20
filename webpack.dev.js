const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, { 
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
  ],
  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      },
      // {
      //   test: /\.(woff|woff2)$/,
      //   use: {
      //     loader: 'url-loader?limit=100000',
      //   },
      // },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]',
            // outputPath: 'resources/'
            // mimetype: 'application/font-woff',
            // publicPath: './resources/fonts'
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: './images/[hash].[ext]'
          },
        },
      },
    ]
  }
})