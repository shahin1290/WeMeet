import React, { Component } from 'react';
import axios from "axios";
class Signup extends Component {

  handleSignup = async(e) => {
    e.preventDefault();

    let response = await axios.post('http://localhost:3000/auth/', { 
                          email: this.email.value, 
                          password: this.password.value,
                          password_confirmation: this.password_confirmation.value 
                          }, { headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                            }}
                          )

    console.log(response);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSignup}>
          <input name="email" ref={(input) => this.email = input}/>
          <input name="password" type="password" ref={(input) => this.password = input}/>
          <input name="password_confirmation" type="password" ref={(input) => this.password_confirmation = input}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Signup;