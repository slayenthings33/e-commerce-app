import React, { Component } from 'react';
import './TogglePage.css';

class TogglePage extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div id="togglePageContainer">
        <button className="togglePageBtn">1</button>
        <button className="togglePageBtn">2</button>
        <button className="togglePageBtn">3</button>
      </div>
    );
  }
}

export default TogglePage;