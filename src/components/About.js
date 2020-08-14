import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Certified from '../images/builder-wide-logo.jpg'
import Doe from '../images/doe_zh_partner_logo.jpg'
import Button from '@material-ui/core/Button';




export default function About() {

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>ABOUT</StyledHeader>
        </HeaderDiv>
        <ContentDiv> 
        <StyledText>
          <StyledP>At T and T Mountain Builders our primary focus is building comfortable, healthy and durable homes.</StyledP>
          <StyledP>T&T Mountain Builders was founded by Travis and Tammy Smith in 2002 as a custom carpentry company, and has evolved into a boutique home building company, typically only constructing 1-2 homes at a time. This allows us to focus on the fine details that typically get lost with larger firms.</StyledP>
          <StyledP>We employ passive house standards that include air tight construction, super insulated building envelopes, high performance European windows, and energy recovery ventilation. This all equates to an extremely high level of comfort for our clients. Our strategies are based on an understanding of building science, and of how each component relates to the whole system. We source only finishes that are low/no VOC to ensure a healthy indoor air environment.  We excel at our water management strategies on the exterior, ensuring long term durability.</StyledP>
          <ButtonDiv>
            <Button variant="contained" href="https://www.phius.org/what-is-passive-building">What is passive building?</Button>
          </ButtonDiv>
          <StyledP>We are certified Passive House Builders through PHIUS (Passive House Institute US)  This is a highly in-depth and challenging certification for passive home technologies. Travis has attended multi-day trainings, passed a rigorous exam demonstrating proficiency in building science, and has kept this knowlege current with continued education credits every 3 years.</StyledP>
        </StyledText>  
        <ImgDiv>
          <LogoImg1 src={Certified}/>
          <LogoImg1 src={Doe} />
        </ImgDiv>
        </ContentDiv>
      </StyledDiv>
        
    </>
  )
}

const StyledText = styled.div`
  margin: auto;
  width: auto;
  margin-top: 2%;
  font-size: 16px;
`

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

const StyledP = styled.p`
  font-family: inherit;
  margin: 30px 80px 30px 80px;
  color: black;
  font-weight: 300;
`

const ImgDiv = styled.div`
  display: flex;
  justify-content: space-around;
`

const LogoImg1 = styled.img`
  height: 160px;
  width: auto;
  margin-top: 2%;
  margin-bottom: 8%;
`
const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 98%;

`
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`