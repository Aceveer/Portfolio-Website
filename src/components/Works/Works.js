import React from 'react'
import './Works.css'

import Image1 from '../../images/Hero 1.png'
import Image2 from '../../images/Hero 2.png'
import Image3 from '../../images/Hero 3.png'
import Image4 from '../../images/Hero 4.png'
import Image5 from '../../images/Hero 5.png'
import Image6 from '../../images/Hero 6.png'

const works = () => {
  return (
    <section id='works'>
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
