import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Gallery from './Gallery'

export default function Thor() {

  const images = [
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907375/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-9_dbnjr8.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907303/T%20AND%20T%20BUILDERS/Thorjussen/Iphone_1_pwdn27.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907282/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-2_bglfws.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907285/T%20AND%20T%20BUILDERS/Thorjussen/Iphone_3_w0tzrq.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907302/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-6_m0cpxn.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907308/T%20AND%20T%20BUILDERS/Thorjussen/Iphone_4_pzkcoq.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907321/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-5_qfybla.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907322/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-7_elio3k.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907327/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-3_jzvvfg.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907338/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-4_uv7wbz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907345/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-1_pr3onp.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907351/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-11_tfjksu.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907366/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-16_enuqpz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907381/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-13_dhes0h.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907385/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-10_glc89x.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907393/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-12_vhbt0b.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907395/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-17_eff8xg.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907396/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-15_o5llzv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907405/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-18_eubgci.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907411/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-21_dbxqul.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907417/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-23_nm9rgz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907417/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-20_w0gwnp.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907423/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-22_g56aeu.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907426/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-24_os2csn.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907426/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-28_lswdwu.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907434/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-26_nmdyre.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907437/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-25_vtmjyt.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907437/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-27_hspja3.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907442/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-34_fqx0zf.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907452/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-33_rjmmw4.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907452/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-32_pumdxw.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907457/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-14_tk7vz3.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907458/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-29_vkmxkk.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907458/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-19_mpphnm.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907464/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-35_pmjiad.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595907464/T%20AND%20T%20BUILDERS/Thorjussen/Meadows_Dr_PC-30_ejssfs.jpg',
    },
  ];

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>THORJUSSEN</StyledHeader>
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
