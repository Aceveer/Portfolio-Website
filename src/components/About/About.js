import React from 'react'
import './About.css'

import UI from '../../images/Uni of A Photo.jpg';
import Web from '../../images/Uni of A Photo.jpg';
import API from '../../images/Uni of A Photo.jpg';

function About() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web developer with experience of 2 years</span>
        <div className='skillBars'>

          <div className='skillBar'>
            <img src={UI} alt='UI' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p2>This is a demo text</p2>
            </div>
          </div>

          <div className='skillBar'>
            <img src={Web} alt='Web' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Web Dev</h2>
              <p2>JS, React, Node</p2>
            </div>
          </div>

          <div className='skillBar'>
            <img src={API} alt='API' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>API</h2>
              <p2>Application Programming Interface</p2>
            </div>
          </div>

        </div>
    </section>
  )
}


export default About
