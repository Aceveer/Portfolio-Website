import React, { useState } from 'react'
import './intro.css'

import 'react-image-gallery/styles/css/image-gallery.css';
import HoverCard from './HoverCard';


import Achievements from './Achievements';
import MovingClouds from './MovingCloud';
import RippleCard from './RippleCard';
import TabbedCard from './TabbedCard';
import AccordionExample from './AccordionExample';
import AccordionCard from './AccordionCard';
import SimpleAccordion from './SimpleAccordion';
import Example from './Example';

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlide = (index) => {
    setCurrentIndex(index);
  };

  return (

          <div id='intro'>
            {/* <IntroContent
              name="Tanveer Akram"
              job={CarouselPhotos[currentIndex].job}
              text={CarouselPhotos[currentIndex].text}
            />

            <ImageGallery
            items={CarouselPhotos}
            showPlayButton={false} // Optional setting to hide play button
            showFullscreenButton={false} // Optional setting to hide fullscreen button
            autoPlay={false} // Set to false to disable autoplay
            additionalClass="image-gallery-intro" // Add a custom class for styling
            slideInterval={6000}
            slideDuration={1000}
            onSlide={onSlide}
            />

           <Achievements
        highlights={CarouselPhotos[currentIndex].highlights}
      /> */}
      {/* <AccordionExample/> */}
      {/* <AccordionCard/> */}
      <SimpleAccordion/>
      {/* <Example/> */}
    </div>
  )
}

export default Intro
