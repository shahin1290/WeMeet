import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions'
import styled from 'styled-components';


const List = styled.ul`
  list-style-type: none;
`;

class Events extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div> 
        <h3 style={{marginBottom: "4rem"}}>Events List</h3>
        <List>
          {this.props.events.map(event => <li key={event.id}>{event.title}</li>)}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { events: state.events }
}

export default connect(mapStateToProps, { fetchEvents } )(Events);