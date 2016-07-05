import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'store/configureStore';
import routes from 'routes/index';

const store = configureStore(browserHistory, window.__initialState__);
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
