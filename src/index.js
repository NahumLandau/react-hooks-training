import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './index.css';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';

import Provider, { applyMiddleware, createStore } from './store';
import reducer, { initialState } from './store/reducer';
import logger from './middlewares/logger';
import thunk from './middlewares/thunk';

const store = createStore(reducer, initialState, applyMiddleware(logger, thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root'),
);
