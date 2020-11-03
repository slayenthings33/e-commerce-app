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
        <span id="shopNav"> shop </span> 
        <span id="aboutNav"> about </span>
        <span id="contactNav"> contact </span>
      </div>
    );
  }
}

export default NavBar;