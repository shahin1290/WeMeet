import base_api from '../util/base_api'
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const fetchCategories = () => async dispatch => {
  const response =  await base_api.get("/categories");
  dispatch({ type: 'FETCH_CATEGORIES', categories: response.data.categories })
}