import * as Types from '../actions/actionTypes';

export default (state = [0], action) => {
  switch (action.type) {
    case Types.COUNTER_INCREASE:
      return [
        ...state.slice(0, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1),
      ];
    case Types.COUNTER_DECREASE:
      return [
        ...state.slice(0, action.index),
        state[action.index] - 1,
        ...state.slice(action.index + 1),
      ];
    case Types.ADD_COUNTER:
      return [...state, 0];
    case Types.REMOVE_COUNTER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};
