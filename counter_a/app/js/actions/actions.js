import * as types from 'actions/actionTypes';

/**
 * action creators
 */

export const increaseNum = () => {
  return {
    type: types.INCREASE_NUM
  };
};

export const decreaseNum = () => {
  return {
    type: types.DECREASE_NUM
  };
};
