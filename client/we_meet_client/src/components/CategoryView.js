import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


 class CategoryView extends Component {
    state = {
      category: {
        name: '',
        groups: []
      }
    }
  

   componentDidMount() {
    // Get the number from url
    let id =  this.props.location.state.category.id;
    this.getCategoryGroups(id);
  }

   async getCategoryGroups(id) {
    const response = await axios.get(`http://localhost:3000/categories/${id}`);
    const category = response.data.category;
    this.setState({ category });
  }


   render() {
    let groupList = this.state.category.groups.map(group => {
      return (
        <Link key={group.id} to={{pathname: `/groups/${group.id}`, state: {group}}} style={{ textDecoration: 'none' }}>
          <div >{group.name}</div>
        </Link>        
      )
    })

     return (
      <div>
        {/* <h1>{this.state.category.name}</h1> */}
        <h2>{groupList}</h2>
      </div>
    );
  }
}

 export default CategoryView; 