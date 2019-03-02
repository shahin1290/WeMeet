import React, { Component } from 'react';
import axios from "axios";
import FormControl  from "@material-ui/core/FormControl";
import  InputLabel  from "@material-ui/core/InputLabel";
import  Input  from "@material-ui/core/Input";
import  Button  from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { registerUser } from '../redux-token-auth-config';



class Signup extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSignup= (e) => {
    e.preventDefault()
    const { registerUser } = this.props
    const {
      email,
      password_confirmation,
      password,
    } = this.state
    registerUser({ email, password_confirmation, password }) // <-<-<-<-<- here's the important part <-<-<-<-<-
  }

  // handleSignup = async(e) => {
  //   e.preventDefault();

  //   let response = await axios.post('http://localhost:3000/auth/', { 
  //                         email: this.state.email, 
  //                         password: this.state.password,
  //                         password_confirmation: this.state.password_confirmation 
  //                         }, { headers: {
  //                             'Accept': 'application/json',
  //                             'Content-Type': 'application/json',
  //                           }}
  //                         )

  //   console.log(response);
  // }
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
          {/* <input type="submit"/> */}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser },
)(Signup)