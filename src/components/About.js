import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">


               <img className="profile-pic"  src="images/profilepic.PNG" alt="Karina Ionkina" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {resumeData.aboutme}
               </p>
               <p>
               {resumeData.aboutme2}
               </p>
               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact</h2>
                  <p className="address">
                    <a href="https://www.linkedin.com/in/karina-ionkina/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}