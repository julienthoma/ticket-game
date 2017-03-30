import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import ExampleReducer from './reducers/ExampleReducer';
import App from './containers/App';

const store = createStore(
  ExampleReducer,
  {
    tickets: [
        {
            position: [50, 50],
            points: 50
        }
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
);
