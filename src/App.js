import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

import Footer from './components/Footer';
import Publications from './components/Publications';
import resumeData from './resumeData';
import Blog from './components/Blog';

class FadeInSection extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.domRef = React.createRef();
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setState({ isVisible: true });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (this.domRef.current) {
      observer.observe(this.domRef.current);
    }
    this._observer = observer;
  }

  componentWillUnmount() {
    if (this._observer && this.domRef.current) {
      this._observer.unobserve(this.domRef.current);
    }
  }

  render() {
    return (
      <div
        ref={this.domRef}
        className={`fade-in-section ${this.state.isVisible ? 'is-visible' : ''}`}
      >
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <FadeInSection>
          <About resumeData={resumeData}/>
        </FadeInSection>
        <FadeInSection>
          <Resume resumeData={resumeData}/>
        </FadeInSection>
        <FadeInSection>
          <Portfolio resumeData={resumeData}/>
        </FadeInSection>
        <FadeInSection>
          <Publications resumeData={resumeData}/>
        </FadeInSection>
        <FadeInSection>
          <Blog resumeData={resumeData}/>
        </FadeInSection>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
