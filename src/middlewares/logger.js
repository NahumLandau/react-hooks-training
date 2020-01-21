import reducer from '../store/reducer';

const logger = (action, state, next) => {
  console.log('%cPrevious State:', 'color: #9E9E9E; font-weight: 700;', state);
  console.log('%cAction:', 'color: #00A7F7; font-weight: 700;', action);
  console.log('%cNext State:', 'color: #47B04B; font-weight: 700;', reducer(state, action));
  next(action);
};

export default logger;
