import { createStore, applyMiddleware, compose } from 'redux';
import Logger from 'redux-logger';
import rootReducer from 'reducers/index';
import callApiMiddleware from 'middlewares/callApiMiddleware';

const middleware = [
  callApiMiddleware,
  Logger(),
];

const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
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
