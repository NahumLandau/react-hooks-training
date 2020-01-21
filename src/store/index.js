import React, {
  createContext, useReducer, useContext, useEffect, useMemo,
} from 'react';

const contextStore = createContext();

const useCustomReducer = (reducer, initialState, middleWares) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  const customDispatch = (action) => {
    middleWares.map((mw, index, arr) => mw(action, state, (actn) => {
      if (index !== arr.length - 1) {
        return arr[index + 1];
      }
      return dispatch(actn);
    }));
  };
  return [state, middleWares ? customDispatch : dispatch];
};

export const applyMiddleware = (...params) => [...params];

export const createStore = (reducer, initialState, middleWares) => (
  { reducer, initialState, middleWares }
);


const Provider = ({ children, store }) => {
  const { reducer, initialState, middleWares = null } = store;
  return (
    <contextStore.Provider value={useCustomReducer(reducer, initialState, middleWares)}>
      {children}
    </contextStore.Provider>
  );
};

export const useStore = () => useContext(contextStore);

export default Provider;
