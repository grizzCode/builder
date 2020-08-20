import React from 'react'
import Menu from '../Menu'
import styled from 'styled-components'
import MobileMenu from '../MobileMenu'
import { useWindowDimensions } from '../Providers/WindowProvider'

export default function PageLayout(props) {
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
        <ContentDiv> 
          {props.content}
        </ContentDiv>
      </StyledDiv>    
    </>
  )}

  function renderMobile() {
    return(
      <>
      <MobileMenu/>
      <div>
        <MobileHeader>
          <StyledHeader>{props.name}</StyledHeader>
        </MobileHeader>
        <ContentDiv> 
          {props.content}
        </ContentDiv>
      </div>    
    </>
    )}

    return ( width > breakpoint ? renderDesktop() : renderMobile())   
}

// _____________________DESKTOP_________________________________
const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  font-size: 36px;
  margin-top: 29.6%;
  margin-bottom: 8%;
  margin-left: 0;
  margin-right: 3%;
  background-color: #181818;
  color: white;
  padding: 12px;
  width: 95%;
  text-transform: uppercase;
  @media (max-width: 1224px) {
    margin-top: 8%;
    margin-bottom: 2%;
  }
  @media (max-width: 800px) {
    font-size: 22px;
  }
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1vm;
  margin-top: 30px;
`

const HeaderDiv = styled.div`
  width: 28%;
  height: 94vh;
`

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  `
// _____________________MOBILE_________________________________
  
const MobileHeader = styled.div`
    width: 70%;
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