import base_api from '../util/base_api'
export const FETCH_GROUP = "FETCH_GROUP";
export const CREATE_GROUP = "CREATE_GROUP";


export const fetchGroup = (id) => async dispatch => {
    const response =  await base_api.get(`/groups/${id}`);
    dispatch({ type: 'FETCH_GROUP', payload: response.data.group })
}

export const createGroup = (group) => async dispatch => {
    const credentials = {
        'access-token': localStorage.getItem('access-token'),
        'token-type': localStorage.getItem('token-type'),
        'client': localStorage.getItem('client'),
        'expiry': localStorage.getItem('expiry'),
        'uid': localStorage.getItem('uid'),
    }
    const response = await base_api.post("/groups", { group }, { headers: credentials})
    dispatch({ type: 'CREATE_GROUP', notification: response.data.message })
}