import React from 'react';
import MyImage from '../assets/my-image-1.png';
import '../styles/Overview.css';

export default function Overview() {
  return (
    <div className='overview-background'>
        <div className="container">
            <div className="overview-elements">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className='overview-heading'> RAVICHANDIRAN A M M </h1>
                        <h5 className='overview-summary'> Entry Level Software Developer with Html , Css and Frontend Expertise eager to explore IT industry with a Passion in Full Stack Development</h5>
                        <br />
                        <a href="https://www.linkedin.com/in/ravichandiran-frontend-developer/" target='blank_' className='overview-button'>Linked in </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={MyImage} alt="My-Image" className='My-image'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
