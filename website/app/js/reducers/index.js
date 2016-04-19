import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  counter,
  api,
} from 'reducers/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  api,
});

export default rootReducer;
