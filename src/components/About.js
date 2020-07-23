import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'

export default function About() {

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>ABOUT US</StyledHeader>
        </HeaderDiv>
        
        <StyledText>
          <StyledP>At T and T Mountain Builders our primary focus is building comfortable, healthy and durable homes.</StyledP>
          <StyledP>T&T Mountain Builders was founded by Travis and Tammy Smith in 2002 as a custom carpentry company, and has evolved into a boutique home building company, typically only constructing 1-2 homes at a time. This allows us to focus on the fine details that typically get lost with larger firms.</StyledP>
          <StyledP>We employ passive house standards that include air tight construction, super insulated building envelopes,high performance European windows, and energy recovery ventilation. This all equates to an extremely high level of comfort for our clients. Our strategies are based on an understanding of building science, and of how each component relates to the whole system. We source only finishes that are low/no VOC to ensure a healthy indoor air environment.  We excel at our water management strategies on the exterior, ensuring long term durability.</StyledP>
        </StyledText>
      </StyledDiv>
    </>
  )
}

const StyledText = styled.div`
  margin: auto;
  height: 80vh;
  width: auto;
`

const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  padding-left: 8px;
  padding-right: 20px;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  margin-top: 30px;
`

const HeaderDiv = styled.div`
  border-right: 2px solid black;
  
`

const StyledP = styled.p`
  font-family: inherit;
  margin: 60px;
  color: #424242;
`