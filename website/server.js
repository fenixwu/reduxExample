'use strict';

var bs = require('browser-sync').create(),
  spa = require('browser-sync-spa'),
  chalk = require('chalk'),
  htmlInjector = require('bs-html-injector'),
  webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  webpackConfig = require('./webpack.config'),
  express = require('express'),
  historyApiFallback = require('connect-history-api-fallback'),
  bodyParser = require('body-parser'),
  server = express(),
  routes = require('./api.js'),
  bundler;

webpackConfig.entry.vendor.push('webpack-hot-middleware/client?overlay=false&reload=true');
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.optimize.OccurenceOrderPlugin());

bundler = webpack(webpackConfig);

server.set('port', (process.env.PORT || 3000));
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS');
  next();
});

server.use(bodyParser.urlencoded({
  extended: true,
  parameterLimit: 10000,
  limit: 1024 * 1024 * 10
}));

server.use('/', routes);
server.listen(3000, function() {
  console.log('[' + chalk.blue('MockServer') + '] running at http://localhost:' + server.get('port') + '...');
});

bs.use(spa());
bs.use(htmlInjector);
bs.watch('app/*.jade').on('change', function () {
  htmlInjector();
});

bs.init({
  port: 4000,
  server: {
    baseDir: 'app',
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {colors: true},
        noInfo: true
      }),
      webpackHotMiddleware(bundler)
    ]
  },
  files: [
    'app/**/**/*.scss',
    'app/**/*.eot',
    'app/**/*.ttf',
    'app/**/*.woff',
    'app/**/*.png',
    'app/**/*.jpeg',
    'app/**/*.gif',
    'app/**/*.jpg',
    'app/**/*.svg'
  ],
  logPrefix: 'Laima',
  logConnections: true
});
