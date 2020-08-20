import React from 'react'
import styled from 'styled-components'

export default function Image(props) {
  
  const StyledImg = styled.div`    
    background: url(${props.image}) center center no-repeat;
    background-size: cover;
    background-repeat: no-repeat,
    background-position: center center;
    height: 100vh;
    z-index: -1;
    @media (max-width: 1023px) {
      background-size: contain;
    }
`

  return(
    <StyledImg/>
  )
}