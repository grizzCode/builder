import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Gallery from './Gallery'

export default function Royal() {

  const images = [
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890211/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3980_ovp3cd.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890213/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3977_rjrxsy.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890208/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3992_uaamjc.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890204/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3996_jfgcel.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890202/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3998_wvdix4.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890190/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3971_cxfymq.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890188/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3969_tg1rjw.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890187/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3972_awozdg.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890184/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3951_amc1kv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890181/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3965_pqvmdk.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890171/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3956-2_oavkji.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890162/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3947_ukbeon.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890158/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3949_qxovwv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890158/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3955_nvybqa.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890154/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3944_i9ri79.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890153/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3946_quyhud.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890141/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3939_ydv4ec.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890137/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3907_qmy4hv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890137/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3931_rspoyy.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890132/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3922_waxbkm.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890129/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3920_p9bpbl.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890128/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3932_ylbeh6.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890122/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3918_tjnf1s.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890116/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3915_b2xwlh.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890114/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3917_jiappz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890112/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3912_nnqewg.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890106/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3904_e1usbq.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890098/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3886_iupcyv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890098/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3891_yo82xo.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890098/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3892_cnwcoe.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890093/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3884_uj6c91.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890091/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3866_i2s514.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890083/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3871_f53sqh.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890083/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3882_cs5kdq.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890080/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3883_qabfve.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890080/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3881_acjfjv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890076/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3877_rgwcrt.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890067/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3868_or1vug.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890066/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3880_dvetrj.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890060/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3867_v3jzsa.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890059/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3870_zlnkef.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890052/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3862_q3gpsw.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890051/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3861_gzb02k.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890046/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3865_c3crao.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890044/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3860_qvvwtb.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890038/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3858_oh0lq5.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890036/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3838_w52dx9.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890031/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3859_ccooiz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890030/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3854_f9otn2.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890027/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3856_wxjcy9.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890013/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3853_my1gn0.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890011/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3847_hsuxwf.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890007/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3849_e1ssmn.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890003/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3845_vunq22.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889992/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3841_heofaa.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889989/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3836_tbtvwo.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889988/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3842_ii7sc9.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889987/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3827_yuhrbq.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889972/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3825_c3x2cl.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889979/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3830_avy7h0.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889970/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3814_k1qar0.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889970/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3808_ele8z2.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889969/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3824_hrrgjp.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889962/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3809_jkscsv.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889954/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3787_mwu4ab.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889951/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3791_myeucq.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889951/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3801_ctql2e.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889949/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3803_ovyhph.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889947/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3778_naull0.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889935/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3793_dob7gb.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889934/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3774_ljmiuw.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889928/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3789_bvs7jz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889921/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3773_qpt2rr.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889919/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3763_obgyz1.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889918/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3765_rc9qb5.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889907/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3757_gaqtmb.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889906/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3759_hbqzp5.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889904/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3755_rcj0vd.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889898/T%20AND%20T%20BUILDERS/Royal%20St/JAH-4_ly7x6k.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889898/T%20AND%20T%20BUILDERS/Royal%20St/JAH-1_xlvjs2.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889892/T%20AND%20T%20BUILDERS/Royal%20St/JAH-5_t9vorl.jpg',
    },
    {
      original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595889887/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3752_ygucdk.jpg',
    },
  ];

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>STERLINGWOOD</StyledHeader>
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
