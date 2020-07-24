import React from 'react'
import Menu from './Menu'  
import styled from 'styled-components'
import Logo from '../images/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook'

import Slider from './Slideshow'

export default function Home() {
  return (
    <section class="home"> 
      <Slider/>
      <Menu/>
    </section>
  )
}

