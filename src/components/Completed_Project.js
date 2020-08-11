import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Gallery from './Gallery'

export default function CompletedProject(props) {


  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
          <StyledHeader>{props.name}</StyledHeader>
          <StyledList>
            <StyledList>{props.description}</StyledList>
            <StyledList>{props.specs}</StyledList>
          </StyledList>          
        </HeaderDiv>    
        <GalleryDiv>
          <Gallery images={props.images}/>
        </GalleryDiv>
      </StyledDiv>
    </>
  )
}

const GalleryDiv = styled.div`
  margin: auto;
  height: 80vh;
  width: 78vw;
  overflow: hidden;
`

const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  font-size: 36px;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 3%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  margin-top: 10px;
`

const HeaderDiv = styled.div`
  border-right: 2px solid black;
  width: 22%;
  height: 90vh;
  overflow: scroll;
`
const StyledList = styled.div`
  font-family: font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: #111111;
  margin: 11px;
`