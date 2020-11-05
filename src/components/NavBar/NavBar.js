import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="navBarContainer">
        <span className="navBarBtns"> shop </span> 
        <span className="navBarBtns"> about </span>
        <span className="navBarBtns"> contact </span>
      </div>
    );
  }
}

export default NavBar;