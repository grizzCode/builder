import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Gallery from './Gallery'

export default function Hitching() {

  const images = [
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883232/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9073_swwwns.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883197/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9006-2_xrmfkp.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883184/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8753_waiypy.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883183/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8749_owes3o.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883182/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8991_awws22.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883178/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8751_l8nyf9.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883184/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8993_yp5hke.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883185/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8999_nlmwak.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883191/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8754_clekht.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883203/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9013_uy6w1o.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883204/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9002_vchdbs.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883206/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9031_kzvfj6.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883207/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8758-2_qbkrsu.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883208/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9011_ugjcvc.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883210/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8760_pel2y4.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883212/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9038-2_qd2p7b.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883219/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9056_jxyktv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883219/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9059_zjdglx.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883223/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9066_rov7zw.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883236/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8782_hv88ef.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883238/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8778_qflhkp.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883240/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8774-2_zlqvz1.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883243/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8784_jxf1cu.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883250/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8785_qjrglo.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883252/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8799_p9lpfs.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883255/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8788_w9hlja.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883257/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8796_rct1ud.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883258/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH9064_emt3rk.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883258/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8803_xcoku2.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883264/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8805_rohcce.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883265/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8790-2_pvalsc.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883266/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8832_qzcvwh.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883275/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8807_ofhtwh.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883275/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8825_m4jdzc.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883280/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8840_e6yeci.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883282/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8842-2_whpbrk.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883282/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8838_jse9ub.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883291/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8858_vawwla.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883291/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8843-3_dxkntw.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883292/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8845_ybbftf.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883296/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8836_ybltgw.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883296/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8864_vrza8c.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883296/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8836-2_vqybtk.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883300/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8871_xrx7cb.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883302/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8856-3_zxofpt.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883308/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8876_fbnlyu.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883310/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8878_mk1sex.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883314/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8879_kxkwfz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883319/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8874_p6jeob.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883326/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8888_crqneu.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883327/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8890_lociqi.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883327/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8892_ej2fmz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595883329/T%20AND%20T%20BUILDERS/Hitching%20Post%20Dr/_JAH8893_czifwj.jpg',
    },
  ];

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>HITCHING POST DR</StyledHeader>
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
