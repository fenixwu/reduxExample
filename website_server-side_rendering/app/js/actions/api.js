import * as types from 'actions/actionTypes';
import webApi from '../webApi';

/**
 * action creators
 */

export const requestApi = (param) => ({
  types: [
    types.REQUEST_API,
    types.REQUEST_API_SUCCESS,
    types.REQUEST_API_ERROR,
  ],
  asyncData: webApi(param)
});
