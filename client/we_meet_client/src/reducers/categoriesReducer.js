import { FETCH_CATEGORIES } from '../actions/categoriesAction';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}