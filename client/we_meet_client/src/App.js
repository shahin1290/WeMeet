import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import NavigationBar from './components/NavigationBar';
import CategoryView from './components/CategoryView';
import Group from './components/GroupView/Group';
import Event from './components/EventView/Event';
import CreateGroup from './components/CreateGroup';
import UserProfileView from './components/UserProfileView';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
            <Route  path='/users/:id' component={UserProfileView}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;