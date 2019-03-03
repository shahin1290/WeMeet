const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        email: null, // <-- Just an example. Attributes are whatever you specify in your cofig (below).
      },
    },
  },
  events: []
}

export default initialState