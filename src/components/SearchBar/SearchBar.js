import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      lupa:"/images/lupa.png"
    };
  }

  render() {
    return (
      <div id="searchBarContainer">
        <img id="lupa" src={this.state.lupa} alt=""/>
        <form id="searchBarForm" action="">
          <input type="text" name="Search..." id="searchBarInput"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;