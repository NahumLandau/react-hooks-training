
const thunk = (action, state, next) => {
  if (typeof action.payload === 'function') {
    Promise.resolve(action.payload()).then((res) => {
      next({ type: action.type, payload: res });
    });
  } else {
    next(action);
  }
};

export default thunk;
