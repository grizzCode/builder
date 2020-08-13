import React from 'react'
import styled from 'styled-components'

export default function Image(props) {
  
  const StyledImg = styled.div`    
    background-image: url(${props.image});
    background-size: cover;
    background-repeat: no-repeat,
    background-position: center;
    height: 100vh;
    width: 100vw;
`

  return(
    <StyledImg/>
  )
}