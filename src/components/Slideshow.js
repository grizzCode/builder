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
      first: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627590/T%20AND%20T%20BUILDERS/Home%20Page/6960Canyon_DR_72_qszkqq.jpg",
      second: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627679/T%20AND%20T%20BUILDERS/Home%20Page/272JungfrauHillRD_68_wzzm3d.jpg",
      third: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627668/T%20AND%20T%20BUILDERS/Home%20Page/7777StagecoachDR-31_jfc63v.jpg",
      fourth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627598/T%20AND%20T%20BUILDERS/Home%20Page/_JAH9006-2_cpku4m.jpg",
      fifth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627563/T%20AND%20T%20BUILDERS/Home%20Page/6960Canyon_DR_1_naqykx.jpg",
      sixth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627645/T%20AND%20T%20BUILDERS/Home%20Page/7777StagecoachDR-29_kafdyd.jpg",
      seventh: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627694/T%20AND%20T%20BUILDERS/Home%20Page/JAH-3862_hm9dgn.jpg",
      eigthth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627682/T%20AND%20T%20BUILDERS/Home%20Page/272JungfrauHillRD_16_ivmpnn.jpg",
      ninth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627708/T%20AND%20T%20BUILDERS/Home%20Page/Meadows_Dr_PC-4_qyrq2m.jpg",
      tenth: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627607/T%20AND%20T%20BUILDERS/Home%20Page/_JAH9059_lv9vl8.jpg",
      eleventh: "https://res.cloudinary.com/grizzcode-llc/image/upload/v1595627582/T%20AND%20T%20BUILDERS/Home%20Page/6960Canyon_DR_63_uascat.jpg",
    }

    const StyledImg = styled.img`
      height: 100%;
      width: 100%;
      object-fit: cover;
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

