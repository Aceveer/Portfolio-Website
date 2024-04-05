import React from 'react';
import './navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ToggleButton from './ToggleButton';

const Navbar = () => {
  return (
      <motion.nav
        className="navbar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      >
      <Link
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuListItem"
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="desktopMenuListItem"
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="desktopMenuListItem"
      >
        Projects
      </Link>
      {/* <ToggleButton/> */}
      {/* Let's work on Toggle Later */}
    </motion.nav>
  );
};

export default Navbar;
