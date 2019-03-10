import { POST_MEMBERSHIPS } from '../actions/userAction'

export default (state = '', action) => {
  switch (action.type) {
    case POST_MEMBERSHIPS:
      return action.notification;
    default:
      return state;
  }
}