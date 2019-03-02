import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, withRouter } from 'react-router-dom'
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import NavigationBar from './components/NavigationBar';
import CategoryView from './components/CategoryView';
import GroupView from './components/GroupView';
import CreateGroup from './components/CreateGroup';


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
            <Route  path='/groups/:id' component={GroupView}></Route>
            <Route  path='/categories/:id' component={CategoryView}></Route>
            <Route  path='/create-group' component={CreateGroup}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;