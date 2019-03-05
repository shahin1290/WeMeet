import { FETCH_GROUP } from '../actions/groupAction';
import { FETCH_GROUP_MEMBERS } from '../actions/groupAction';
import initialState from './initialState';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_GROUP:
      return action.payload;
    default:
      return state;
  }
}