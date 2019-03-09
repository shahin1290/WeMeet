import React, { Component } from "react";
import { fetchGroup } from '../../actions/groupAction'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import  SimpleCard  from "./FutureEventCard";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import base_api from "../../util/base_api";

class Group extends Component {
  state = {
    joinSuccessMessage : '',
    groupMembersList: []
  }

  componentDidMount() {
    let id =  this.props.match.params.id;
    this.props.fetchGroup(id);
    this.getMemberList()
  }

  joinGroup = async() => {
    const credentials = { 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'expiry': localStorage.getItem('expiry'), 'uid': localStorage.getItem('uid'), }
    let id = this.props.group.id
    await base_api.post(`/groups/${id}/memberships`, {}, { headers: credentials }) 
    this.props.fetchGroup(id);
    this.getMemberList()
  }

  getMemberList = async() => {
    let id =  this.props.match.params.id;
    const response = await base_api.get(`/groups/${id}/memberships`) 
    this.setState({groupMembersList : response.data })
  }

  render() {
    const { classes } = this.props;
    let membersArray =  this.props.members
    let eventsArray = this.props.group.future_events
    let groupOrganizer = this.props.group.organizer
    let currentUserId = this.props.currentUser.attributes.id
    let createEventLink 

    if(groupOrganizer){
      createEventLink = currentUserId === groupOrganizer.id ? <Button component={Link} to="/create-event">Create event</Button> : null
    }

    return (
      <div>

        <div className={classes.header}>
          <div className={classes.row}>
            <div className={classes.column}>
              <img src="../assets/images/graduation.jpg" className={classes.image} />
            </div>
              <div className={classes.column}>
                <h1>{this.props.group.name}</h1>
                <p>Organized by: <span className={classes.emphasis}>{ groupOrganizer ? groupOrganizer.name : 'organizer'}</span></p>
                <p>Group in: <span className={classes.emphasis}>{this.props.group.location}</span></p>
                <p>Members ({ membersArray ? membersArray.length : null})</p>
                <div className={classes.memberList}>
                  { this.state.groupMembersList.map(member => <span className={classes.emphasis}> {member.name} </span>) }
                </div>
                <Button onClick = { this.joinGroup } className={ classes.joinGroup}>Join this group</Button>
              </div>
          </div>
          
          {this.state.joinSuccessMessage}
          { createEventLink }

          <Button>Message group</Button>
        </div>

        {/* ----------GROUP BODY----------------- */}

        <div style={{ backgroundColor: "#f6f7f8" }}>

          <div>
            <h2 style={{ fontSize: "2rem", marginLeft: "9rem", marginTop: "2rem" }}>Description</h2>
            <p style={{ fontSize: "1rem", marginLeft: "9rem", marginTop: "2rem" }}>{this.props.group.description}</p>

            <div style={{ marginLeft: "9rem", marginTop: "2rem", marginBottom: "10rem" }}>
              <h2 style={{ textAlign: 'center'}}>Future events</h2>
              { eventsArray ? eventsArray.map((event) => 
              <SimpleCard event={event}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>{event.location}</p>
                <p>{event.date}</p>
              </SimpleCard>) : null }
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
    members: state.group.members,
    currentUser: state.reduxTokenAuth.currentUser
  }
}

const styles = {
  header: { height:"400px", borderBottom: "1px solid rgba(0,0,0,.12)" },
  row: { display:'flex' },
  column: { flex: '50%'},
  image: {
    height: "300px",
    border: "1px solid rgba(0,0,0,.12)",
    borderRadius: "30px",
    marginTop: "15px",
    marginLeft: "200px"
  },
  memberList: {
    display: 'grid',
    "grid-template-columns": "100px 100px 100px",
    "grid-gap": "10px"
,   "background-color": "#fff",
    color: "#444"
  },
  joinGroup: {
    marginTop: "30px",
    backgroundColor: "#5AC0D8"
  },
  emphasis: {
    color: "#5AC0D8",
    fontWeight: 'bold'
  }
}

Group.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchGroup } )(withStyles(styles)(Group));



