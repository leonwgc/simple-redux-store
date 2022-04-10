import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, configureStore } from '../src';

const store = configureStore({}, true);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
