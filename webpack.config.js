const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel?sourceMap'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
      },
      {
        test: /\.(jpeg|png)/,
        loader: 'url'
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    hot: true,
    proxy: {
      '/appName': {
        target: 'http://localhost:8080/api/index.json',
        rewrite(req) {
          req.url = `?${req.url}`;
        }
      }
    }
  },
  noInfo: true,
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './app/index.html'
    }),
    new ExtractTextPlugin('index.css')
  ]
};
