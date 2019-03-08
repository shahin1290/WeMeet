import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';

class CreateGroup extends Component {
  state = {
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    navBarNotification: ''
  }
  
  componentDidMount() {

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
    const credentials = {
      'access-token': localStorage.getItem('access-token'),
      'token-type': localStorage.getItem('token-type'),
      'client': localStorage.getItem('client'),
      'expiry': localStorage.getItem('expiry'),
      'uid': localStorage.getItem('uid'),
    }
    let id = this.props.group.id
    let response = await axios.post(`http://localhost:3000/groups/${id}/events`, { event }, { headers: credentials})
    this.setState({ navBarNotification: response.data.message })

  }

  render() {
     return (
      <div>
        { this.state.navBarNotification }
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
      {this.state.navBarNotification}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    group: state.group
  }
}

export default connect(mapStateToProps)(CreateGroup);

  
