import React from 'react'
import Menu from './Menu'  
import Slider from './Slideshow'

export default function Home() {
  return (
    <section className="home"> 
      <Slider/>
      <Menu/>
    </section>
  )
}

