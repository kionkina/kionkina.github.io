import React, { Component } from 'react';
import "../styles.css";
import Card from "./Card";
import cardData from "./cardData";
import { comment } from 'postcss-selector-parser';

export default class Blogs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const cardList = cardData.map(card => <Card key={card.id} card={card} />);

    return (
      <section  id="blog">
         <div className="row">
        <div className="twelve columns collapsed">
          <h1><span>Blog</span></h1> 
</div>


            <div>{cardList}</div>   
            </div>
            <h3 style={{padding: "20px"}}> ... and more to come</h3>
      </section>
    );
    
 }
}