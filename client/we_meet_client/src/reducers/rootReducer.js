import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import groupReducer from './groupReducer';
import createEventReducer from './createEventReducer';
import categoriesReducer from './categoriesReducer';
import createGroupReducer from './createGroupReducer';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  events: eventsReducer,
  group: groupReducer,
  postEventNotification: createEventReducer,
  categories: categoriesReducer,
  postGroupNotification: createGroupReducer
});

export default rootReducer