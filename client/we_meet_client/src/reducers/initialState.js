const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        email: null, 
        id: null,
        name: null
      },
    },
  },
  events : [],
  group: {},
  notification: {}
}

export default initialState