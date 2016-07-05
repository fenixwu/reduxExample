import * as Types from 'actions/actionTypes';

const initialApiState = {
  apiReady: false,
  apiError: false,
  apiData: {},
};

export default (state = initialApiState, action) => {
  switch (action.type) {
    case Types.REQUEST_API:
      return Object.assign({}, ...state, {
        apiReady: false,
      });
    case Types.REQUEST_API_SUCCESS:
      return Object.assign({}, ...state, {
        apiReady: true,
        apiError: false,
        apiData: action.payload,
      });
    case Types.REQUEST_API_ERROR:
      return Object.assign({}, ...state, {
        apiReady: true,
        apiError: true,
      });
    default:
      return state;
  }
};
