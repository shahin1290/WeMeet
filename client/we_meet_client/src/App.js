import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Events from './components/Events/Events';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/protected' component={Events}></Route>
          {/* <Route exact path='/groups/:id' component={GroupView}></Route>
          <Route exact path='/categories/:id' component={CategoryView}></Route>
          <Route exact path='/users/:id' component={UserProfileView}></Route> */}

        </Switch>
      </div>
    );
  }
}

export default App;