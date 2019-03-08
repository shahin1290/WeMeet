import React, { Component } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

class UserProfileView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        organized_groups: []
      }
    };
  }
  componentDidMount() {
    console.log(this.props.currentUser)
    this.getUser(this.props.currentUser.attributes.id)
  }

  async getUser(id) {
    const credentials = { 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'expiry': localStorage.getItem('expiry'), 'uid': localStorage.getItem('uid'), }

    const response = await axios.get(`http://localhost:3000/users/${id}`, { headers: credentials })
    const user = response.data.user
    this.setState({ user });
  }

  render() {
    let groups = this.state.user.organized_groups;
    let groupList = groups.map(group => {
      return (
        <div key={group.id}>
          <h3>
            {group.name}
          </h3>
        </div>
      )
    })
    return (
      <>

          <h1>Hello {this.state.user.name}</h1>

          <h2>You are the organizer of {groups.length} groups</h2>
          

          {groupList}


      </>
    );
  }
}

export default connect(mapStateToProps)(UserProfileView);