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
            <LogoWrapper>
              <StyledLogo src={Logo} />
              <Popper/>
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

const Bground = "#dbe0dd"

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
  height: 170px;
  width: auto;
  padding: 12px;
  margin-bottom: 10%;
  margin-right: 10%;
`
const StyledGloLogo = styled.img`
  height: 90px;
  width: auto;
  padding: 6px;
  margin-bottom: 10%;
`

const BorderDiv = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-right: 5%;
`

const SliderDiv = styled.div`
  overflow: hidden;
  width: 80%;
  clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
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
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: ${Bground};
  overflow: scroll;
`

const StyledHeading = styled.h3`
  margin-right: 10%;
 color: red;
`

// ___________ MOBILE STYLING ________________ 

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

// __________ SHARED STYLING ___________


const StyledGloButton = styled(Button)`
  width: 50%;
  background-color: #EF6418!important;
  margin-right: 8%!important;
  margin-bottom: 20%!important;
  text-decoration: none!important;
  transition: transform .4s!important;
  &:hover {
    transition: transform .4s;
    transform: scale(1.07);
  }

`