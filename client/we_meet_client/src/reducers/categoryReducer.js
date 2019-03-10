import { FETCH_CATEGORY } from '../actions/categoriesAction'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return action.category;
    default:
      return state;
  }
}