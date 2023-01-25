import React from "react";

import Background from "./Background";
import CardIcon from "./CardIcon";

const Card = props => (
  <div>
    <Background />
    <div className="card">
      <div className="thumbnail">
        <img className="left" src={props.card.image} alt="" />
      </div>
      <div className="right">
        <h3>{props.card.title}</h3>
  
        <div className="separator" />
        <p>{props.card.text} <a href= {props.card.link} target="none"> Read </a> </p>
        
      </div>
      <CardIcon />
    </div>
  </div>
);

export default Card;
