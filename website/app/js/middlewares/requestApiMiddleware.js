import Superagent from 'superagent';
import combineUrl from 'utils/combineUrl';
import {
  GET_INITIAL_API_REQUEST,
  GET_INITIAL_API_SUCCESS,
  GET_INITIAL_API_ERROR,
} from 'actions/actionTypes';

const requestApiMiddleware = store => next => action => {
  if (action.type !== GET_INITIAL_API_REQUEST) return next(action);

  const { dispatch } = store;
  const path = combineUrl('/test');

  Superagent.get(path)
    .end((err, res) => {
      if (err) {
        dispatch({ type: GET_INITIAL_API_ERROR });
        return false;
      }

      dispatch({
        type: GET_INITIAL_API_SUCCESS,
        apiData: res.body,
      });
    });
};

export default requestApiMiddleware;
