import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/groupAction';
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


class CreateGroup extends Component {
  state = {
    name: '',
    description: '',
    location: '',
    category_id: '' 
  }
  
  componentDidMount() {
    this.props.createGroup();
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

  createGroup = (formValues) => {
    console.log(formValues)
    // const group = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   location: this.state.location,
    //   category_id: this.state.category_id
    // }
  
    // await this.props.createGroup(group)

  }

  render() {
    let categoryOptions
    categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category.id} value={category.id}>{category.name}</option>
      )
    })

     return (
      <div>
      <form onSubmit={this.props.handleSubmit(this.createGroup)} style={{ width: "25%", margin: "0 auto" }}>       
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
          name="categories"
          label="Select a Category"
          component={this.renderSelectOptions} 
        >
          <option value="" />
          <option value={'ff0000'}>Red</option>
          <option value={'00ff00'}>Green</option>
          <option value={'0000ff'}>Blue</option>
        </Field>  

        <Field
          type="text"
          name="location"
          label="Group Location"
          component={this.renderInput} />
          
          <button type="submit">Submit</button>
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

export default connect(mapStateToProps, { createGroup })(reduxForm({
  form: 'CreateGroup',
  validate
})(CreateGroup));



  
