import event_api from '../util/event_api'

export const fetchEvents = () => async dispatch => {
    const response =  await event_api.get('/events');
    
    dispatch({ type: 'FETCH_EVENTS', payload: response.data.events })
}