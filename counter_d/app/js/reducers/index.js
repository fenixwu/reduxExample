import { combineReducers } from 'redux';
import Immutable from 'immutable';
import * as Types from 'actions/actionTypes';

const initialState = Immutable.List.of(0);

const counter = (state = initialState, action) => {
  switch (action.type) {
    case Types.COUNTER_INCREASE:
      return state.set(action.index, state.get(action.index) + 1);
    case Types.COUNTER_DECREASE:
      return state.set(action.index, state.get(action.index) - 1);
    case Types.ADD_COUNTER:
      return state.push(0);
    case Types.REMOVE_COUNTER:
      return state.remove(action.index, 1);
    default:
      return state;
  }
};

// This reducer is useless, just to see if combineReducers working normally.
const counterFilter = (state = Immutable.List.of(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  counter,
  counterFilter
});
