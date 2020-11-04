import React, { Component } from 'react';
import './Articles.css';
import Article from '../Article/Article';
import products from '../../products.json'
import SortBy from '../SortBy/SortBy';


class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      index: this.props.index,
      sortChoice: "A-Z",
    };
    this.setSortChoice = this.setSortChoice.bind(this);
    this.sortProducts = this.sortProducts.bind(this);
    this.sortAlphabetically = this.sortAlphabetically.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
    this.sortByCIF = this.sortByCIF.bind(this);
  }


  setSortChoice(childData) {
    console.log(childData)
    this.setState({ sortChoice: childData });
    this.sortProducts(childData);
  }

  sortProducts(childData) {
    if (childData === "A-Z") {
      this.sortAlphabetically();
    } else if (childData === "Price") {
      this.sortByPrice();
    } else if (childData === "CIF") {
      this.sortByCIF();
    }
  }

  sortAlphabetically() {

  }

  sortByPrice() {
    let products = this.state.products.sort((a, b) => {
      return parseInt(a.price) - parseInt(b.price)
    });
    console.log(products);
    this.setState({products: products});
  }

  sortByCIF() {

  }


  render() {
    return (
      <div>
        <SortBy sortArticlesCallback={this.setSortChoice} />
        <div id="mainArticleContainer">
          <Article products={this.state.products} index={1} />
          <Article products={this.state.products} index={2} />
          <Article products={this.state.products} index={3} />
          <Article products={this.state.products} index={4} />
          <Article products={this.state.products} index={5} />
          <Article products={this.state.products} index={6} />
          <Article products={this.state.products} index={7} />
          <Article products={this.state.products} index={8} />
          <Article products={this.state.products} index={9} />
        </div>
      </div>
    );
  }
}


export default Articles;
        // <img src={this.state.Products[8].image} alt=""/>

        // <span><b>Name : </b></span><span> {this.state.Products[8].name}</span>