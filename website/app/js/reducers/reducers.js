import Immutable from 'immutable';
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

const initialApiState = Immutable.fromJS({
  apiReady: false,
  apiError: false,
  apiData: {},
});

export const initialApi = (state = initialApiState, action) => {
  switch (action.type) {
    case Types.GET_INITIAL_API:
      return state.set('apiReady', false);
    case Types.GET_INITIAL_API_SUCCESS:
      return state.withMutations((obj) => {
        obj
         .set('apiReady', true)
         .set('apiError', false)
         .set('apiData', action.apiData);
      });
    case Types.GET_INITIAL_API_ERROR:
      return state.withMutations((obj) => {
        obj
         .set('apiReady', true)
         .set('apiError', true);
      });
    default:
      return state;
  }
};
