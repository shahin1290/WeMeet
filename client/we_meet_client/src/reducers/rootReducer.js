import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import eventsReducer from './eventsReducer'
import eventReducer from './eventReducer'
import groupReducer from './groupReducer'
import createEventReducer from './createEventReducer'
import categoriesReducer from './categoriesReducer'
import createGroupReducer from './createGroupReducer'
import categoryReducer from './categoryReducer'
import rsvpReducer from './rsvpReducer';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  events: eventsReducer,
  event: eventReducer,
  group: groupReducer,
  postEventNotification: createEventReducer,
  categories: categoriesReducer,
  postGroupNotification: createGroupReducer,
  category: categoryReducer,
  postRsvpNotification: rsvpReducer
});

export default rootReducer