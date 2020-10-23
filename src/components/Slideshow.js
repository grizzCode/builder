import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderImg from './SliderImg'
 

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      // lazyLoad: "ondemand",
      speed: 1000,
    };

    var images = [
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603388376/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Iphone_1_qgxpfr.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603388074/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Park_Meadows_Design-5_pmm9wu.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603388773/T%20AND%20T%20BUILDERS/Home%20Page%20RS/6960Canyon_DR_72_jditfv.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357260/T%20AND%20T%20BUILDERS/Sterlingwood_fireplace_gmkbyr_ux85jb.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357260/T%20AND%20T%20BUILDERS/meadows_rear_ibubr2_sozzpx.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603394549/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Sorensen_m8zmwf.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603390273/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Park_Meadows_Design-19_ifle3j.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603388394/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Park_Meadows_Design-22_ov6ppn.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603390248/T%20AND%20T%20BUILDERS/Home%20Page%20RS/6960Canyon_DR_66_npnnfq.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603388095/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Park_Meadows_Design-26_r6bthg.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603388105/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Meadows_Dr_PC-5_xjqg9k.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1603390249/T%20AND%20T%20BUILDERS/Home%20Page%20RS/6960Canyon_DR_63_u9yvik.jpg",
    ]

  
    return (
      <Slider {...settings}>
        {images.map((image) => (
          <SliderImg image={image} /> 
        ))}
      </Slider>
    );
  }
}
