import { generateAuthActions } from 'redux-token-auth'

 const config = {
  authUrl: 'https://afternoon-inlet-43832.herokuapp.com/auth',
  userAttributes: {

     name: 'name',
     email: 'email',
    // imageUrl: 'image',
    'access-token': 'access-token',
    client: 'client',
    expiry: 'expiry',
    uid: 'uid',
    id: 'id'
  },
  userRegistrationAttributes: {
    name: 'name',
  },
}


const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

 export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} 
  
