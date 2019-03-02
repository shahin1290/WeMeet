import { generateAuthActions } from 'redux-token-auth'

 const config = {
  authUrl: 'http://localhost:3000/auth',
  userAttributes: {

     // email: 'email',
    // imageUrl: 'image',
    'access-token': 'access-token',
    client: 'client',
    expiry: 'expiry',
    uid: 'uid'
  },
  userRegistrationAttributes: {
    firstName: 'first_name',
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
  
