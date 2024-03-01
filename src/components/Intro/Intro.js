import React, { useState } from 'react'
import './intro.css'

import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import CarouselPhotos from './IntroConstants'

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Tanveer Akram</span><br/>{CarouselPhotos[currentIndex].job}</span>
            <p className='introPara'>{CarouselPhotos[currentIndex].text1} <br/>{CarouselPhotos[currentIndex].text2}</p>
        </div>
          <ImageGallery
          items={CarouselPhotos}
          showPlayButton={false} // Optional setting to hide play button
          showFullscreenButton={false} // Optional setting to hide fullscreen button
          autoPlay={true} // Set to false to disable autoplay
          additionalClass="image-gallery-intro" // Add a custom class for styling
          slideInterval={6000}
          slideDuration={1000}
          onSlide={onSlide}/>
    </section>
  )
}

export default Intro
