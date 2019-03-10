import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchCategory } from '../../actions/categoriesAction'
import { connect } from 'react-redux';

class CategoryView extends Component {
  componentDidMount() {
    let id =  this.props.location.state.category.id;
    this.props.fetchCategory(id);
  }

  render() {
    const { classes } = this.props;
    let groups = this.props.category.groups
    let groupList 
  
    if(groups){
      groupList = groups.map(group => {
        return (
          <Card className={classes.card}>
            <CardActionArea component={Link} to={{pathname: `/groups/${group.id}`, state: {group}}}>
              <CardMedia
                className={classes.media}
                image="../assets/images/frogs.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {group.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          
        )
      });
    }
    
    return (
      <div>
        <div className={classes.heading}>{this.props.category.name}</div>
        <div className={classes.root}>
          {groupList}
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    'grid-gap': '30px',
    'align-items': 'stretch'
  },
  heading:{
    
    margin: '0 auto 50px auto',
    height: '200px',
    'text-align': 'center',
    'background-image': 'url("../assets/images/hero.jpg")',
    color: 'white',
    'font-weight': 'bold',
    'font-size': '50px'
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

CardMedia.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { 
    category: state.category
  }
}
export default connect(mapStateToProps, { fetchCategory } )(withStyles(styles)(CategoryView));