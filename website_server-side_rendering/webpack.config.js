'use strict';

var path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"), // 使css不使用js處理
  PathRewriterPlugin = require('webpack-path-rewriter'),
  Autoprefixer = require('autoprefixer'),
  Precss = require('precss'),
  isDevelopment = process.env.NODE_ENV === 'development',
  ver = '?' + new Date().getTime(),
  opts = {
    baseUrl: path.resolve(__dirname, 'app', 'js'),
    bundle: isDevelopment ? 'bundle.js?dev' : 'bundle.js' + ver,
    vendor: isDevelopment ? 'vendor.js?dev' : 'vendor.js' + ver,
    css: isDevelopment ? 'application.css?dev' : 'application.css' + ver,
    font: isDevelopment ? '[path][name].[ext]?dev' : '[path][name].[ext]' + ver,
    img: isDevelopment ? '[path][name].[ext]?dev' : '[path][name].[ext]' + ver
  },
  config = {
    context: opts.baseUrl,
    cache: true,
    // 程式的進入點
    entry: {
      app: ['index.js', '../index.jade', '../css/application.scss'],
      vendor: []
    },
  // 最後的輸出路徑
    output: {
      path: path.join(__dirname, 'build'),  // webpack 建置專案的路徑
      publicPath: '',  // webpack 使用 require() 時參考的路徑
      filename: opts.bundle
    },
    node: {
      fs: "empty"
    },
    devtool: isDevelopment ? 'source-map' : false,
    // 編譯時要選用的 loader
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        test: /\.json$/,
        loader: "file"
      }, {
        test: /\.scss$|\.sass$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?indentedSyntax&sourceMap&sourceMapContents')
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)(\?[a-z0-9-]+)?$/,
        loader: 'file?name=' + opts.img
      }, {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9-]+)?$/,
        loader: 'file?name=' + opts.font
      }, {
        test: /\.jade$/,
        loader: PathRewriterPlugin.rewriteAndEmit({
          name: '[name].html',
          loader: 'jade-html'
        })
      }],
      noParse: /\.min\.js/
    },
    postcss: function() {
      return [Autoprefixer, Precss];
    },
    // require(file)時可以忽略oo的設定
    resolve: {
      root: [opts.baseUrl],
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx', '.json', '.scss']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      // 分離第三方套件與專案內部程式碼，生成vender
      new webpack.optimize.CommonsChunkPlugin('vendor', opts.vendor),
      // 將CSS抽出(原為行內樣式)
      new ExtractTextPlugin(opts.css, {allChunks: true}),
      // 將jade輸出html
      new PathRewriterPlugin({emitStats: false})
    ]
  };

module.exports = config;
