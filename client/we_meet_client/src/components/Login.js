import React, { Component } from 'react';
import axios from "axios";
class Login extends Component {

  handleLogin = async(e) => {
    e.preventDefault();

    const credentials = {
      'access-token': localStorage.getItem('access-token'),
      'token-type': localStorage.getItem('token-type'),
      'client': localStorage.getItem('client'),
      'expiry': localStorage.getItem('expiry'),
      'uid': localStorage.getItem('uid'),
    }

    let response = await axios.post('http://localhost:3000/auth/sign_in', { 
                          email: this.email.value, 
                          password: this.password.value 
                        }, { headers: credentials })

    console.log(response);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <input name="email" ref={(input) => this.email = input}/>
          <input name="password" type="password" ref={(input) => this.password = input}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;