const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');

const config = {
  devtool: 'eval-source-map',

  entry: {
    app: path.resolve(__dirname, './src/main.js')
  },

  output: {
    publicPath: '/static',
    path: path.resolve(__dirname, './static'),
    filename: 'js/[name].js'
  },

  devServer: {
    stats: {
      chunks: false
    },
    contentBase: './',
    inline: false,
    port: PORT,
    historyApiFallback: false,
    colors: true,
    hot: true,
    quiet: false,
    host: '0.0.0.0',
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
        //loader: 'style!css?modules!postcss'
        loader: 'style!css!postcss'
      },
      {
        test: /\.scss$/,
        //loader: 'style!css?modules!sass!postcss'
        loader: 'style!css!sass!postcss'
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

  plugins: [
    new webpack.DefinePlugin({
        __ONLINE__: false
    }),
    new OpenBrowserPlugin({url: `http://127.0.0.1:${PORT}/views`}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
