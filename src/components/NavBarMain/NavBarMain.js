import React, { Component } from 'react';
import './NavBarMain.css';

class NavBarMain extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  
  render() {
    console.log(fetch("http://www.quantitative-plant.org/api?type=TYPE&field=FIELD&q=Q"))
    return (
      <div id="navBarMainContainer">
        <div id="categoryBtnsContainer">
          <span id="allTypeBtn"> all </span>
          <span id="fruitTypeBtn"> fruits </span>
          <span id="veggieTypeBtn"> vegetables </span>
          <span id="treeTypeBtn"> trees </span>
          <span id="otherTypeBtn"> other </span>
        </div>  
        <div id="soryByFormContainer">
          <form action="" id="formContainer">
            <label htmlFor="">Sort by </label>
            <select name="--Price" id="sortByDropDown">
              <option value="Price">Price</option>
              <option value="A-Z">A-Z</option>
              <option value="CIF">CIF</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default NavBarMain;