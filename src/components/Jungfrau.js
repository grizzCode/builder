import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Gallery from './Gallery'

export default function Jungfrau() {

  const images = [
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956726/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_66_krdupe.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956800/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_75_ohijzs.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956519/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_4_xtmza8.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956512/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_40_zuou4s.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956516/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_1_mieyzy.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956525/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_3_muwpgw.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956526/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_41_b9gyzp.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956532/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_6_rv2jdj.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956535/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_43_fgc4jb.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956549/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_47_mdzvxj.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956562/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_48_f0uxau.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956562/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_50_fzlnnj.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956574/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_8_txghhz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956580/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_42_yobbid.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956588/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_9_uc1sen.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956591/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_7_mbuapo.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956597/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_10_omvh9s.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956603/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_49_unv5yz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956608/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_53_iu1exy.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956626/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_55_r1beyc.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956628/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_54_izdlui.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956629/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_11_wgmwcy.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956637/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_58_tddztr.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956649/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_60_fz7bh9.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956665/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_61_m7yvnf.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956666/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_15_jwls1y.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956674/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_14_n6y2it.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956677/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_13_ynvg5q.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956677/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_56_mn5uix.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956685/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_17_ow9cpq.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956685/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_16_riu6yy.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956691/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_62_tcjduc.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956706/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_65_ljzuv8.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956711/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_19_addibj.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956730/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_20_vbwtbt.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956735/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_67_xiyxct.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956749/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_21_fndw6y.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956754/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_68_ye0zsy.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956768/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_63_pimmly.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956772/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_18_pxvwhq.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956773/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_71_dbnfid.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956782/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_22_jfudh7.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956794/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_70_ql2db2.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956796/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_64_pac2ur.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956809/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_23_k1tae7.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956822/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_72_hiiqiv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956840/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_28_bphv3y.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956843/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_25_dnio8k.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956843/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_24_nql5kp.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956859/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_27_sftfmh.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956869/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_34_be636a.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956873/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_74_oluvve.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956883/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_31_eflryf.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956883/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_35_sbbvbc.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956885/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_33_bqlazl.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956892/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_38_hx54me.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595956893/T%20AND%20T%20BUILDERS/Jungfrau%20Hill%20Rd/272JungfrauHillRD_37_nx7eyg.jpg',
    },
  ];

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>INTERLAKEN</StyledHeader>
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
