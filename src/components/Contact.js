import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Logo from '../images/logo.png'

export default function About() {

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>CONTACT US</StyledHeader>
        </HeaderDiv>
        <StyledLogo src={Logo}/>
        <FooterCenter>
          <ContactA href="mailto:tandttravis@hotmail.com">tandttravis@hotmail.com</ContactA>
          <ContactP>PO Box 980547</ContactP>
          <ContactP>Park City, Utah 84098</ContactP>
        </FooterCenter>
      </StyledDiv>
    </>
  )
}


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
  width: 20%;
  height: 600px;
`

const ContactP = styled.p`
  font-size: 12px;
`
const ContactA = styled.a`
  color: rgb(158, 203, 40);
  font-size: 12px;
`
const StyledLogo = styled.img`
  height: 300px;
  width: auto;
  margin: auto;
`


const FooterCenter = styled.div`
 color: black;
 width: 20%;
 font-family: Work Sans, sans-serif;
 text-transform: uppercase;
 margin: auto;
`

