import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions'

class Events extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { events: [] };
  // }

  // async getEvents() {
  //   const response = await axios.get("http://localhost:3000/events")
  //   const events = response.data.events
  //   this.setState({ events });
  // }

  componentDidMount() {
    this.props.fetchEvents();
    // this.getEvents()
  }

  render() {
    return (
      <div>
        <h3 style={{marginBottom: "4rem"}}>Events List</h3>
        {/* <ul>
          {this.state.events.map(event => <li key={event.id}>{event.title}</li>)}
        </ul> */}
      </div>
    )
  }
}

export default connect(null, { fetchEvents } )(Events);