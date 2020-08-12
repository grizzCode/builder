import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'

export default function Associates() {

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>ASSOCIATES</StyledHeader>
        </HeaderDiv>
        <StyledText>
          <StyledH4>Associates</StyledH4>
         
        </StyledText>
    
      </StyledDiv>
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

const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  margin-top: 20%;
  margin-left: 3%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  height: 1vm;
  margin-top: 30px;
`

const HeaderDiv = styled.div`
  border-right: 2px solid black;
  width: 22%;
  height: 98vh;
`


const StyledH4 = styled.h3`
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 400;
  margin: 20px;
`