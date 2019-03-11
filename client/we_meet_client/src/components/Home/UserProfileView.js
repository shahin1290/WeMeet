import React, { Component } from "react";
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import base_api from "../../util/base_api";
import { getUser } from '../../actions/userAction'


const mapStateToProps = (state) => {
  return {
    currentUser: state.reduxTokenAuth.currentUser,
    user: state.user
  }
}

class UserProfileView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        organized_groups: []
      }
    };
  }
  componentDidMount() {
    this.props.getUser(this.props.currentUser.attributes.id)
  }

  async getUser(id) {
    const credentials = { 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'expiry': localStorage.getItem('expiry'), 'uid': localStorage.getItem('uid'), }

    const response = await base_api.get(`/users/${id}`, { headers: credentials })
    const user = response.data.user
    this.setState({ user });
  }

  render() {
    const { classes } = this.props;
    let groups = this.props.user.organized_groups;
    let groupList 
    
    if(groups){
      groupList = groups.map(group => {
        return (
          <div key={group.id}>
            <Link to={`/groups/${group.id}`} className={classes.link}>
              <p>{group.name}</p>
            </Link>
          </div>
        )
      })
    }
    
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4"> 
            <div className={classes.heading}>{this.props.user.name}</div>
            </Typography>
            <Typography variant="h5">
            <div className={classes.heading}>Organizer of {groups ? groups.length : null} groups</div>
          </Typography>
          {groupList}
          </CardContent>
        </Card>
      </div>
    );
  }
}
const styles = {
  heading: {
    borderBottom : '2px solid #dbd2d2',
    padding: '10px'
  },
  card: {
    maxWidth: 650,
    marginBottom: 12,
    margin:' 50px auto',
    
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};

UserProfileView.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, { getUser })(withStyles(styles)(UserProfileView));