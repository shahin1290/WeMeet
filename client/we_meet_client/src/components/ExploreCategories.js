import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class ExploreCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const response = await axios.get("http://localhost:3000/categories")
    const categories = response.data.categories;
    this.setState({ categories });
  }

  render() {
    let categories = this.state.categories;
    let categoriesList = categories.map(category => {
      return (
        <div key={category.id} inlineBlock style={{marginBottom:"20px"}}>
          <Link to={{pathname: `/categories/${category.id}`, state: {category}}} style={{ textDecoration: 'none' }}>
            
              <div>
                <img src={category.image || `./assets/images/${category.name.toLowerCase()}.png`} />
              </div>
         
            <div className="category-name">{category.name}</div>
          </Link>
        </div>
      );
    });

    return (
      <div>
        <h1>Explore categories</h1>
        {categoriesList}
      </div>
    );
  }
}

export default ExploreCategories;