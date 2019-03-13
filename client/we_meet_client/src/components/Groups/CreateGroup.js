import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/groupAction';
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import  Button  from "@material-ui/core/Button";


class CreateGroup extends Component {

  componentDidMount() {
    
  }

  renderError({ error, touched }){
    if(touched && error){
      return (
        <div>{error}</div>
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

  renderSelectOptions = ({ input, label, meta, children }) => {
    return (
      <FormControl fullWidth>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
          native
          {...input}
          inputProps={{
            name: 'age',
            id: 'age-native-simple'
          }}
        >
          {children}
        </Select>
        {this.renderError(meta)}
      </FormControl>
    )
  }
  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onFormSubmit = (formValues) => {
    const group = {
      name: formValues.name,
      description: formValues.description,
      location: formValues.location,
      category_id: formValues.category_id
    }
    this.props.createGroup(group)

  }

  render() {
    let categoryOptions
    categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category.id} value={category.id}>{category.name}</option>
      )
    })

     return (
      <div style={{ width: "40%", border: "1px solid grey", margin: "25px auto", background: "white" }}>
      
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} style={{ width: "50%", margin: "0 auto" }}>       
      <h1>Create a group</h1>
        <Field
          type="text"
          name="name"
          label="Group Name"
          component={this.renderInput} />

        <Field
          type="textarea"
          name="description"
          label="Group Description"
          component={this.renderTextarea} />   

        <Field
          name="category_id"
          label="Select a Category"
          component={this.renderSelectOptions} 
        >
          <option value="" />
          { categoryOptions }
        </Field>  

        <Field
          type="text"
          name="location"
          label="Group Location"
          component={this.renderInput} />
          
          <Button type="submit" variant="contained" color="primary" style = {{marginBottom: "25px"}} >Submit</Button>
      </form>
      {this.props.notification}
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if(!formValues.name){
    errors.name = "You must enter the group name"
    errors.description = "You must enter a description"
  }
  return errors
}

const mapStateToProps = (state) => {
  return { 
    categories: state.categories,
    notification: state.postGroupNotification
  }
}

const formWrapped = reduxForm({
  form: 'CreateGroup',
  validate
})(CreateGroup)

export default connect(mapStateToProps, { createGroup })(formWrapped);



  
