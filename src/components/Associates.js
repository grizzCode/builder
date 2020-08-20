import React from 'react'
import styled from 'styled-components'

export default function Associates() {

  return (
    <>
      <StyledText>
        <StyledH4>Associates</StyledH4>
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
  text-transform: uppercase;
  font-weight: 400;
  margin: 20px;
`