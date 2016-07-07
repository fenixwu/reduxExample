import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import apiMiddleware from 'middlewares/apiMiddleware';
import { routerReducer } from 'react-router-redux';
import { counter, api } from 'reducers/index';

// 合併所有 Reducer
const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  api,
});

// 將所有 Middleware 統一放入陣列
const middleware = [
  apiMiddleware,
  logger(),
];

// 將所有Middleware合併
const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
  global.devToolsExtension ? global.devToolsExtension() : f => f
)(createStore);

export default function configureStore(history, initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers/index').default;

      store.replaceReducer(nextReducers);
    });
  }
  return store;
}
