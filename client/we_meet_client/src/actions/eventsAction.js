import base_api from '../util/base_api'
export const FETCH_EVENTS = "FETCH_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";
export const FETCH_EVENT = "FETCH_EVENT";


export const fetchEvents = () => async dispatch => {
    const response =  await base_api.get('/events');
    
    dispatch({ type: 'FETCH_EVENTS', events: response.data.events })
}

export const createEvent = (event, id) => async dispatch => {
    const credentials = {
        'access-token': localStorage.getItem('access-token'),
        'token-type': localStorage.getItem('token-type'),
        'client': localStorage.getItem('client'),
        'expiry': localStorage.getItem('expiry'),
        'uid': localStorage.getItem('uid'),
    }
    const response = await base_api.post(`/groups/${id}/events`, { event }, { headers: credentials})
    dispatch({ type: 'CREATE_EVENT', notification: response.data.message })
}

export const fetchEvent = (id) => async dispatch => {
    const response =  await base_api.get(`/events/${id}`);
    dispatch({ type: 'FETCH_EVENT', event: response.data.event })
}
