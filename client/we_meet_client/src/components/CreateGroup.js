import React, { Component } from 'react';
import axios from "axios";


class CreateGroup extends Component {
  state = {
        name: '',
        description: '',
        location: '',
        category_id: '',
        categories: []
  }
  

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const response = await axios.get("http://localhost:3000/categories")
    const categories = response.data.categories
    this.setState({ categories });
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
    // const credentials = {
    //   'access-token': localStorage.getItem('access-token'),
    //   'token-type': localStorage.getItem('token-type'),
    //   'client': localStorage.getItem('client'),
    //   'expiry': localStorage.getItem('expiry'),
    //   'uid': localStorage.getItem('uid'),
    // }
 
    let response = await axios.post('http://localhost:3000/groups', { group })

  }

  render() {
    let categoryOptions
    categoryOptions = this.state.categories.map(category => {
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
      </div>
    )
  }
}

export default CreateGroup
  
