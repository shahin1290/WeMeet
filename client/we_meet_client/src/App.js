import React, { Component } from 'react';
import Events from './components/Events/Events'

class App extends Component {
  render() {
    return (
      <div>
        <h1>WeMeet</h1>
        <Events />
      </div>
    );
  }
}

export default App;