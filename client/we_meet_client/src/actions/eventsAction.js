import base_api from '../util/base_api'
export const FETCH_EVENTS = "FETCH_EVENTS";

export const fetchEvents = () => async dispatch => {
    const response =  await base_api.get('/events');
    
    dispatch({ type: 'FETCH_EVENTS', payload: response.data.events })
}