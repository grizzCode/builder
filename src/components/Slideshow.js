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
      slidesToScroll: 1
    };

    var images = [
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357241/T%20AND%20T%20BUILDERS/interlaken_2_hg2gt4_e73mk2_dgztcx.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357254/T%20AND%20T%20BUILDERS/stagecoach_rear_okynzh_s8liwq.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357240/T%20AND%20T%20BUILDERS/Interlaken_1_ocsqyz_e6arbd.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357234/T%20AND%20T%20BUILDERS/LaRoche_patio_vwg5us_he6jhq.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357260/T%20AND%20T%20BUILDERS/meadows_rear_ibubr2_sozzpx.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357241/T%20AND%20T%20BUILDERS/meadows_entry_ptolxi_lp1sjf.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357235/T%20AND%20T%20BUILDERS/LaRoche_Entry_o58hcf_nytier.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357231/T%20AND%20T%20BUILDERS/LaRoche_stair_fqgpsm_enuqjh.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357233/T%20AND%20T%20BUILDERS/LaRoche_Front_elevation_yar0lu_ls8hzf.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357247/T%20AND%20T%20BUILDERS/Sorensen_qjpiem_eo74gh.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357254/T%20AND%20T%20BUILDERS/STagecoach_interior_2_rescuh_pvenzo.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357258/T%20AND%20T%20BUILDERS/Stagecoach_front_uxp1gv_wqjk2f.jpg",
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
