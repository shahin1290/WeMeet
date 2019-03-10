import { FETCH_EVENT } from '../actions/eventsAction'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENT:
      return action.event;
    default:
      return state;
  }
}