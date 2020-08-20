import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Gallery from './Gallery'
import MobileMenu from './MobileMenu'
import { useWindowDimensions } from './Providers/WindowProvider'

export default function CompletedProject(props) {
  const { width } = useWindowDimensions()
  const breakpoint = 1224
  
  function renderDesktop() {
  return(
    <>
    <Menu/>
    <StyledDiv>
      <HeaderDiv>
        <StyledHeader>{props.name}</StyledHeader>
        <StyledList>
          <StyledList>{props.description}</StyledList>
          <StyledList>{props.specs}</StyledList>
        </StyledList>          
      </HeaderDiv>    
      <GalleryDiv>
        <Gallery images={props.images}/>
      </GalleryDiv>
    </StyledDiv>
    </>
  )}

  function renderMobile() {
    return(
      <>
      <MobileMenu/>
      <MobileHeader>
          <StyledHeader>{props.name}</StyledHeader>
      </MobileHeader>
      <MobileGallery>
        <Gallery images={props.images}/>
      </MobileGallery>
      <StyledList>
          <StyledList>{props.description}</StyledList>
          <StyledList>{props.specs}</StyledList>
        </StyledList> 
      </>
    )}
  
  return ( width > breakpoint ? renderDesktop() : renderMobile())   
}

// _____________________DESKTOP_________________________________

const GalleryDiv = styled.div`
  margin: auto;
  margin-top: 1.2%;
  height: 80vh;
  width: 66vw;
  overflow: hidden;
`

const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  font-size: 36px;
  margin-top: 4%;
  margin-bottom: 8%;
  margin-left: 0;
  margin-right: 3%;
  background-color: #181818;
  color: white;
  padding: 12px;
  width: 90%;
  @media (max-width: 1224px) {
    margin-top: 8%;
    margin-bottom: 8%;
  }
  @media (max-width: 800px) {
    font-size: 22px;
  }
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  margin-top: 8px;
`

const HeaderDiv = styled.div`
  width: 28%;
  height: 98vh;
  overflow: scroll;
`
const StyledList = styled.div`
  font-family: font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: #111111;
  margin: 6px;
  > ul {
    margin-left: 10px;
    margin-right: 10px;
    border-top: 1px solid lightgrey;
    padding: 10px;
  }
`

// _____________________MOBILE_________________________________

const MobileHeader = styled.div`
width: 70%;
`

const MobileGallery = styled.div`
margin: auto;
margin-top: 1.2%;
height: auto;
width: 100vw;
overflow: hidden;
`