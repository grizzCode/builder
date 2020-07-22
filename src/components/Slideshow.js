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
      height: 700px;
      width: auto;
      margin: auto;
    `

    return (
      <Slider {...settings}>
        <div>
          <StyledImg src={require('../images/Slide_1.jpg')}/>
        </div>
        <div>
         <StyledImg src={require('../images/Slide_2.jpg')}/> 
        </div>
        <div>
          <StyledImg src={require('../images/Slide_3.jpg')}/>
        </div>
        <div>
          <StyledImg src={require('../images/Slide_4.jpg')}/>
        </div>
        <div>
          <StyledImg src={require('../images/Slide_5.jpg')}/>
        </div>
      </Slider>
    );
  }
}

