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

    var images = {
      first: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491105/T%20AND%20T%20BUILDERS/Home%20Page/Meadows_front_cropped_iooo5s.jpg",
      second: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491112/T%20AND%20T%20BUILDERS/Home%20Page/stagecoach_rear_okynzh.jpg",
      third: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491108/T%20AND%20T%20BUILDERS/Home%20Page/interlaken_2_hg2gt4.jpg",
      fourth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491099/T%20AND%20T%20BUILDERS/Home%20Page/LaRoche_patio_vwg5us.jpg",
      fifth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491109/T%20AND%20T%20BUILDERS/Home%20Page/meadows_rear_ibubr2.jpg",
      sixth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491105/T%20AND%20T%20BUILDERS/Home%20Page/meadows_entry_ptolxi.jpg",
      seventh: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491099/T%20AND%20T%20BUILDERS/Home%20Page/LaRoche_Entry_o58hcf.jpg",
      eigthth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491099/T%20AND%20T%20BUILDERS/Home%20Page/LaRoche_stair_fqgpsm.jpg",
      ninth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491112/T%20AND%20T%20BUILDERS/Home%20Page/Interlaken_1_ocsqyz.jpg",
      tenth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491110/T%20AND%20T%20BUILDERS/Home%20Page/Sorensen_qjpiem.jpg",
      eleventh: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1596491112/T%20AND%20T%20BUILDERS/Home%20Page/STagecoach_interior_2_rescuh.jpg",
    }

    const StyledImg = styled.img`
      height: auto;
      width: 100vw;
      object-fit: cover;
      overflow: hidden;
    `

    return (
      <Slider {...settings}>
        <div>
          <StyledImg src={images.third}/>
        </div>  
        <div>
          <StyledImg src={images.first}/>
        </div>  
        <div>
          <StyledImg src={images.second}/>
        </div>  
        <div>
          <StyledImg src={images.fourth}/>
        </div>  
        <div>
          <StyledImg src={images.fifth}/>
        </div>  
        <div>
          <StyledImg src={images.sixth}/>
        </div>  
        <div>
          <StyledImg src={images.seventh}/>
        </div>  
        <div>
          <StyledImg src={images.eigthth}/>
        </div>  
        <div>
          <StyledImg src={images.ninth}/>
        </div>  
        <div>
          <StyledImg src={images.tenth}/>
        </div>  
        <div>
          <StyledImg src={images.eleventh}/>
        </div>  
      </Slider>
    );
  }
}

