import React, { Component } from "react";
import axios from "axios";
import { fetchGroup } from '../../actions/groupAction'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



class Group extends Component {
  state = {
    joinSuccessMessage : '',
    groupMembersList: []
  }
  componentDidMount() {
    let id =  this.props.location.state.group.id;
    this.props.fetchGroup(id);
    this.getMemberList()
  }

  joinGroup = async() => {
    const credentials = { 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'expiry': localStorage.getItem('expiry'), 'uid': localStorage.getItem('uid'), }
    let id = this.props.group.id
    await axios.post(`http://localhost:3000/groups/${id}/memberships`, {}, { headers: credentials }) 
    this.props.fetchGroup(id);
    this.getMemberList()
  }

  getMemberList = async() => {
    let id =  this.props.location.state.group.id;
    const response = await axios.get(`http://localhost:3000/groups/${id}/memberships`) 
    this.setState({groupMembersList : response.data })
  }



  render() {
    let membersArray =  this.props.members
    let eventsArray = this.props.group.future_events
    let groupOrganizer = this.props.group.organizer

    let futureEvents, groupMembersNumber 

    return (
      <div>
        <div style={{ height:"400px", borderTop: "2px solid rgba(0,0,0,.12)", borderBottom: "1px solid rgba(0,0,0,.12)"}}>
          <h1 style={{ fontSize: "2.75rem", position:"absolute", right:"15rem", marginTop:"1.5rem" }}>{this.props.group.name}</h1>
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
            {this.state.joinSuccessMessage}
          <div
            style={{
              position: "absolute", right: "25.5rem",marginTop: "5rem",fontWeight: "400",lineHeight: "1.5",marginBottom: "1rem",marginLeft: "3.2rem"
            }}
          >
            <p>
              Organized by{" "}
              <span style={{ fontWeight: "bold", color: "teal" }}>
                { groupOrganizer ? groupOrganizer.name : 'organizer'}
              </span>
            </p>
            <p>
              Group in{" "}
              <span style={{ fontWeight: "bold", color: "teal" }}>
                {this.props.group.location}
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
            <p style={{ fontSize: "1rem", marginLeft: "9rem", marginTop: "2rem" }}>{this.props.group.description}</p>

            <div style={{ marginLeft: "9rem", marginTop: "2rem", marginBottom: "10rem" }}>
              <h2 style={{ fontSize: "2rem", lineHeight:"2"}}>Future events</h2>
              { eventsArray ? eventsArray.map((event) => <h1>{event.title}</h1>) : null }
            </div>

          </div>
          <div>
            <div style={{ height:"auto", width:"300px", position:"absolute", right:"16.5rem", backgroundColor: "white", width: "300px", marginTop: "2.5rem", borderRadius: "5px", border: "1px solid rgba(0,0,0,.12)" }}>
              <div style={{fontSize:"20px", padding:"0.5rem"}}>Members ({ membersArray ? membersArray.length : null})</div>
                { this.state.groupMembersList.map(member => <p> {member.name} </p>) }
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
  return { 
    group: state.group, 
    members: state.group.members
  }
}

export default connect(mapStateToProps, { fetchGroup } )(Group);