import { POST_RSVP } from '../actions/userAction'

export default (state = {}, action) => {
  switch (action.type) {
    case POST_RSVP:
      return action.notification;
    default:
      return state;
  }
}