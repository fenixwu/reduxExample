export default store => next => action => {
  const { asyncData, types, ...rest } = action;

  if (!asyncData) return next(action);

  const { dispatch } = store;
  const [REQUEST, SUCCESS, ERROR] = types;

  dispatch({ ...rest, type: REQUEST });

  return asyncData.then(
    (result) => dispatch({ ...rest, payload: result, type: SUCCESS }),
    (error) => dispatch({ ...rest, payload: error, type: ERROR })
  );
};
