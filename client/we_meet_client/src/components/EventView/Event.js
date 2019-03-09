import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import moment from 'moment'
import base_api from "../../util/base_api";


class EventView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      event: {
        title: '',
        date: '',
        time: '',
        description: '',
        location: '',
        group: {
          name: '',
          organizer: {}
        },
        attendees: []
      }
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.getEvent(id)
  }

  async getEvent(id) {
    const response = await base_api.get(`/events/${id}`)
    const event = response.data.event
    this.setState({ event });
  }

  rsvpToEvent = async() => {
    const credentials = { 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'expiry': localStorage.getItem('expiry'), 'uid': localStorage.getItem('uid'), }
    const id = this.props.match.params.id
    await base_api.post(`/events/${id}/attendees`, {}, { headers: credentials }) 
    this.getEvent(id);
  }


  render() {
    let attendeeList = this.state.event.attendees.map(attendee => {
      return (
        <p key={attendee.id}>{attendee.name}</p>
      )
    })
    return (
      <>
       <div style={{ borderTop: "2px solid rgba(0,0,0,.12)", borderBottom: "1px solid rgba(0,0,0,.12)"}}>
        <div
          style={{
            position: "absolute",
            marginTop: "1.4rem",
            marginLeft: "5rem",
            borderRadius: "4px",
            backgroundColor: "#f6f7f8",
            width: "50px",
            height: "55px",
            padding: "5px",
            border: "0.5px solid rgba(46,62,72,.6)"
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "1.1",
              color: "red"
            }}
          >
            {moment(this.state.event.date).format("MM")}
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "rgba(46,62,72,.6)",
              fontSize: "14px"
            }}
          >
            {moment(this.state.event.date).format("MMM")}
          </div>
        </div>
        <div style={{ margin: "1.5rem", marginLeft: "9rem" }}>
          <div style={{
              fontWeight: "400",
              lineHeight: "0.8",
              marginLeft:"0.1rem"
            }}>
                {moment(this.state.event.date).format("MMMM Do YYYY")}
                {" at "}
                {moment(this.state.event.time).format("h:mm a")}
          </div>
          <h1 style={{ fontSize: "2.75rem" }}>{this.state.event.title}</h1>
          <div>
            <img
              src="event.group.organizer.image_url"
              style={{
                height: "40px",
                borderRadius: "80px",
                position: "absolute",
                marginTop: "0.4rem"
              }}
            />
          </div>
          <div
            style={{
              fontWeight: "400",
              lineHeight: "1.5",
              marginBottom: "1rem",
              marginLeft: "3.2rem"
            }}
          >
            <p>
              Hosted by{" "}
              <span style={{ fontWeight: "bold", color: "teal" }}>
                {this.state.event.group.organizer.name}
              </span>
            </p>
            <p>
              From{" "}
              <span style={{ fontWeight: "bold", color: "teal" }}>
                {this.state.event.group.name}
              </span>
            </p>
          </div>
          <div>
            </div>
            <h1 style={{ marginTop:"1.4rem", fontSize:"1.4rem", position:"absolute", right:"18.5rem", top:"5rem" }}>Are you going?</h1>
            <div>
            <button style={{position:"absolute", width:"250px", right:"13.3rem", top:"9rem", fontSize:"2rem"}}
    
                // id={`attend-event-${event.id}`}
                onClick={this.rsvpToEvent}
              >
                RSVP
            </button>
          </div>
        </div>
      </div>
        

      <div style={{ backgroundColor: "#f6f7f8" }}>
      <div className="flex">
        <div className="w-3/5">
          <img src="event.image_url" style={{ width: "600px", marginLeft: "9rem", marginTop: "3rem", borderRadius: "5px" }} />
          <h2 style={{ fontSize: "2rem", marginLeft: "9rem", marginTop: "2rem" }}>Details</h2>
          <p style={{ fontSize: "1rem", marginLeft: "9rem", marginTop: "2rem" }}>{this.state.event.description}</p>
          <div style={{ marginLeft: "9rem", marginTop: "2rem", marginBottom: "10rem" }}>
            <h2 style={{ fontSize: "2rem" }}>Attendees ({this.state.event.attendees.length} rsvp's)</h2>
            {attendeeList}
          </div>
        </div>
        <div className="w-2/5">
          <div className="sidebar" style={{ padding:"0.5rem", backgroundColor: "white", width: "300px", marginLeft: "3rem", marginTop: "2.5rem", borderRadius: "5px", border: "1px solid rgba(0,0,0,.12)" }}>
            <div style={{lineHeight:"1.5", paddingBottom:"1rem"}}><span style={{fontWeight:"bold"}}>Date:</span><br></br>{moment(this.state.event.date).format("dddd, MMMM DD, YYYY")}</div>
            <div style={{lineHeight:"1.5", paddingBottom:"1rem"}}><span style={{fontWeight:"bold"}}>Location:</span><br></br>{this.state.event.location}</div>
          </div>
        </div>
      </div>
    </div>

      </>
    );
  }
}

export default EventView
