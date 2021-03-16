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
        <Border>
          <StyledH4>ARCHITECTS</StyledH4>
        </Border>
        <ContainerDiv>
          <StyledA href="http://klimaarchitecture.com/">
            <AnimationContainer>
              <FlexDiv>
                <StyledP>Klima Architecture</StyledP>
                <StyledImg src={Klima}></StyledImg>
              </FlexDiv>
            </AnimationContainer>
          </StyledA>
          <StyledA href="https://www.driftdesignstudio.co/">
            <AnimationContainer>
              <FlexDiv>
                <StyledP>Drift Design</StyledP>
                <StyledImg src={Drift}></StyledImg>
              </FlexDiv>
            </AnimationContainer>
          </StyledA>
        </ContainerDiv>
        <ContainerDiv>
          <StyledA href="https://imbue.design/">
            <AnimationContainer>
              <FlexDiv>
                <StyledP>Imbue Design</StyledP>
                <StyledImg src={Imbue}></StyledImg>
              </FlexDiv>
            </AnimationContainer>
          </StyledA>
          <StyledA href="https://www.brachdesign.com/">
            <AnimationContainer>
              <FlexDiv>
                <StyledP>Brach Design</StyledP>
                <StyledImg src={Branch}></StyledImg>
              </FlexDiv>
            </AnimationContainer>
          </StyledA>
        </ContainerDiv>
        <Border>
          <StyledSecondaryH4>DESIGNERS</StyledSecondaryH4>
        </Border>
        <ContainerDiv>
          <StyledA href="http://jsquaredinteriors.com/">
            <AnimationContainer>
              <FlexDiv>
                <StyledP>J Squared Interiors</StyledP>
                <StyledImg src={Jsquared}></StyledImg>
              </FlexDiv>
            </AnimationContainer>
          </StyledA>
          <StyledA href="https://www.homestyleparkcity.com/">
            <AnimationContainer>
              <FlexDiv>
                <StyledP>Home Style Park City</StyledP>
                <StyledImg src={HomeStyle}></StyledImg>
              </FlexDiv>
            </AnimationContainer>
          </StyledA>
        </ContainerDiv>
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
  width: 100%;
  text-align: center;
`
const StyledSecondaryH4 = styled.h3`
  font-family: inherit;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 20px;
  width: 100%;
  text-align: center;
  margin-top: 6%;
`

const StyledImg = styled.img`
  width: 220px;
  height: 220px;
  overflow: hidden;
`

const StyledP = styled.p`
  width: 220px;
`

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 4%;
  text-align: center;

`

const AnimationContainer = styled.div`
transition: 0.3s ease-out;
text-decoration: none;
margin-top: 6%;


&:hover {
  transform: scale(1.2);
  transition: 0.3s ease-out;
  cursor: pointer;
};
`

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
`

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 6%;
  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
  }
`
const Border = styled.div`
  border-bottom: 1px solid lightgrey;
  width: 70%;
  margin: auto;

`