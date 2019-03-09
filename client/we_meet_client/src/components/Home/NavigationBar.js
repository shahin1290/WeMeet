import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logout from '../../components/Auth/Logout'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  let signUpLink, logInLink, logOutLink, createGroupLink, profileLink

  if(props.isSignedIn){
    createGroupLink =  <Button component={Link} to="/create-group" color="inherit">Create a Group</Button>;
    logOutLink = <Logout />
    profileLink = <Button component={Link} to={`/users/${props.currentUser.attributes.id}`} color="inherit">Profile</Button>;
  } else {
    signUpLink =  <Button component={Link} to="/signup" color="inherit">SignUp</Button>;
    logInLink =  <Button component={Link} to="/login" color="inherit">LogIn</Button>
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
            <Link to="/" className={classes.icon}>WeMeet</Link>
          </Typography>
          { signUpLink }
          { logInLink }
          { createGroupLink }
          { logOutLink }
          { profileLink }
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
    currentUser: state.reduxTokenAuth.currentUser
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps)(withStyles(styles)(ButtonAppBar));