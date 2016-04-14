import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counter, counterFilter } from 'reducers/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  counterFilter,
});

export default rootReducer;
