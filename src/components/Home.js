import React from 'react'
import Menu from './Menu'
import Slider from './Slideshow'
import Logo from '../images/logo2.png'
import GloLogo from '../images/Glo Logo ROUND.jpg'
import AirLogo from '../images/ALX_Logo.jpg'
import styled from "styled-components";
import { useWindowDimensions } from './Providers/WindowProvider'
import MobileMenu from './MobileMenu'
import { Link as RouterLink } from 'react-router-dom'


export default function Home() {
  const { width } = useWindowDimensions()
  const breakpoint = 1366

  function renderDesktop() {
    return (
      <>
        <ContainerDiv>
          <SliderDiv>
            <Slider />
          </SliderDiv>
          <WindowDiv>
            <StyledLogo src={Logo} />
            <BorderDiv>
              <h3>Utah Representative for Glo Windows and Air-Lux Doors</h3>
            </BorderDiv>
            <StyledRouterLink to="/windows">
              <StyledGloLogo src={GloLogo} />
            </StyledRouterLink>
            <StyledRouterLink to="/windows">
              <StyledAirLogo src={AirLogo} />
            </StyledRouterLink>
          </WindowDiv>
        </ContainerDiv>
        <Menu />
      </>
    )
  }

  function renderMobile() {
    return (
      <>
        <div>
          <MobileContainerDiv>
            <MobileLogo src={Logo} />
            <MobileLogo src={GloLogo} />
          </MobileContainerDiv>
          <div>
            <StyledHeading>Windows</StyledHeading>
          </div>
          <div>
            <Slider />
          </div>
        </div>
        <MobileMenu />
      </>
    )
  }

  return (width > breakpoint ? renderDesktop() : renderMobile())
}


const StyledLogo = styled.img`
  height: 190px;
  width: auto;
  padding: 12px;
  background-color: rgba(255,255,255,1);
  margin-bottom: 10%;
  margin-top: 2%;
  margin-right: 4%;
`
const StyledGloLogo = styled.img`
  height: 175px;
  width: auto;
  padding: 6px;
  background-color: rgba(255,255,255,1);
`

const StyledAirLogo = styled.img`
  height: 60px;
  width: auto;
  margin-bottom: 10%;
  margin-top: 5%;
`

const BorderDiv = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-right: 5%;
`

const SliderDiv = styled.div`
  overflow: hidden;
  width: 75%;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
`

const ContainerDiv = styled.div`
  display: flex;
  background-color: white;
  height: 100%;
`

const WindowDiv = styled.div`
  width: 25%;
  height: %;
  position: fixed;
  top: 0;
<<<<<<< HEAD
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const StyledHeading = styled.h3`
  margin-right: 10%;
 color: red;
`

const MobileContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const MobileLogo = styled.img`
  height: 100px;
  width: auto;
  padding: 8px;
  background-color: rgba(255,255,255,1);
`
const StyledRouterLink = styled(RouterLink)`
  margin-right: 10%;
  margin-top: 5%;
`
=======
  left: 0;
  z-index: 2;
`
>>>>>>> 694fa4501018a475a25a60628e0ae4b8608d9126
