import React, {Component} from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';

class GroupHeader extends Component {

  async joinGroup() {
    const credentials = { 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'expiry': localStorage.getItem('expiry'), 'uid': localStorage.getItem('uid'), }

    const response = await axios.post(`http://localhost:3000/groups/${this.props.group.id}/memberships`, {}, { headers: credentials }) 
  }
  render() {
    let group = this.props.group;

    return (
      <>
        <div style={{ height:"400px", borderTop: "2px solid rgba(0,0,0,.12)", borderBottom: "1px solid rgba(0,0,0,.12)"}}>
            <h1 style={{ fontSize: "2.75rem", position:"absolute", right:"15rem", marginTop:"1.5rem" }}>{group.name}</h1>
            
            <div
              style={{
                position: "absolute",
                right: "25.5rem",
                marginTop: "5rem",
                fontWeight: "400",
                lineHeight: "1.5",
                marginBottom: "1rem",
                marginLeft: "3.2rem"
              }}
            >
              <p>
                Organized by{" "}
                <span style={{ fontWeight: "bold", color: "teal" }}>
                  {group.organizer.email}
                </span>
              </p>
              <p>
                Group in{" "}
                <span style={{ fontWeight: "bold", color: "teal" }}>
                  {/* {group.location} */}
                  need to setup in model
                </span>
              </p>
            </div>
            <div>
              <Button
                  onClick={this.joinGroup.bind(this)}
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
      </>
    );
  }
  
};

export default GroupHeader;