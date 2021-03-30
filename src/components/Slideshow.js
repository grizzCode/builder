import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderImg from './SliderImg'
import styled from 'styled-components'

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
    };


    var images = [
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116022/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Meadows_Dr_PC-5_xjqg9k_z1ai7k.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116021/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Iphone_1_qgxpfr_mriqre.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116020/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Park_Meadows_Design-5_pmm9wu_opgtuv.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116023/T%20AND%20T%20BUILDERS/Home%20Page%20RS/6960Canyon_DR_72_jditfv_wst101.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357260/T%20AND%20T%20BUILDERS/Home%20Page%20RS/meadows_rear_ibubr2_sozzpx.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357254/T%20AND%20T%20BUILDERS/Home%20Page%20RS/stagecoach_rear_okynzh_s8liwq.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116027/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Sorensen_m8zmwf_sdpq31.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116020/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Park_Meadows_Design-19_ifle3j_ayppxw.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116028/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Park_Meadows_Design-22_ov6ppn_a2xhe7.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116023/T%20AND%20T%20BUILDERS/Home%20Page%20RS/6960Canyon_DR_66_npnnfq_g9qviz.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116018/T%20AND%20T%20BUILDERS/Home%20Page%20RS/6960Canyon_DR_63_u9yvik_uooq8b.jpg",
      "https://res.cloudinary.com/grizzcode-llc/image/upload/v1604116027/T%20AND%20T%20BUILDERS/Home%20Page%20RS/Park_Meadows_Design-26_r6bthg_rwfc7j.jpg",
    ]


    return (
      <ContainerDiv>
        <Slider {...settings}>
          {images.map((image) => (
            <SliderImg image={image} key={image.indexOf}/>
          ))}
        </Slider>
      </ContainerDiv>

    );
  }
}


const ContainerDiv = styled.div`
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
`
