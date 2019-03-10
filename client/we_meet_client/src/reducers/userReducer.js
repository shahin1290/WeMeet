import { GET_USER } from '../actions/userAction'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}