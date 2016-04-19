import * as types from 'actions/actionTypes';
import Superagent from 'superagent';
import combineUrl from 'utils/combineUrl';

/**
 * action creators
 */

// Counter
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

// Call Api
export const requestApi = (param) => ({
  types: [
    types.REQUEST_API,
    types.REQUEST_API_SUCCESS,
    types.REQUEST_API_ERROR,
  ],
  asyncData: asyncData(param)
});

function asyncData(param) {
  return new Promise((resolve, reject) => {
    Superagent[param.method](combineUrl(param.path))
      .end((err, res) => {
        if (err) {
          reject(err);
          return null;
        }
        resolve(res.body);
      });
  });
}
