import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'

export default function Pineridge(props) {
  console.log(props)
  return(
    <>
      <Menu/>
      <StyledDiv>
      <HeaderDiv>
        <StyledHeader>ROBERTSON</StyledHeader>
      </HeaderDiv>
        <StyledImg src={require('../images/Robertson_res.jpg')}/>
      </StyledDiv>
    </>
  )
}

const StyledImg = styled.img`
  margin: auto;
  height: 80vh;
  width: 78vw;
  overflow: hidden;
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
  margin-top: 30px;
`
const HeaderDiv = styled.div`
  border-right: 2px solid black;
  width: 18%;
`