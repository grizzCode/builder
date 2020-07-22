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
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const StyledImg = styled.img`
      height: 100%;
      width: auto;
      margin: auto;
    `

    const StyledDiv = styled.div`
      height: 72vh;
    `

    return (
      <Slider {...settings}>
        <StyledDiv>
          <StyledImg src={require('../images/Slide1.jpg')}/>
        </StyledDiv>
        <StyledDiv>
         <StyledImg src={require('../images/Slide2.jpg')}/> 
        </StyledDiv>
        <StyledDiv>
          <StyledImg src={require('../images/Slide3.jpg')}/>
        </StyledDiv>
        <StyledDiv>
          <StyledImg src={require('../images/Slide4.jpg')}/>
        </StyledDiv>
        <StyledDiv>
          <StyledImg src={require('../images/Slide5.jpg')}/>
        </StyledDiv>
      </Slider>
    );
  }
}

