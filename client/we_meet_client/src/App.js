import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, withRouter } from 'react-router-dom'
import Events from './components/Events/Events';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/signup/Signup';
import NavigationBar from './components/navbar/NavigationBar'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route  path='/login' component={Login}></Route>
            <Route  path='/signup' component={Signup}></Route>
            <Route  path='/protected' component={Events}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;