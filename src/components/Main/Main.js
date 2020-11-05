import React, { Component } from 'react';
import './Main.css';
import NavBarMain from '../NavBarMain/NavBarMain'
import TogglePage from '../TogglePage/TogglePage'
import Products from '../../products.json'
import Articles from '../Articles/Articles'



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Products,
    };
  }


  render() {
    // console.log(this.state.products);
    return (
      <div>
        <NavBarMain />
          <Articles />
        {/* <TogglePage /> */}
      </div>
    );
  }
}

export default Main;