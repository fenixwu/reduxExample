import { INCREASE_NUM, DECREASE_NUM } from 'actions/actionTypes';

export default (state = 0, action) => {
  switch (action.type) {
    case INCREASE_NUM:
      return state + 1;
    case DECREASE_NUM:
      return state - 1;
    default:
      return state;
  }
};
