import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true   
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt=""/>
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt=""/>
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt=""/>
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt=""/>
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
  margin-top: 20px;

  // change color of the bottom dots
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  // change color of the bottom active dots
  li.slick-active button:before {
    color: white;
  }
  
  // show previous and next piece of slides
  .slick-list {
    overflow: visible;
  }

  // show left button
  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
  img {
    cursor: pointer;
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    // show border transition
    transition-duration: 300ms;
    
    // show border on hover on the slide
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`