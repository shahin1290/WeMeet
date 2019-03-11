import React, { Component } from 'react';
import axios from "axios";
import FormControl  from "@material-ui/core/FormControl";
import  InputLabel  from "@material-ui/core/InputLabel";
import  Input  from "@material-ui/core/Input";
import  Button  from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { registerUser } from '../../redux-token-auth-config';


class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    headerMessage: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSignup= (e) => {
    e.preventDefault()
    const { registerUser } = this.props
    const {
      name,
      email,
      password_confirmation,
      password,
    } = this.state
    registerUser({ name, email, password_confirmation, password }) 
    .then(() => {
      this.setState({ headerMessage: `You are signed in` })
      this.props.history.push("/");
    })
    .catch((error) => {      
      this.setState({ headerMessage: `That did not fly....` })
    })
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "35%" }}>
          <h1>Sign Up Form</h1>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" name="name" onChange={this.onChange}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" onChange={this.onChange}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">password</InputLabel>
            <Input id="password" name="password" type="password" onChange={this.onChange}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password_confirmation">password confirmation</InputLabel>
            <Input id="password_confirmation" name="password_confirmation" type="password" onChange={this.onChange}/>
          </FormControl>

          <Button onClick={this.handleSignup} variant="contained" color="primary" size="medium">
              Submit
          </Button>
        </form>
        { this.state.headerMessage}
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser },
)(Signup)