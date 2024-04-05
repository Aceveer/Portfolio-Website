import React from 'react';
import './intro.css'

const IntroContent = ({ name, job, text }) => {
  return (
    <div className='introContent'>
      <span className='hello'>Hello</span>
      <span className='introText'>
        I'm <span className='introName'>{name}</span>
        <br/>A {job}
      </span>
      <p className='introPara'>{text.map(item => (item))}</p>
    </div>
  );
}

export default IntroContent;
