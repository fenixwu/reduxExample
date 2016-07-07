import path from 'path';
import express from 'express';

import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import { Router, RouterContext, match } from 'react-router';

import configureStore from './app/js/store/configureStore';
import routes from './app/js/routes';
import apiMiddleware from './app/js/middlewares/apiMiddleware';

const bs = require('browser-sync').create();
const spa = require('browser-sync-spa');
const chalk = require('chalk');
const htmlInjector = require('bs-html-injector');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const historyApiFallback = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const server = express();
const outes = require('./api.js');
let bundler;

webpackConfig.entry.vendor.push('webpack-hot-middleware/client?overlay=false&reload=true');
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.optimize.OccurenceOrderPlugin());

bundler = webpack(webpackConfig);

// Server-side rendering
server.use((req, res, next) => {
  
});

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Pure ReactJS Website</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link href="application.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/vendor.js"></script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

server.listen(5000);

// Run 虛擬Server
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

// 監聽版面異動
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
