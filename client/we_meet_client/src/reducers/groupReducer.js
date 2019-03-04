import { FETCH_GROUP } from '../actions/groupAction';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_GROUP:
      return action.payload;
    default:
      return state;
  }
}