import base_api from '../util/base_api'
export const POST_RSVP = "POST_RSVP";

export const postRsvp = (id) => async dispatch => {
    const credentials = {
        'access-token': localStorage.getItem('access-token'),
        'token-type': localStorage.getItem('token-type'),
        'client': localStorage.getItem('client'),
        'expiry': localStorage.getItem('expiry'),
        'uid': localStorage.getItem('uid'),
    }
    const response = await base_api.post(`/events/${id}/attendees`, { }, { headers: credentials})
    dispatch({ type: 'POST_RSVP', notification: response.data.message })
}