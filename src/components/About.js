import React from 'react'
import styled from 'styled-components'
import Certified from '../images/builder-wide-logo.jpg'
import Doe from '../images/doe_zh_partner_logo.jpg'
import Button from '@material-ui/core/Button';
import AboutImg from '../images/about-img.jpeg'

export default function About() {

  return (
    <WrapperDiv>
      <StyledText>
        <StyledP>At T and T Mountain Builders our primary focus is building comfortable, healthy and durable homes.</StyledP>
       <AbImgDiv>
        <AbImg src={AboutImg}/>
       </AbImgDiv>
        <StyledP>T&T Mountain Builders was founded by Travis and Tammy Smith in 2002 as a custom carpentry company, and has evolved into a boutique home building company, typically only constructing 1-2 homes at a time. This allows us to focus on the fine details that typically get lost with larger firms.</StyledP>
        <StyledP>We employ passive house standards that include air tight construction, super insulated building envelopes, high performance European windows, and energy recovery ventilation. This all equates to an extremely high level of comfort for our clients. Our strategies are based on an understanding of building science, and of how each component relates to the whole system. We source only finishes that are low/no VOC to ensure a healthy indoor air environment.  We excel at our water management strategies on the exterior, ensuring long term durability.</StyledP>
        <ButtonDiv>
          <Button variant="contained" href="https://www.phius.org/what-is-passive-building">What is passive building?</Button>
        </ButtonDiv>
        <StyledP>We are certified Passive House Builders through PHIUS (Passive House Institute US)  This is a highly in-depth and challenging certification for passive home technologies. Travis has attended multi-day trainings, passed a rigorous exam demonstrating proficiency in building science, and has kept this knowlege current with continued education credits every 3 years.</StyledP>
      </StyledText>
      <ImgDiv>
        <LogoImg1 src={Certified} />
        <LogoImg1 src={Doe} />
      </ImgDiv>
    </WrapperDiv>
  )
}

const WrapperDiv = styled.div`
  height: 100vh;
  overflow: scroll;
`

const StyledText = styled.div`
  margin: auto;
  width: 100%;
  margin-top: 2%;
  font-size: 16px;
`

const StyledP = styled.p`
  font-family: inherit;
  margin: 3% 5% 3% 5%;
  color: black;
  font-weight: 300;
`

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1%;
  margin-bottom: 15%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LogoImg1 = styled.img`
  height: 20vh;
  width: auto;
  object-fit: cover;
  margin-top: 40px;
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

const AbImg = styled.img`
  height: 400px;
  width: auto;
  margin: auto;
` 

const AbImgDiv = styled.div`
display: flex;
align-items: center;
`