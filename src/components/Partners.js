import React from 'react'
import styled from 'styled-components'

export default function Associates() {

  return (
    <>
      <StyledText>
        <StyledH4>ARCHITECTS</StyledH4>
         <p>Chris  : Klima Architecture</p>
         <p>Andrew: Drift design</p>
         <p>Imbue design</p>
         <p>Brach design</p>
        <StyledH4>DESIGNERS</StyledH4>
        <p>Julie Chahine : J squared interiors</p>
        <p>Mette Axboe : Home style Park City</p>
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