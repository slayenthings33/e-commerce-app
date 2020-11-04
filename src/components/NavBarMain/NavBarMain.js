import React, { Component } from 'react';
import NavCategories from '../NavCategories/NavCategories';
import SortBy from '../SortBy/SortBy';
import './NavBarMain.css';

class NavBarMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products,
      
    };
  }

  
  render() {
    return (
      <div>
        <NavCategories/>
      </div>
    );
  }
}

export default NavBarMain;