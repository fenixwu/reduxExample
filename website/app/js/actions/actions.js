import * as types from 'actions/actionTypes';

/**
 * action creators
 */

let nextCounterId = 0;

export const counterIncrease = (index) => ({
  type: types.COUNTER_INCREASE,
  index,
});

export const counterDecrease = (index) => ({
  type: types.COUNTER_DECREASE,
  index,
});

export const addCounter = () => ({
  type: types.ADD_COUNTER,
  index: nextCounterId++,
});

export const removeCounter = (index) => ({
  type: types.REMOVE_COUNTER,
  index,
});

export const getInitialApi = () => ({
  type: types.GET_INITIAL_API,
});
