import React from 'react'
import Menu from './Menu'  
import Slider from './Slideshow'
import Logo from '../images/logo.png'
import styled from "styled-components";

export default function Home() {

  return (
    <section className="home"> 
      <StyledLogo src={Logo}/>
      <Slider/>
      <Menu/>
    </section>
  )
}


const StyledLogo = styled.img`
  height: 20%;
  width: auto;
  padding: 12px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 0px 0px 4px 0px;
  z-index: 2;
`
