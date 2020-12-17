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
      <Slider/>
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
