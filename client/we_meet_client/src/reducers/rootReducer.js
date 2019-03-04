import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  events: eventsReducer,
  group: groupReducer
});

export default rootReducer