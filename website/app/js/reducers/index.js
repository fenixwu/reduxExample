import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  counter,
  initialApi,
} from 'reducers/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  initialApi,
});

export default rootReducer;
