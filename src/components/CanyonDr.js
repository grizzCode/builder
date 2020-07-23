import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Gallery from './Gallery'

export default function Canyon() {

  const images = [
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522837/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_68_rxsh8w.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522837/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_71_tme9ph.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522837/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_76_tz3ipv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522837/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_72_auqa5l.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522834/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_63_qkkw3w.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522832/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_64_ga96t5.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522831/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_54_bp5bol.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522830/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_59_kx9nm1.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522827/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_41_qwbffu.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522827/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_52_kiqvno.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522825/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_33_w9b9fn.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522824/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_38_jp74mc.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522823/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_48_sfcn7y.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522823/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_42_kpqvf5.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522821/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_25_k1ah5p.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522819/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_28_drycv8.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522818/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_21_hyequt.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522818/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_17_vprach.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522817/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_20_tsxy6p.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522817/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_5_c9weey.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522814/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_2_wznq08.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522813/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_11_tbzpih.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522813/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_12_ghyxl7.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595522813/T%20AND%20T%20BUILDERS/Canyon%20Dr/6960Canyon_DR_7_apcco3.jpg',
    },
  ];

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>CANYON DR</StyledHeader>
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
