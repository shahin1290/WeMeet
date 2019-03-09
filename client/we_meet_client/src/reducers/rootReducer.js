import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import groupReducer from './groupReducer';
import createEventReducer from './createEventReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  events: eventsReducer,
  group: groupReducer,
  notification: createEventReducer,
  categories: categoriesReducer
});

export default rootReducer