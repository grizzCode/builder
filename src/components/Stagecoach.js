import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Gallery from './Gallery'

export default function Stagecoach() {

  const images = [
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873609/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-28_yoze49.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873595/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-23_hexh63.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873546/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-4_tf8wgf.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873547/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-6_upu0w6.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873547/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-1_bvvhoa.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873548/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-5_y6nng2.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873550/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-3_an0arr.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873557/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-2_gcrhb9.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873560/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-8_cquk2n.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873566/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-11_syuxpf.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873567/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-9_q1toq0.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873568/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-7_mhdrpo.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873572/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-16_oowgnl.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873573/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-14_vymao0.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873573/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-12_hylugf.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873584/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-19_febepf.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873584/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-18_p0qzcr.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873584/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-13_xf9acs.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873585/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-17_so9qj9.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873592/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-22_u6uxtz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873596/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-21_j4cat7.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873601/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-24_giu6gv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873602/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-20_zp2ru5.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873609/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-15_loqgkj.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873612/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-26_hubtdh.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873614/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-27_jcnmqi.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873614/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-29_qrfrlz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873627/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-31_ezct6b.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873628/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-30_buc4v4.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873638/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-37_wj5o3u.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873641/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-33_rfnfpn.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873646/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-35_rlicih.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873649/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-38_oq7s8m.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873652/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-36_oppa6t.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873654/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-34_mcli9m.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873662/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-32_ggbu3e.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873663/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-42_qojnad.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873665/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-40_amgn8r.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873667/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-41_fact7a.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873668/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-39_wheuux.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873672/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-44_gvnsed.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873680/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-47_yunylm.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873680/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-49_uhvi8r.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873681/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-48_xvlujm.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873682/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-46_vul1k5.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873686/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-50_cbprww.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873698/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-43_a9chyk.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873701/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-45_mwdlxz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873945/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-56_c4bhxd.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873950/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-53_r8ax1i.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873971/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-57_nupouy.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873973/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-54_v5pc5y.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874175/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-73_lm5xnb.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595873992/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-55_ytirll.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874000/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-58_ek15hl.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874009/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-59_v5uhsm.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874027/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-60_i6giqv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874032/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-62_lvbxph.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874037/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-63_z5iygb.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874061/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-64_ruhvu6.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874073/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-61_vziejv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874070/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-51_hgjrnu.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874084/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-66_rhsgqk.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874090/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-68_ko5hxb.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874092/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-52_zqbi2c.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874100/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-67_ctg2ee.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874127/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-71_gsepv8.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874127/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-74_oqw7lp.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874131/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-70_plvlb9.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874140/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-72_tmkjic.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874152/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-75_lpog4w.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595874155/T%20AND%20T%20BUILDERS/Stagecoach/7777StagecoachDR-76_kudiep.jpg',
    },
  ];

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>STAGECOACH</StyledHeader>
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
  width: 78vw;
  overflow: hidden;

`

const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  margin-top: 20%;
  margin-left: 3%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  margin-top: 30px;
`

const HeaderDiv = styled.div`
  border-right: 2px solid black;
  width: 18%;
`
