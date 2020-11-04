import React, { Component } from 'react';
import './SortBy.css';

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.sendSortChoice = this.sendSortChoice.bind(this);
  }

  sendSortChoice(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
    console.log(this.state.value);
    this.props.sortArticlesCallback(event.target.value);
  }

  render() {
    return (
      <div>
        <div id="sortByFormContainer">
          <form action="" id="formContainer">
            <label htmlFor="">Sort by </label>
            <select value={this.state.value} onChange={this.sendSortChoice} name="" id="sortByDropDown">
              <option value="Select">- Select -</option>
              <option value="Price">- Price -</option>
              <option value="A-Z">- A-Z -</option>
              <option value="CIF">- CIF -</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default SortBy;