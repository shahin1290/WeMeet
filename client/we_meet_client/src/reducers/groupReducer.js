import { FETCH_GROUP } from '../actions/groupAction';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUP:
      return action.payload;
    default:
      return state;
  }
}