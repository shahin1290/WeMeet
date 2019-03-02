import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOutUser } from '../redux-token-auth-config'
import  Button  from "@material-ui/core/Button"

class Logout extends Component {
  signOut = (e) => {
    e.preventDefault()
    const { signOutUser } = this.props
    signOutUser() 
  }

  render () {
    const { signOut } = this

    return (
      <Button onClick={signOut} color="inherit">
        Sign Out
      </Button>
    ) 
  }
}

export default connect(
  null,
  { signOutUser },
)(Logout)