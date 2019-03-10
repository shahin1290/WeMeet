import React, { Component } from "react";
import moment from 'moment'
import { fetchEvent } from '../../actions/eventsAction'
import { postRsvp } from '../../actions/userAction'
import { connect } from 'react-redux';


class EventView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchEvent(id)
  }

  rsvpToEvent = async() => {
    const id = this.props.match.params.id
    await this.props.postRsvp(id)
    await this.props.fetchEvent(id);
  }

  render() {
    let attendees = this.props.event.attendees
    let group = this.props.event.group
    let attendeeList 
    
    if(attendees){
      attendeeList = attendees.map(attendee => {
        return (
          <p key={attendee.id}>{attendee.name}</p>
        )
      })
    }
   
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
            {moment(this.props.event.date).format("MM")}
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "rgba(46,62,72,.6)",
              fontSize: "14px"
            }}
          >
            {moment(this.props.event.date).format("MMM")}
          </div>
        </div>
        <div style={{ margin: "1.5rem", marginLeft: "9rem" }}>
          <div style={{
              fontWeight: "400",
              lineHeight: "0.8",
              marginLeft:"0.1rem"
            }}>
                {moment(this.props.event.date).format("MMMM Do YYYY")}
                {" at "}
                {moment(this.props.event.time).format("h:mm a")}
          </div>
          <h1 style={{ fontSize: "2.75rem" }}>{this.props.event.title}</h1>
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
                {group ? group.organizer.name : null}
              </span>
            </p>
            <p>
              From{" "}
              <span style={{ fontWeight: "bold", color: "teal" }}>
                {group ? group.name : null}
              </span>
            </p>
          </div>
          <div>
            </div>
            <h1 style={{ marginTop:"1.4rem", fontSize:"1.4rem", position:"absolute", right:"18.5rem", top:"5rem" }}>Are you going?</h1>
            <div>
            <button style={{position:"absolute", width:"250px", right:"13.3rem", top:"9rem", fontSize:"2rem"}}
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
          <p style={{ fontSize: "1rem", marginLeft: "9rem", marginTop: "2rem" }}>{this.props.event.description}</p>
          <div style={{ marginLeft: "9rem", marginTop: "2rem", marginBottom: "10rem" }}>
            <h2 style={{ fontSize: "2rem" }}>Attendees ({ attendees ? attendees.length : null } rsvp's)</h2>
            {attendeeList}
          </div>
        </div>
        <div className="w-2/5">
          <div className="sidebar" style={{ padding:"0.5rem", backgroundColor: "white", width: "300px", marginLeft: "3rem", marginTop: "2.5rem", borderRadius: "5px", border: "1px solid rgba(0,0,0,.12)" }}>
            <div style={{lineHeight:"1.5", paddingBottom:"1rem"}}><span style={{fontWeight:"bold"}}>Date:</span><br></br>{moment(this.props.event.date).format("dddd, MMMM DD, YYYY")}</div>
            <div style={{lineHeight:"1.5", paddingBottom:"1rem"}}><span style={{fontWeight:"bold"}}>Location:</span><br></br>{this.props.event.location}</div>
          </div>
        </div>
      </div>
    </div>

      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    event: state.event
  }
}
export default connect(mapStateToProps, { fetchEvent, postRsvp } )(EventView);
