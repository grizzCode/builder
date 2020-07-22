import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components'
 
export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 7000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const StyledImg = styled.img`
      height: 550px;
      width: auto;
      margin: auto;
    `

    return (
      <Slider {...settings}>
        <div>
          <StyledImg src={require('../images/Slide1.jpg')}/>
        </div>
        <div>
         <StyledImg src={require('../images/Slide2.jpg')}/> 
        </div>
        <div>
          <StyledImg src={require('../images/Slide3.jpg')}/>
        </div>
        <div>
          <StyledImg src={require('../images/Slide4.jpg')}/>
        </div>
        <div>
          <StyledImg src={require('../images/Slide5.jpg')}/>
        </div>
      </Slider>
    );
  }
}

