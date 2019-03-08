import React, { Component } from 'react';
import axios from "axios";


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
    const group = {
      name: this.state.name,
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
 
    let response = await axios.post('http://localhost:3000/events', { event }, { headers: credentials})
    this.setState({ navBarNotification: response.data.message })

  }

  render() {
     return (
      <div>
      <form onSubmit={this.createEvent}>
        <h1>Create an Event</h1>

          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={this.onChange}>
            </input>
          </div>

          <div>
            <label>Description</label>
            <textarea
              type="textarea"
              name="description"
              onChange={this.onChange}>
            </textarea>
          </div>

          <div>
            <label>Location</label>
            <textarea
              type="text"
              name="loation"
              onChange={this.onChange}>
            </textarea>
          </div>

          <div>
            <label>Date</label>
            <textarea
              type="text"
              name="date"
              onChange={this.onChange}>
            </textarea>
          </div>

          <div>
            <label>Time</label>
            <textarea
              type="text"
              name="time"
              onChange={this.onChange}>
            </textarea>
          </div>


          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              onChange={this.onChange}>
            </input>
          </div>

          <input type="submit" value="Submit"></input>
      </form>
      {this.state.navBarNotification}
      </div>
    )
  }
}

export default CreateGroup
  
