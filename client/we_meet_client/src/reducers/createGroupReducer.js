import { CREATE_GROUP } from '../actions/groupAction';

export default (state = '', action) => {
  switch (action.type) {
    case CREATE_GROUP:
      return action.notification;
    default:
      return state;
  }
}