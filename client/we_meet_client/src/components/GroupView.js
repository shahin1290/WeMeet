import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';



 class GroupView extends Component {
  constructor(props) {
    super(props);
    this.state = { group: {
      name: '',
      description: '',
      location: '',
      id: '',
      future_events: [],
      past_events: []
    } };
  }

   componentDidMount() {
    let id =  this.props.location.state.group.id;
    this.getGroup(id);
  }

   async getGroup(id) {
    const response = await axios.get(`http://localhost:3000/groups/${id}`);
    const group = response.data.group;
    this.setState({ group });
    

   }

   render() {
    let futureEvents = this.state.group.future_events.map(event => {
      return (
        <Link key={event.id} to={{pathname: `/events/${event.id}`, state: {event: event}}} style={{ textDecoration: 'none' }}>
          <h4>{event.title}</h4>
          <p>{event.date}</p>
        </Link>
      )
    })
    return (
      <div>
        <h1>This is the group show page for {this.state.group.name}</h1>
        <h3>Future Events:</h3>
        <div>{futureEvents}</div>
      </div>
    );
  }
}

 export default GroupView; 