import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventsAction'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import  Button  from "@material-ui/core/Button";


class CreateEvent extends Component {
  renderError({ error, touched }){
    if(touched && error){
      return (
        <div style={{ color: "red" }}>{error}</div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <TextField {...input} 
          autoComplete="off"
          id="outlined-with-placeholder"
          label={label}
          placeholder={label}
          margin="normal"
          variant="outlined"
          fullWidth
          />
        {this.renderError(meta)}
      </div>
    )
  }

  renderTextarea = ({ input, label, meta }) => {
    return (
      <div>
        <TextField {...input} 
          autoComplete="off"
          id="filled-multiline-static"
          label={label}
          multiline
          fullWidth
          rows="10"
          placeholder={label}
          defaultValue="Default Value"
          margin="normal"
          variant="outlined"
          />
        {this.renderError(meta)}
      </div>
    )
  }
  onFormSubmit = (formValues) => {
    const event = {
      title: formValues.title,
      description: formValues.description,
      location: formValues.location,
      date: formValues.date,
      time: formValues.time
    }
    let id = this.props.group.id
    this.props.createEvent(event, id)
  }

  render() {
     return (
      <div style={{ width: "40%", border: "1px solid grey", margin: "25px auto", background: "white" }}>
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} style={{ width: "50%", margin: "0 auto" }}>
        <h1>Create an Event</h1>
        <Field
          type="text"
          name="title"
          label="Event Title"
          component={this.renderInput} />

        <Field
          type="textarea"
          name="description"
          label="Event Description"
          component={this.renderTextarea} />   
        
        <Field
          type="text"
          name="location"
          label="Event Location"
          component={this.renderInput} />
        
        <Field
          type="text"
          name="date"
          label="Event Date"
          component={this.renderInput} />
        
        <Field
          type="text"
          name="time"
          label="Event Time"
          component={this.renderInput} />

        <Button type="submit" variant="contained" color="primary" style = {{marginBottom: "25px"}} >Submit</Button>
      </form>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}
 
  if(!formValues.title){
    errors.title = "You must enter the event title"
  }
  if(!formValues.description){
    errors.description = "You must enter the event description"
  }
  if(!formValues.location){
    errors.location = "You must enter the event location"
  }
  if(!formValues.date){
    errors.date = "You must enter the event date"
  }
  if(!formValues.time){
    errors.time = "You must enter the event time"
  }
  return errors
}

const mapStateToProps = (state) => {
  return { 
    group: state.group,
    notification: state.postEventNotification
  }
}

const formWrapper = reduxForm({
  form: 'createEvent',
  validate
})(CreateEvent)


export default connect(mapStateToProps, { createEvent })(formWrapper);
