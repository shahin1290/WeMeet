import base_api from '../util/base_api'
export const FETCH_GROUP = "FETCH_GROUP";

export const fetchGroup = (id) => async dispatch => {
    const response =  await base_api.get(`/groups/${id}`);
    dispatch({ type: 'FETCH_GROUP', payload: response.data.group })
}