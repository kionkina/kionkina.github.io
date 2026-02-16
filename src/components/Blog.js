import React, { Component } from 'react';
import "../styles.css";
import {cardData as articles} from './cardData';

export default class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
  }

  goTo = (index) => {
    this.setState({ currentIndex: index });
  };

  goPrev = () => {
    this.setState((prev) => ({
      currentIndex: prev.currentIndex === 0 ? articles.length - 1 : prev.currentIndex - 1
    }));
  };

  goNext = () => {
    this.setState((prev) => ({
      currentIndex: prev.currentIndex === articles.length - 1 ? 0 : prev.currentIndex + 1
    }));
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <section id="blog">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Blog</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>Check out my articles on Medium</p>

            <div className="carousel">
              <div className="carousel-track">
                <div
                  className="carousel-slider"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {articles.map((article) => (
                    <div className="carousel-slide" key={article.id}>
                      <div className="blog-card">
                        <div className="blog-card__image">
                          <img src={article.image} alt={article.title} />
                        </div>
                        <div className="blog-card__body">
                          <h3 className="blog-card__title">{article.title}</h3>
                          <p className="blog-card__date">{article.descr}</p>
                          <p className="blog-card__text">{article.text}</p>
                          <a
                            className="blog-card__link"
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read on Medium <i className="fa fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="carousel-nav">
              <button className="carousel-arrow" onClick={this.goPrev}>&#8592;</button>
              <div className="carousel-progress">
                {articles.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-progress__bar ${i === currentIndex ? 'carousel-progress__bar--active' : ''}`}
                    onClick={() => this.goTo(i)}
                  />
                ))}
              </div>
              <span className="carousel-counter">{currentIndex + 1} / {articles.length}</span>
              <button className="carousel-arrow" onClick={this.goNext}>&#8594;</button>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
