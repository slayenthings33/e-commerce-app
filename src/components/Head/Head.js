import React, { Component } from 'react';
import './Head.css';
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'

class Head extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: '/images/logo.png',
    };
  }

  render() {
    return (
      <div id="headContainer">
        <Logo logo={this.state.logo}/>
        <NavBar/>
        <SearchBar/>
      </div>
    );
  }
}

export default Head;