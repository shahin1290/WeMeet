import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import GroupHeader from './GroupHeader'
import GroupBody from './GroupBody'
import { fetchGroup } from '../../actions/groupAction'
import { connect } from 'react-redux';


 class Group extends Component {
  componentDidMount() {
    let id =  this.props.location.state.group.id;
    this.props.fetchGroup(id);
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
        <h3 style={{marginBottom: "4rem"}}>Future Events</h3>
       { futureEvents }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { group: state.group }
}

export default connect(mapStateToProps, { fetchGroup } )(Group);