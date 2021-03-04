import React from 'react'
import styled from 'styled-components'

export default function Windows() {

  return (
    <>
      <StyledText>
        <StyledH4>Window Sales</StyledH4>
      </StyledText>
    </>
  )
}

const StyledText = styled.div`

`

const StyledH4 = styled.h3`
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 400;
  margin: 20px;
`