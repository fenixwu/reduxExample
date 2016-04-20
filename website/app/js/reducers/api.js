import Immutable from 'immutable';
import * as Types from 'actions/actionTypes';

const initialApiState = Immutable.fromJS({
  apiReady: false,
  apiError: false,
  apiData: {},
});

export default (state = initialApiState, action) => {
  switch (action.type) {
    case Types.REQUEST_API:
      return state.set('apiReady', false);
    case Types.REQUEST_API_SUCCESS:
      return state.withMutations((obj) => {
        obj
          .set('apiReady', true)
          .set('apiError', false)
          .set('apiData', action.payload);
      });
    case Types.REQUEST_API_ERROR:
      return state.withMutations((obj) => {
        obj
          .set('apiReady', true)
          .set('apiError', true);
      });
    default:
      return state;
  }
};
