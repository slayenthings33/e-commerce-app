import React, { Component } from 'react';
import './Main.css';
import NavBarMain from '../NavBarMain/NavBarMain'
import Articles from '../Articles/Articles'
import TogglePage from '../TogglePage/TogglePage'

class Main extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div>
        <NavBarMain/>
        <Articles/>
        <TogglePage/>
      </div>
    );
  }
}

export default Main;