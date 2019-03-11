import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOutUser } from '../../redux-token-auth-config'
import  Button  from "@material-ui/core/Button"

class Logout extends Component {
 
  signOut = (e) => {
    e.preventDefault()
    const { signOutUser } = this.props
    signOutUser()
    .then(() => {
      this.props.history.push("/");
    })
  }

  render () {
    return (
      <div>
        <Button onClick={this.signOut} color="inherit">
          Sign Out
        </Button>
      </div>
    ) 
  }
}

export default connect(
  null,
  { signOutUser },
)(Logout)