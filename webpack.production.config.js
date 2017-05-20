const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  entry: {
    app: path.resolve(__dirname, './src/main.js')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]/app.[chunkhash].js'
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!postcss')
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: plugins.concat([
    new webpack.DefinePlugin({
      __ONLINE__: true,
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new CleanWebpackPlugin(['dist'], {
      'root': path.resolve(__dirname),
      verbose: true,
      dry: false
    }),
    new webpack.BannerPlugin('Copyright leke inc.'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name]/app.[chunkhash].css'),
  ])
};

module.exports = config;
