import * as types from 'actions/actionTypes';

/**
 * action creators
 */

let nextCounterId = 0;

export const counterIncrease = (index) => {
  return {
    type: types.COUNTER_INCREASE,
    index
  };
};

export const counterDecrease = (index) => {
  return {
    type: types.COUNTER_DECREASE,
    index
  };
};

export const addCounter = () => {
  return {
    type: types.ADD_COUNTER,
    index: nextCounterId++
  };
};

export const removeCounter = (index) => {
  return {
    type: types.REMOVE_COUNTER,
    index
  };
};
