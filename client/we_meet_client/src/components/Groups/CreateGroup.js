import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/groupAction'

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

  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createGroup = async(e) => {
    e.preventDefault();
    const group = {
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      category_id: this.state.category_id
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
      <div>
      <form onSubmit={this.createGroup}>
        <h1>Create a Group</h1>

          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.onChange}>
            </input>
          </div>

            <div>
            <label>Description</label>
            <textarea
              type="textarea"
              name="description"
              onChange={this.onChange}>
            </textarea>
          </div>

            <div>
            <label>Category</label>
            <select
              id="category-selector"
              name="category_id"
              onChange={this.onChange}>
              <option value="">Select option</option>
              {categoryOptions}
            </select>
          </div>

            <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              onChange={this.onChange}>
            </input>
          </div>

          <input type="submit" value="Submit"></input>
      </form>
      {this.props.notification}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    categories: state.categories,
    notification: state.postGroupNotification
  }
}

export default connect(mapStateToProps, { createGroup })(CreateGroup);



  
