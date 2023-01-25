import React, { Component } from 'react';
import "../styles.css";
import Card from "./Card";
import cardData from "./cardData";

export default class Blogs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const cardList = cardData.map(card => <Card key={card.id} card={card} />);

    return (
      <section id="blog">
         <div className="row">
         <h3>Check Out My Blog Posts</h3>


            <div>{cardList}</div>   
            </div>
      </section>
    );
  }
}