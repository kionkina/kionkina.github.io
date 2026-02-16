import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               <li><a className="smoothscroll" href="#publications">Publications</a></li>
               <li><a className="smoothscroll" href="#blog">Blog</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
            <div className="pfp">

{/* <img className="profile-pic"  src="images/profilepic.jpg" alt="" /> */}
            

</div>
<div class="hello-world" >
               <div className="responsive-headline" style={{ textShadow: 'None', color:'#2B2B2B', fontFamily:'opensans-regular', fontSize: '50px', margin:'2px' }}> {resumeData.name}</div> 
               <div className="responsive-headline" style={{ textShadow: 'None', color:'#2B2B2B', fontFamily:'opensans-regular', fontStyle:'Italic'}}> {resumeData.job}</div>
               
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
               <h3 style={{color:'#2B2B2B', fontFamily:'opensans-light', textShadow: "none"}}>I am a {resumeData.role}.{resumeData.roleDescription} Check out my recent talk at <a href='https://gitnation.com/contents/what-we-all-pretend-to-know-the-differences-between-the-js-engine-and-js-runtime' target='_blank' style={{color:'#587bc9ff'}}> JSNation </a>!
</h3>
</div>


            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}