import React from 'react'
import Menu from './Menu'  
import styled from 'styled-components'


export default function Home() {
  return (
    <section class="home">
      <StyledLogo>
        LOGO
      </StyledLogo>  
      <Menu/>
    </section>
  )
}

const StyledLogo = styled.div`
  font-size: 30px;
  text-align: right;
  padding: 30px 40px 30px 30px;
`

