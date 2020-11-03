import React, { Component, createFactory } from 'react';
import './Articles.css';
import Products from '../../products.json'


class Articles extends Component {
  constructor(props){
    super(props);
    this.state = {
     Products: Products,

    };
  }
  

  
  
  
  // <div id="article">
  //         <img src= ${Products[i].image} alt="" id="articleImage"/>
  //         <div id="articleNameRow">
  //           <span class="articleLabel">Name : </span><span id="articleName">${Products.name}</span>
  //         </div>
  //         <div id="articleCategoryRow">
  //           <span class="articleLabel">Category : </span><span id="articleCategory">${Products[i].category}</span>
  //         </div>
  //         <div id="articlePriceRow">
    //           <span className="articleLabel">Price : </span>
    //           <span id="articlePrice">${Products[i].price}</span>
    //         </div>
    //       </div>
    
    render() {
      // console.log(this.state.Products)
      function displayArticles() {
        // for(let i=0; i<this.state.Products.length; i++) {
        //   let article = `
        //   <div id="article">
        //   <img src= ${this.state.Products[i].image} alt="" id="articleImage"/>
        //   <div id="articleNameRow">
        //   <span class="articleLabel">Name : </span><span id="articleName">${this.state.Products[i].name}</span>
        //   </div>
        //   <div id="articleCategoryRow">
        //   <span class="articleLabel">Category : </span><span id="articleCategory">${this.state.Products[i].category}</span>
        //   </div>
        //   <div id="articlePriceRow">
        //   <span className="articleLabel">Price : </span>
        //   <span id="articlePrice">${this.state.Products[i].price}</span>
        //   </div>
        //   </div>
        //   `
        //   console.log(document.getElementById("articleContainer"))

        //   // document.getElementById("articleContainer") += article;
        //   return {__html: 'article'}
        // }
      }

      function setArticleComponent() {
        return <div dangerouslySetInnerHTML = {displayArticles()}/>;
      }
      
      setArticleComponent();
          return (
        <div id="articleContainer">
          <div id="article">
            <img src= {this.state.Products[4].image} alt="" id="articleImage"/>
            <div id="articleNameRow">
              <span class="articleLabel">Name : </span><span id="articleName">{this.state.Products[4].name}</span>
            </div>
              <div id="articleCategoryRow">
              <span class="articleLabel">Category : </span><span id="articleCategory">{this.state.Products[4].category}</span>
            </div>
            <div id="articlePriceRow">
              <span className="articleLabel">Price : </span>
              <span id="articlePrice">{this.state.Products[4].price}</span>
            </div>
          </div>
        </div>
            );
          }
        }  
        
        export default Articles;
        // <img src={this.state.Products[8].image} alt=""/>
        
        // <span><b>Name : </b></span><span> {this.state.Products[8].name}</span>