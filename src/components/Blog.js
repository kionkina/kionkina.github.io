import React, { Component } from 'react';
import "../styles.css";
import styled from 'styled-components';
import {cardData as articles} from './cardData';

const BlogTable = styled.table`
    margin-top: 36px;
    overflow: scroll;
    width: 600px;
`;

const Row = styled.tr`
  display: contents;
  width: 150px;
`;

const TD = styled.td`
    padding: 10px;
    width: 150px;
`;

const H1 = styled.h1`
  margin-bottom: 0px;
  width 160px;
`;

const P = styled.p`
  width: 180px;
`;

const IMG = styled.img`
  height: 160px;
  max-width: none;
;
`;

export default class Blogs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    // const cardList = cardData.map(card => <Card key={card.id} card={card} />);

    return (
      <section  id="blog">
         <div className="row education">
        <div className="three columns header-col" >
          <h1><span>Blog</span></h1> 
          </div> 

        <div className="nine columns main-col">
          <p> Check out my articles on Medium </p>
        <BlogTable>
      
          {articles.map((article, i) => {
            return (
              <Row>
            <TD>
              <IMG src={article.image}></IMG> <br/>
          <H1> {article.title} </H1>
          <P style={{lineHeight: "normal"}}>  {article.descr}  <a href={article.link} target="none">  <i className={"fa fa-long-arrow-right"} /> </a> </P>
          <p>  {article.text} </p>
            </TD>

          </Row>
            )
          })}
          </BlogTable>
        </div>
            <h3 style={{padding: "20px"}}> ... and more to come</h3>
            </div>
      </section>
    );
    
 }
}