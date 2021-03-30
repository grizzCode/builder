import React from 'react'
import Menu from './Menu'
import Slider from './Slideshow'
import Logo from '../images/logo2.png'
import GloLogo from '../images/HorizontalGlo.png'
import styled from "styled-components";
import { useWindowDimensions } from './Providers/WindowProvider'
import MobileMenu from './MobileMenu'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Popper from './Popper'
import Sidebar from '../images/sidebar2.jpg'



export default function Home() {
  const { width } = useWindowDimensions()
  const breakpoint = 1180


  function renderDesktop() {

    return (
      <>
        <ContainerDiv>
          <SliderDiv>
            <Slider />
          </SliderDiv>
          <WindowDiv>
            <LogoWrapper>
              <StyledLogo src={Logo} />
              <Popper position="left" />
            </LogoWrapper>
            <BorderDiv>
              <h3>Glo European Windows and Doors Official Partner</h3>
            </BorderDiv>
            <LogoWrapper>
              <StyledGloLogo src={GloLogo} />
              <StyledGloButton component={RouterLink} to="/windows">Learn More</StyledGloButton>
            </LogoWrapper>
          </WindowDiv>
        </ContainerDiv>
        <Menu position="bottom"/>
      </>
    )
  }

  function renderMobile() {
    return (
      <>

        <MobileContainerDiv>
          <MobileLogoWrapper>
            <MobileLogo src={Logo} />
            <PopperDiv>
              <Popper position="bottom" />
            </PopperDiv>
          </MobileLogoWrapper>
          <MobileLogoWrapper>
            <MobileBorderDiv>
              <h3>Glo European Windows and Doors Official Partner</h3>
            </MobileBorderDiv>
          </MobileLogoWrapper>
          <MobileLogoWrapper>
            <StyledGloLogo src={GloLogo} />
            <StyledGloButton component={RouterLink} to="/windows">Learn More</StyledGloButton>
          </MobileLogoWrapper>
        </MobileContainerDiv>
        <Slider />
        <MobileMenu />
        
      </>
    )
  }

  return (width > breakpoint ? renderDesktop() : renderMobile())
}

const Bground = "#c8ceca"

// ________________ DESKTOP STYLING ____________ 
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10%;
  margin-top: 8%;
`

const StyledLogo = styled.img`
  height: 160px;
  width: auto;
  padding: 12px;
  margin-bottom: 10%;
`
const StyledGloLogo = styled.img`
  height: 80px;
  width: auto;
  padding: 6px;
  margin-bottom: 10%;
  margin-top: 10%;
`

const BorderDiv = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-left: 8%;
  margin-right: 8%
`

const SliderDiv = styled.div`
  overflow: hidden;
  width: 80%;
  // clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
`

const ContainerDiv = styled.div`
  display: flex;
  height: 100%;
  background-color: ${Bground};
`

const WindowDiv = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-image: url("${Sidebar}");
  background-size: cover;
  overflow: scroll;
`

// ___________ MOBILE STYLING ________________ 

const MobileContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${Bground};
  padding-top: 2%;
  min-height: 240px;
`

const MobileLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;

`

const MobileLogo = styled.img`
  height: 110px;
  width: auto;
  padding: 8px;
  
`

const PopperDiv = styled.div`
  margin: 0;
  margin-bottom: 20%;
`
const MobileBorderDiv = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 20%;
  margin-bottom: 20%;
`

// __________ SHARED STYLING ___________


const StyledGloButton = styled(Button)`
  width: 160px;
  background-color: #EF6418!important;
  margin-bottom: 20%!important;
  text-decoration: none!important;
  transition: transform .4s!important;
  &:hover {
    transition: transform .4s;
    transform: scale(1.07);
  }

`