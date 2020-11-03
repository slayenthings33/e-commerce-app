import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: this.props.logo,
    };
  }


  render() {
    return (
      <div>
        <img id="logo" src={this.state.logo} alt=""/>
      </div>
    );
  }
}

export default Logo;