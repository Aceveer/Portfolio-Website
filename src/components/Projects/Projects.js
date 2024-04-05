import React from 'react'
import './Projects.css'

import Image1 from '../../images/CSS.png';
import Image2 from '../../images/CSS.png';
import Image3 from '../../images/CSS.png';
import Image4 from '../../images/CSS.png';
import Image5 from '../../images/CSS.png';
import Image6 from '../../images/CSS.png';

const works = () => {
  return (
    <section id='projects'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'> take pride in everything I do</span>
        <div className='worksImgs'>
            <img src={Image1} alt='' className='worksImg'/>
            <img src={Image2} alt='' className='worksImg'/>
            <img src={Image3} alt='' className='worksImg'/>
            <img src={Image4} alt='' className='worksImg'/>
            <img src={Image5} alt='' className='worksImg'/>
            <img src={Image6} alt='' className='worksImg'/>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default works
