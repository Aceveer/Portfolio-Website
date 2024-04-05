import React, { useState } from 'react'
import './intro.css'
import SimpleAccordion from './SimpleAccordion';
import Hello from './Hello';

const Intro = () => {

  return (
    <div id='intro'>
      <Hello
      text1="Hey there!"
      text2="My name is Tanveer Akram"
      text3="Thanks for visiting my site!"
      />
      <SimpleAccordion/>
    </div>
  )
}

export default Intro
