import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import Reducers from 'reducers/index';

const createStoreWithMiddleware = compose(
  applyMiddleware(logger()),
  global.devToolsExtension ? global.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(Reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers/index').default;

      store.replaceReducer(nextReducers);
    });
  }

  return store;
}
