import React, { Component } from 'react';
import "../styles.css";
export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
  }

  goTo = (index) => {
    this.setState({ currentIndex: index });
  };

  goPrev = () => {
    const total = this.props.resumeData.portfolio.length;
    this.setState((prev) => ({
      currentIndex: prev.currentIndex === 0 ? total - 1 : prev.currentIndex - 1
    }));
  };

  goNext = () => {
    const total = this.props.resumeData.portfolio.length;
    this.setState((prev) => ({
      currentIndex: prev.currentIndex === total - 1 ? 0 : prev.currentIndex + 1
    }));
  };

  render() {
    let resumeData = this.props.resumeData;
    const { currentIndex } = this.state;
    const items = resumeData.portfolio || [];

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1><span>Projects</span></h1>

            <div className="carousel" style={{ margin: '0 auto' }}>
              <div className="carousel-track">
                <div
                  className="carousel-slider"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {items.map((item) => (
                    <div className="carousel-slide" key={item.name}>
                      <div className="blog-card">
                        <div className="blog-card__image">
                          <img src={item.imgurl} alt={item.name} />
                        </div>
                        <div className="blog-card__body">
                          <h3 className="blog-card__title">{item.name}</h3>
                          <p className="blog-card__text">{item.description}</p>
                          <a
                            className="blog-card__link"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project <i className="fa fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="carousel-nav" style={{ margin: '24px auto 0' }}>
              <button className="carousel-arrow" onClick={this.goPrev}>&#8592;</button>
              <div className="carousel-progress">
                {items.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-progress__bar ${i === currentIndex ? 'carousel-progress__bar--active' : ''}`}
                    onClick={() => this.goTo(i)}
                  />
                ))}
              </div>
              <span className="carousel-counter">{currentIndex + 1} / {items.length}</span>
              <button className="carousel-arrow" onClick={this.goNext}>&#8594;</button>
            </div>

            <p style={{ textAlign: 'center', marginTop: '24px' }}>
              And many more! Check out my <a href="https://github.com/kionkina/">github</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
