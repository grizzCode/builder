import React from 'react'
import Menu from './Menu'  
import Slider from './Slideshow'
import Logo from '../images/logo.png'
import styled from "styled-components";
import { useWindowDimensions } from './Providers/WindowProvider'
import MobileMenu from './MobileMenu'

export default function Home() {
  const { width } = useWindowDimensions()
  const breakpoint = 1366
  
  function renderDesktop() {
    return(
      <>
        <StyledLogo src={Logo}/>
        <Slider/>
        <Menu/>
      </>
    )
  }

  function renderMobile() {
    return(
      <>
      <StyledLogo src={Logo}/>
      <MobileBackground/>
      <MobileMenu/>
      </>
    )
  }

  return ( width > breakpoint ? renderDesktop() : renderMobile()) 
}


const StyledLogo = styled.img`
  height: 20%;
  width: auto;
  padding: 12px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`
const MobileBackground = styled.div`
  background: url("https://res.cloudinary.com/grizzcode-llc/image/upload/v1597357241/T%20AND%20T%20BUILDERS/interlaken_2_hg2gt4_e73mk2_dgztcx.jpg") center center no-repeat;
  background-size: cover;
  background-repeat: no-repeat,
  background-position: center center;
  height: 100vh;
  z-index: -1;
  @media (max-width: 1024px) {
    background-size: contain;
  }
`