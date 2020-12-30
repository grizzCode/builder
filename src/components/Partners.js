import React from 'react'
import styled from 'styled-components'
import Klima from '../images/Klim.JPG'
import Drift from '../images/Drift Design.JPG'
import Imbue from '../images/Imbue Design.JPG'
import Branch from '../images/Branch Design.JPG'
import Jsquared from '../images/J-squared.JPG'
import HomeStyle from '../images/Home Style PC.JPG'

export default function Associates() {

  return (
    <>
      <StyledText>
        <StyledH4>ARCHITECTS</StyledH4>
         <p>Klima Architecture</p>
         <StyledImg src={Klima}></StyledImg>
         <p>Drift Design</p>
         <StyledImg src={Drift}></StyledImg>
         <p>Imbue Design</p>
         <StyledImg src={Imbue}></StyledImg>
         <p>Brach Design</p>
         <StyledImg src={Branch}></StyledImg>
        <StyledH4>DESIGNERS</StyledH4>
        <p>J Squared Interiors</p>
        <StyledImg src={Jsquared}></StyledImg>
        <p>Home Style Park City</p>
        <StyledImg src={HomeStyle}></StyledImg>
      </StyledText>
    </>
  )
}

const StyledText = styled.div`
  margin: auto;
  height: 84vh;
  width: 78%;
  margin-top: 50px;
  overflow: scroll;
`

const StyledH4 = styled.h3`
  font-family: inherit;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 20px;
`

const StyledImg = styled.img`
width: 120px;
height: 120px;
overflow: hidden;

`