import base_api from '../util/base_api'
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_CATEGORY = "FETCH_CATEGORY";


export const fetchCategories = () => async dispatch => {
  const response =  await base_api.get("/categories");
  dispatch({ type: 'FETCH_CATEGORIES', categories: response.data.categories })
}

export const fetchCategory = (id) => async dispatch => {
    const response =  await base_api.get(`/categories/${id}`);
    dispatch({ type: 'FETCH_CATEGORY', category: response.data.category })
}
