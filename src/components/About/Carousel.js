import React from 'react';
import styled, {keyframes} from 'styled-components';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons from react-icons library
import CarouselCard from './CarouselCard';
import CertificateItems from './CertificateConstants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  animation: ${fadeIn} 2s ease-in-out;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 1;
  &:hover {
    color: #00a6eb;
  }
`;

const PrevArrow = ({ onClick }) => (
  <ArrowButton onClick={onClick} style={{ left: 10 }}>
    <FaChevronLeft />
  </ArrowButton>
);

const NextArrow = ({ onClick }) => (
  <ArrowButton onClick={onClick} style={{ right: 10 }}>
    <FaChevronRight />
  </ArrowButton>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {CertificateItems.map((item, index) => (
          <CarouselCard
            key={index}
            title={item.title}
            organization={item.organization}
            link={item.link}
            imageSrc={item.imageSrc}
            courses1={item.courses1}
            courses2={item.courses2}
          />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Carousel;
