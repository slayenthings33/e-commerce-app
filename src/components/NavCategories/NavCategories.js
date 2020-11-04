import React, { Component } from 'react';
import './NavCategories.css';

class NavCategories extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <div>
        <div class="navCategoriesContainer">
          <span class="navCategoriesBtns"> all </span>
          <span class="navCategoriesBtns"> fruits </span>
          <span class="navCategoriesBtns"> vegetables </span>
          <span class="navCategoriesBtns"> trees </span>
          <span class="navCategoriesBtns"> other </span>
        </div>  
      </div>
    );
  }
}

export default NavCategories;