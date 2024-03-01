import React from 'react'
import './navbar.css'

import {Link} from 'react-scroll';


const Navbar = () => {


  return (
    <nav className = "navbar">
        {/* Offset is to raise it up or down from where componenet starts Smooth scrolling Duration is in ms taken to reach that | spy is to check if it is on the ID (Intro)*/}
        <Link activeClass ='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass ='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass ='active' to='works' spy={true} smooth={true} offset={0} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass ='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Client</Link>
      {/* <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={contact} alt="Contact Me" className='desktopMenuImg'/>Contact Me
        </button> */}
    </nav>
  )
}

export default Navbar
