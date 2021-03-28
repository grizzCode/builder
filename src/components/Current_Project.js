import React from 'react'
import styled from 'styled-components'

export default function CurrentProject(image) {
  return(
    
    <>     
        <StyledImg src={image}/>
    </>
  )
}

const StyledImg = styled.img`
  margin: auto;
  margin-top: 0.6%;
  height: auto;
  width: 74vw;
  overflow: hidden;
  @media (max-width: 1224px) {
    margin-top: 8%;
    width: 100vw;
  }
`

