import { CREATE_EVENT } from '../actions/eventsAction';

export default (state = '', action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return action.notification;
    default:
      return state;
  }
}