import { GET_MEMBERSHIPS } from '../actions/userAction'

export default (state = [], action) => {
  switch (action.type) {
    case GET_MEMBERSHIPS:
      return action.groupMembers;
    default:
      return state;
  }
}