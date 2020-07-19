import React from 'react'
import Menu from './Menu'  
import styled from 'styled-components'


export default function Home() {
  return (
    <section class="home">
      <div class="home-header">
        <div class="home-header__bar"/>
        <div class="home-header__logo" />
      </div>


     
      <Menu/>
    </section>
  )
}

