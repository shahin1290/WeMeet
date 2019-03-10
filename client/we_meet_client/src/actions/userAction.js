import base_api from '../util/base_api'
export const POST_RSVP = "POST_RSVP";
export const POST_MEMBERSHIPS = "POST_MEMBERSHIPS";
export const GET_MEMBERSHIPS = "GET_MEMBERSHIPS";

const credentials = {
    'access-token': localStorage.getItem('access-token'),
    'token-type': localStorage.getItem('token-type'),
    'client': localStorage.getItem('client'),
    'expiry': localStorage.getItem('expiry'),
    'uid': localStorage.getItem('uid'),
}

export const postRsvp = (id) => async dispatch => {
    const response = await base_api.post(`/events/${id}/attendees`, { }, { headers: credentials})
    dispatch({ type: 'POST_RSVP', notification: response.data.message })
}

export const postMemberships = (id) => async dispatch => {
    const response = await base_api.post(`/groups/${id}/memberships`, { }, { headers: credentials})
    dispatch({ type: 'POST_MEMBERSHIPS', notification: response.data.message })
}

export const getMemberships = (id) => async dispatch => {
    const response = await base_api.get(`/groups/${id}/memberships`, { }, { headers: credentials})
    dispatch({ type: 'GET_MEMBERSHIPS', groupMembers: response.data })
}