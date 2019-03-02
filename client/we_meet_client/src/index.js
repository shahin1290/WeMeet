import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import { verifyCredentials } from './redux-token-auth-config'

const store = configureStore()
verifyCredentials(store)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
  document.getElementById('root')
);
