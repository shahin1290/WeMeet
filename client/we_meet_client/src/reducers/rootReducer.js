import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import { reduxTokenAuthReducer } from 'redux-token-auth'

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  events: eventsReducer
});

export default rootReducer