import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: this.props.index,
      products: this.props.products,
    };
  }

  render() {
    return (
      <div>
        <div id="articleContainer">
            <div id="article">
              <img src= {this.state.products[this.state.index].image} alt="" className="articleImage"/>
              <div id="articleNameRow">
                <span className="articleLabel">Name : </span><span className="articleListing">{this.state.products[this.state.index].name}</span>
              </div>
                <div id="articleCategoryRow">
                <span className="articleLabel">Category : </span><span className="articleListing">{this.state.products[this.state.index].category}</span>
              </div>
              <div id="articlePriceRow">
                <span className="articleLabel">Price : </span>
                <span className="articleListing">€{this.state.products[this.state.index].price}</span>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Article;