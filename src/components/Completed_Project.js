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
  margin-top: 1.2%;
  height: 80vh;
  width: 66vw;
  overflow: hidden;
`

const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  font-size: 36px;
  margin-top: 4%;
  margin-bottom: 8%;
  margin-left: 0;
  margin-right: 3%;
  background-color: #181818;
  color: white;
  padding: 12px;
  width: 90%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  margin-top: 8px;
`

const HeaderDiv = styled.div`
  width: 28%;
  height: 98vh;
  overflow: scroll;
`
const StyledList = styled.div`
  font-family: font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: #111111;
  margin: 6px;
  > ul {
    margin-left: 10px;
    margin-right: 10px;
    border-top: 1px solid lightgrey;
    padding: 10px;
  }
`