import React from 'react'
import Menu from './Menu'  
import styled from 'styled-components'
import Logo from '../images/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook'

import Slider from './Slideshow'

export default function Home() {
  return (
    <section class="home">
      
      <Slider/>
      <Menu/>
    </section>
  )
}

const StyledLogo = styled.img`
  height: 150px;
  width: auto;
  margin-left: 20px
`

const Footer = styled.div`
  background-color: white;
  height: 160px;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`

const FooterCenter = styled.div`
 color: black;
 width: 20%;
 font-family: Work Sans, sans-serif;
 text-transform: uppercase;
`
const FooterRight = styled.div`
 color: black;
 width: 20%;
 font-family: Work Sans, sans-serif;
 text-transform: uppercase;
 margin-right: 20px;
`

const StyledP = styled.p`
  border-bottom: 2px solid black;
  font-size: 14px;
`

const StyledFacebook = styled(FacebookIcon)`
  color: black;
  margin-top: 8px;
  &:hover {
    transition: transform .2s;
    transform: scale(1.4);
  }
`

const LogoImg = styled.img`
  margin: 4px;
  margin-top: 20px;
  &:hover {
    transition: transform .2s;
    transform: scale(1.4);
  }
`

const ContactP = styled.p`
  font-size: 12px;
`
const ContactA = styled.a`
  color: rgb(158, 203, 40);
  font-size: 12px;
`