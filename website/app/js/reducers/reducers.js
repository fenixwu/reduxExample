import Immutable from 'immutable';
import { getJSON } from 'utils/requestApi';
import * as Types from 'actions/actionTypes';

const initialState = Immutable.List.of(0);

export const counter = (state = initialState, action) => {
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

export const counterFilter = (state = Immutable.List.of(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const requestApi = (state = Immutable.fromJS({}), action) => {
  switch (action.type) {
    case Types.GET_INITIAL_API:
      getJSON('/test').then((cb) => {
        // Call API & return success
        if (cb && cb.success === true) {
          return state.update(cb.message);
        }
      }, () => {
        // Request API error
        alert('Request API error');
      });
      break;
    default:
      return state;
  }
};
