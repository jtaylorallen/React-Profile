import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cW5lDBG/videoblocks-abstract-programming-code-moves-in-the-camera-software-development-concept_s0fm20jshg__1db60fb4f31cdbeea9e8c3252e7a51d9__P360.mp4' autoPlay loop muted />
      <h1><span className='hiText'>Hello, I'm </span> <span className='highlightedText'> Jessica Allen</span></h1>
      <p>A Jr Web Developer </p>
      <div>
        <div className='colz-icon'>
          <a href='https://github.com/jtaylorallen'>
              <i className="fa fa-github"></i>
          </a>   
          <a href='https://www.linkedin.com/in/jessica-allen-270b23126/'>
              <i className="fa fa-linkedin"></i>    
          </a>
        </div>
       </div>
               
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          Resume
        </Button>
     
      </div>
    </div>
  );
}

export default HeroSection;
