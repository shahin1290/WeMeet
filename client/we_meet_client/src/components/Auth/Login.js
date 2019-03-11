import React, { Component } from 'react';
import FormControl  from "@material-ui/core/FormControl";
import  InputLabel  from "@material-ui/core/InputLabel";
import  Input  from "@material-ui/core/Input";
import  Button  from "@material-ui/core/Button";
import { connect } from 'react-redux'
import { signInUser } from '../../redux-token-auth-config'


class Login extends Component {
  state = {
    email: '',
    password: '',
    headerMessage: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin = (e)=> {
    e.preventDefault()
    const { signInUser } = this.props
    const {
      email,
      password,
    } = this.state
    signInUser({ email, password })
    .then(() => {
      this.setState({ headerMessage: `You are logged in` })
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
          <h1>Log In Form</h1>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" onChange={this.onChange}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">password</InputLabel>
            <Input id="password" name="password" type="password" onChange={this.onChange}/>
          </FormControl>

          <Button onClick={this.handleLogin} variant="contained" color="primary" size="medium">
            Submit
          </Button>
          {/* <input type="submit"/> */}
        </form>
        { this.state.headerMessage}
      </div>
    );
  }
}

export default connect(
  null,
  { signInUser },
)(Login)