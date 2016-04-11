import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import Reducers from 'reducers/reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(logger())
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(Reducers, initialState);
}
