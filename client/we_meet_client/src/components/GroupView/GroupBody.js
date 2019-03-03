import React from "react";
import Button from '@material-ui/core/Button';

const GroupBody = props => {
  // Let attendeeList
  let group = props.group;
  let futureEventsList = group.future_events.map(future_event => {
    return (
      <p key={future_event.id}>{future_event.title}</p>
    )
  })
  console.log(group.members)
  const membersList = group.members.map(member => {
    return (
      <p key={member.id}>{member.name}</p>
    )
  })
  return (
    <div style={{ backgroundColor: "#f6f7f8" }}>
      <div className="flex">
        <div className="w-3/5">
          {/* <img src={event.image_url} style={{ width: "600px", marginLeft: "9rem", marginTop: "3rem", borderRadius: "5px" }} /> */}
          <h2 style={{ fontSize: "2rem", marginLeft: "9rem", marginTop: "2rem" }}>Description</h2>
          <p style={{ fontSize: "1rem", marginLeft: "9rem", marginTop: "2rem" }}>{group.description}</p>

          <div style={{ marginLeft: "9rem", marginTop: "2rem", marginBottom: "10rem" }}>
            <h2 style={{ fontSize: "2rem", lineHeight:"2"}}>Future events</h2>
            {futureEventsList}
          </div>

        </div>
        <div className="w-2/5">
          <div style={{ height:"auto", width:"300px", position:"absolute", right:"16.5rem", backgroundColor: "white", width: "300px", marginTop: "2.5rem", borderRadius: "5px", border: "1px solid rgba(0,0,0,.12)" }}>
            <div style={{fontSize:"20px", padding:"0.5rem"}}> Members ({group.members.length})</div>
            {membersList}
            <Button
                brand='secondary'
                small
                style={{ position:"absolute", width:"200px", marginTop:"1rem", fontSize:"20px"}}
              >
                Message group
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBody;