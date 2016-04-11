import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from 'containers/App';
import Reducers from 'reducers/reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(createLogger());
}

const store = compose(
  applyMiddleware.apply(this, middlewares)
)(createStore)(Reducers);


ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
