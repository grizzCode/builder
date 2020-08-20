import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import MobileMenu from './MobileMenu'
import { useWindowDimensions } from './Providers/WindowProvider'

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
      <StyledDiv>
        <HeaderDiv>
          <StyledHeader>{props.header}</StyledHeader>
        </HeaderDiv>
        <ContentDiv> 
          {props.content}
        </ContentDiv>
      </StyledDiv>    
    </>
    )}

    return ( width > breakpoint ? renderDesktop() : renderMobile())   
}

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
  width: 98%;
  `
