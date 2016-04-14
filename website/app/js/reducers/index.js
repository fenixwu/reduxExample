import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counter, counterFilter, requestApi } from 'reducers/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  counterFilter,
  requestApi,
});

export default rootReducer;
