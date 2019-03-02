import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import { reduxTokenAuthReducer } from 'redux-token-auth'

export default combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  events: eventsReducer
});