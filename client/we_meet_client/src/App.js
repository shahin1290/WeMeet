import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/Home/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import NavigationBar from './components/Home/NavigationBar';
import CategoryView from './components/Categories/CategoryView';
import Group from './components/Groups/Group';
import Event from './components/Events/Event';
import CreateGroup from './components/Groups/CreateGroup';
import CreateEvent from './components/Events/CreateEvent';
import UserProfileView from './components/Home/UserProfileView';
import history from './components/Auth/history'

class App extends Component {
  render() {
    return (
      <Router history={history}> 
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/events/:id' component={Event}></Route>
            <Route  path='/login' component={Login}></Route>
            <Route  path='/signup' component={Signup}></Route>
            <Route  path='/groups/:id' component={Group}></Route>
            <Route  path='/categories/:id' component={CategoryView}></Route>
            <Route  path='/create-group' component={CreateGroup}></Route>
            <Route  path='/create-event' component={CreateEvent}></Route>
            <Route  path='/users/:id' component={UserProfileView}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;