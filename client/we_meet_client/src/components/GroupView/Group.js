import React, { Component } from "react";
import axios from "axios";
import { fetchGroup } from '../../actions/groupAction'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



class Group extends Component {
  componentDidMount() {
    let id =  this.props.location.state.group.id;
    this.props.fetchGroup(id);
  }

  joinGroup = async() => {
    const credentials = { 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'expiry': localStorage.getItem('expiry'), 'uid': localStorage.getItem('uid'), }

    const response = await axios.post(`http://localhost:3000/groups/${this.props.group.id}/memberships`, {}, { headers: credentials }) 
  }

  render() {
  let eventsArray = this.props.group.future_events
  let futureEvents
  if ( eventsArray) {
    futureEvents = eventsArray.map((event) => {
      return (
        <div>
          <h1>{event.title}</h1>
        </div>
      );
    });
  }
      
    
    return (
      <div>
        <div style={{ height:"400px", borderTop: "2px solid rgba(0,0,0,.12)", borderBottom: "1px solid rgba(0,0,0,.12)"}}>
          <h1 style={{ fontSize: "2.75rem", position:"absolute", right:"15rem", marginTop:"1.5rem" }}>group.name</h1>
          <div>
              <img
                src="../assets/images/graduation.jpg"
                style={{
                  height: "300px",
                  border: "1px solid rgba(0,0,0,.12)",
                  borderRadius: "30px",
                  position: "absolute",
                  marginTop: "1.5rem",
                  marginLeft: "7rem"
                }}
              />
            </div>
          <div
            style={{
              position: "absolute", right: "25.5rem",marginTop: "5rem",fontWeight: "400",lineHeight: "1.5",marginBottom: "1rem",marginLeft: "3.2rem"
            }}
          >
            <p>
              Organized by{" "}
              <span style={{ fontWeight: "bold", color: "teal" }}>
                group.organizer.email
              </span>
            </p>
            <p>
              Group in{" "}
              <span style={{ fontWeight: "bold", color: "teal" }}>
                group.location
              </span>
            </p>
          </div>
          <div>
            <Button
                onClick = { this.joinGroup }
                style={{ position:"absolute", right:"16.5rem", width:"300px", marginTop:"10rem", fontSize:"24px"}}
              >
                Join group
            </Button>
            <Button
                style={{ position:"absolute", right:"16.5rem", width:"300px", marginTop:"15rem", fontSize:"24px"}}
              >
                Create event
            </Button>
          </div>
        </div>

        <div style={{ backgroundColor: "#f6f7f8" }}>
        <div className="flex">
          <div className="w-3/5">
            <h2 style={{ fontSize: "2rem", marginLeft: "9rem", marginTop: "2rem" }}>Description</h2>
            <p style={{ fontSize: "1rem", marginLeft: "9rem", marginTop: "2rem" }}>group.description</p>

            <div style={{ marginLeft: "9rem", marginTop: "2rem", marginBottom: "10rem" }}>
              <h2 style={{ fontSize: "2rem", lineHeight:"2"}}>Future events</h2>
              futureEventsList
            </div>

          </div>
          <div>
            <div style={{ height:"auto", width:"300px", position:"absolute", right:"16.5rem", backgroundColor: "white", width: "300px", marginTop: "2.5rem", borderRadius: "5px", border: "1px solid rgba(0,0,0,.12)" }}>
              <div style={{fontSize:"20px", padding:"0.5rem"}}> Members (group.members.length)</div>
              membersList
                <Button
                    style={{ position:"absolute", width:"200px", marginTop:"1rem", fontSize:"20px"}}
                  >
                    Message group
                </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { group: state.group }
}

export default connect(mapStateToProps, { fetchGroup } )(Group);