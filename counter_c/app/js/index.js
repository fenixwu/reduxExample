import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from 'containers/App';
import Reducers from 'reducers/reducers';
import logger from 'redux-logger';

const createStoreWithMiddleware = compose(
  applyMiddleware(logger())
)(createStore);

const store = createStoreWithMiddleware(Reducers, {});

ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
