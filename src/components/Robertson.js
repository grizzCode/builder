import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'

export default function Pineridge(props) {
  console.log(props)
  return(
    <>
      <Menu/>
      <StyledDiv>
        <StyledHeader>ROBERTSON</StyledHeader>
        <StyledImg src={require('../images/Robertson.jpg')}/>
      </StyledDiv>
    </>
  )
}

const StyledImg = styled.img`
  margin: auto;
  height: 80vh;
  width: auto;
`

const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;

`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  margin-top: 30px;
`