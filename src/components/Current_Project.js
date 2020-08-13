import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'

export default function CurrentProject(props) {
  console.log(props)
  return(
    
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
          <StyledHeader>{props.name}</StyledHeader>
        </HeaderDiv>
        
        <StyledImg src={props.image}/>
      </StyledDiv>
    </>
  )
}

const StyledImg = styled.img`
  margin: auto;
  margin-top: 0.6%;
  height: 80vh;
  width: 74vw;
  overflow: hidden;
`

const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  font-size: 36px;
  margin-top: 22%;
  margin-bottom: 8%;
  margin-left: 0;
  margin-right: 3%;
  background-color: #181818;
  color: white;
  padding: 12px;
  width: 100%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  margin-top: 30px;
`

const HeaderDiv = styled.div`
  width: 21%;
  margin-top: 2%;
`

