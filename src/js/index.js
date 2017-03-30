import React from 'react';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer';
import App from './App';
import { CART_HEIGHT } from './constants';

const store = createStore(
  reducer,
  {
    tickets: [],
    cart: {
      x: 0,
      y: window.innerHeight - CART_HEIGHT
    },
    score: 0,
    isFinished: false
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
);
