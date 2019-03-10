import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventsAction'

class CreateEvent extends Component {
  state = {
    title: '',
    description: '',
    location: '',
    date: '',
    time: ''
  }
  
  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createEvent = async(e) => {
    e.preventDefault();
    const event = {
      title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      date: this.state.date,
      time: this.state.time, 
    }
    
    let id = this.props.group.id
    this.props.createEvent(event, id)
  }

  render() {
     return (
      <div>
        { this.props.notification }
      <form onSubmit={this.createEvent}>
        <h1>Create an Event</h1>
          <div>
            <label>Title</label>
            <input type="text" name="title" onChange={this.onChange} /> 
          </div>

          <div>
            <label>Description</label>
            <textarea type="text" name="description" onChange={this.onChange}></textarea>
          </div>

          <div>
            <label>Location</label>
            <input type="text" name="location" onChange={this.onChange} />
          </div>

          <div>
            <label>Date</label>
            <input type="text" name="date" onChange={this.onChange} />
          </div>

          <div>
            <label>Time</label>
            <input type="text" name="time" onChange={this.onChange} />
          </div>

          <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    group: state.group,
    notification: state.postEventNotification
  }
}

export default connect(mapStateToProps, { createEvent })(CreateEvent);
