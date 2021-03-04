import React from 'react'
import Menu from './Menu'
import Slider from './Slideshow'
import Logo from '../images/logo2.png'
import GloLogo from '../images/Glo Logo ROUND.jpg'
import styled from "styled-components";
import { useWindowDimensions } from './Providers/WindowProvider'
import MobileMenu from './MobileMenu'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';

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
            <div>
              <hr />
              <h3>UTAH DEALER & INSTALLER</h3>
              <hr />
            </div>
            <StyledBottomLogo src={GloLogo} />
            <Button>
              <StyledRouterLink to="/windows">LEARN MORE</StyledRouterLink>
            </Button>
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
            <h3>Windows</h3>
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
  height: 200px;
  width: auto;
  padding: 12px;
  background-color: rgba(255,255,255,1);
  margin-bottom: 10%;
`
const StyledBottomLogo = styled.img`
  height: 200px;
  width: auto;
  padding: 12px;
  background-color: rgba(255,255,255,1);
  margin-top: 10%;
`

const SliderDiv = styled.div`
  overflow: hidden;
  width: 75%;
`

const ContainerDiv = styled.div`
  display: flex;
  background-color: white;
  height: 100%;
`

const WindowDiv = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: #706e6c;
  text-decoration: none;
  color: white;
  padding: 6px;
  border-radius: 8px;
  &:hover {
    transition: transform .4s;
    transform: scale(1.1);
    background-color: #ED7425;
    color: black;
  }
`