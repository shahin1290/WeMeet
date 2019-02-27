import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        
      </div>
    );
  }
}

