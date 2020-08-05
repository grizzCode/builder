import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Gallery from './Gallery'


export default function Maple() {

  const images = [
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1596668610/T%20AND%20T%20BUILDERS/Maple/Screen_Shot_2020-08-05_at_5.02.19_PM_y2ze1h.png',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1596668789/T%20AND%20T%20BUILDERS/Maple/Screen_Shot_2020-08-05_at_5.05.15_PM_fhs4og.png',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1596668798/T%20AND%20T%20BUILDERS/Maple/Screen_Shot_2020-08-05_at_5.06.01_PM_oieia5.png',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1596669045/T%20AND%20T%20BUILDERS/Maple/Screen_Shot_2020-08-05_at_5.09.47_PM_vf8x4t.png',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1596668929/T%20AND%20T%20BUILDERS/Maple/Screen_Shot_2020-08-05_at_5.08.25_PM_e2ivwj.png',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1596668929/T%20AND%20T%20BUILDERS/Maple/Screen_Shot_2020-08-05_at_5.07.30_PM_onk2hd.png',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1596669011/T%20AND%20T%20BUILDERS/Maple/Screen_Shot_2020-08-05_at_5.09.16_PM_vt283k.png',
    }

  ];

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>MAPLE PASSIVE HOUSE</StyledHeader>
        </HeaderDiv>
        
        <GalleryDiv>
          <Gallery images={images}/>
        </GalleryDiv>
      </StyledDiv>
    </>
  )
}

const GalleryDiv = styled.div`
  margin: auto;
  height: 80vh;
  width: auto;
  overflow: hidden;

`

const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  padding-left: 8px;
  padding-right: 20px;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  margin-top: 30px;
`

const HeaderDiv = styled.div`
  border-right: 2px solid black;
  width: 30%;
`
