import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import initialState from '../reducers/initialState';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
  );
} 