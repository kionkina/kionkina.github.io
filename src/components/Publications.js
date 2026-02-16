import React, { Component } from 'react';

export default class Publications extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="publications">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Publications</span></h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.publications && resumeData.publications.map((pub, i) => (
              <div className="publication-item" key={i}>
                <h3>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h3>
                <p>{pub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
