import { generateAuthActions } from 'redux-token-auth'

 const config = {
  authUrl: 'http://localhost:3000/auth',
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
  
