import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Method from './components/Method';
import Associates from './components/Associates';
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CurrentProject from './components/Current_Project';
import CompletedProject from './components/Completed_Project';
import PineridgeImg from './images/Pineridge_res.jpg'
import RobertsonImg from './images/Robertson_res.jpg'

function App() {

  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact_us" component={Contact}/>
          <Route exact path="/method" component={Method}/>
          <Route exact path="/pineridge">
            <CurrentProject name="PINERIDGE" image={PineridgeImg} />
          </Route>
          <Route exact path="/robertson">
            <CurrentProject name="ROBERTSON" image={RobertsonImg} />
          </Route>
          <Route exact path="/testimonials" component={Testimonials}/>
          <Route exact path="/associates" component={Associates}/>
          <Route exact path="/canyon">
            <CompletedProject name="PINERIDGE" images={pineridge_images} description={pineridge_description} specs={pineridge_specs}/>
          </Route>
          <Route exact path="/stagecoach">
            <CompletedProject name="STAGECOACH" images={stagecoach_images} description={stagecoach_description} specs={stagecoach_specs}/>
          </Route>
          <Route exact path="/hitching_post">
            <CompletedProject name="HITCHING POST" images={hitching_post_images} description={hitching_post_description} specs={hitching_post_specs}/>
          </Route>
          <Route exact path="/sterlingwood">
            <CompletedProject name="STERLINGWOOD" images={sterlingwood_images} description={sterlingwood_description} specs={sterlingwood_specs}/>
          </Route>
          <Route exact path="/interlaken">
            <CompletedProject name="INTERLAKEN" images={interlaken_images} description={interlaken_description} specs={interlaken_specs}/>
          </Route>
          <Route exact path="/meadows">
            <CompletedProject name="MEADOWS PASSIVE HOUSE" images={meadows_images} description={meadows_description} specs={meadows_specs}/>
          </Route>
          <Route exact path="/maple">
            <CompletedProject name="MAPLE PASSIVE HOUSE" images={maple_images} description={maple_description} specs={maple_specs}/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
} 

export default App;


const pineridge_description = "The was our first of many projects with Park City Design+Build . Dift Design was responsible for this plan, with Klima Architecture now being the other part of the company previously known as PCDB."

const pineridge_specs = (
<>
<p>Architect: Park City Design+Build: Andrew Foster (now Drift Design)</p>
<a href="https://www.driftdesignstudio.co/">https://www.driftdesignstudio.co/</a>
<p>Interior design by clients and T&T</p>
<ul>
  <p>3000 SF</p>
  <p>Completed February 2018</p>
  <p>17 month timeline including a 4-1/2 month winter shutdown</p>
  <p>Zola European windows</p>
  <p>Mitsubishi ducted heat pump system</p>
  <p>Extensive board form concrete, performed in-house </p>
  <p>Pine Tar siding finish</p>
  <p>Solar PV system</p>
  <p>2 x 8 Double stud wall with 3” continuous exterior insulation</p>
</ul>
</>
)

const pineridge_images = [
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202722/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_68_rxsh8w_ootbon.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202723/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_71_tme9ph_dl3lnx.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202626/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_64_ga96t5_cpoiui.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202723/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_72_auqa5l_pbez2t.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202723/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_76_tz3ipv_c1bmkl.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202625/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_63_qkkw3w_hhdis9.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202618/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_11_tbzpih_ftyejm.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202618/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_17_vprach_u6ethc.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202618/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_7_apcco3_kumxpr.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202619/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_5_c9weey_a1udcu.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202618/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_12_ghyxl7_jeri1i.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202618/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_2_wznq08_httbif.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202620/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_25_k1ah5p_wwi4z4.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202620/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_20_tsxy6p_pdsqx6.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202620/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_28_drycv8_vf91tf.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202621/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_38_jp74mc_ic9whi.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202622/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_33_w9b9fn_skrxsb.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202622/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_21_hyequt_vkq63r.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202622/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_41_qwbffu_bn3jle.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202623/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_54_bp5bol_cdnycv.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202624/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_42_kpqvf5_xfnbaa.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202625/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_48_sfcn7y_rjoakw.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202625/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_52_kiqvno_gzzhlt.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597202625/T%20AND%20T%20BUILDERS/Pineridge%20RS/6960Canyon_DR_59_kx9nm1_igzrwp.jpg',
  },
];

const stagecoach_description = "This project was built for a wonderful couple and their German Shepherd."

const stagecoach_specs = (
<>
<p>Architect: Park City Design+Build : Chris Price</p>
<a href="http://klimaarchitecture.com/">http://klimaarchitecture.com</a>
<p>Interior design by clients and T&T</p>
<ul>
  <p>3006 SF House</p>
  <p>936 sf garage</p>
  <p>Main level living</p>
  <p>Wine room, utilizing only the earth for conditioning</p>
  <p>This space maintains 50 degrees year round!</p>
  <p>12” double Stud wall construction</p>
  <p>Zola European windows</p>
  <p>Solar PV system</p>
  <p>Completed February 2020 (17 month timeline, including a 4 month winter shutdown)</p>
</ul>
</>
)

const stagecoach_images = [
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187561/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-28_yoze49_ag0rcj.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187563/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-31_ezct6b_smxhso.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187560/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-29_qrfrlz_sbhvgq.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187559/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-27_jcnmqi_afuote.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187555/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-21_j4cat7_pdfnl5.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187554/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-20_zp2ru5_ff8bnn.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187558/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-24_giu6gv_n872tc.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187580/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-43_a9chyk_ffdjhf.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187553/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-18_p0qzcr_fakqjp.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187553/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-15_loqgkj_esk5t2.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187552/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-13_xf9acs_glvwre.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187551/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-19_febepf_ahem4e.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187550/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-17_so9qj9_gdlrbc.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187552/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-22_u6uxtz_vicpd2.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187557/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-23_hexh63_en3q1t.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187559/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-25_it31wl_jfpugk.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187563/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-26_hubtdh_gdmklo.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187566/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-34_mcli9m_mivkky.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187567/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-32_ggbu3e_p5ahbz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187567/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-33_rfnfpn_lv2vl0.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187569/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-30_buc4v4_thw6jh.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187569/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-37_wj5o3u_gzzsnj.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187571/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-35_rlicih_wocoqk.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187572/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-36_oppa6t_aoapmb.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187572/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-39_wheuux_egvukd.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187574/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-42_qojnad_g6mpgf.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187574/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-38_oq7s8m_idlkpx.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187574/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-40_amgn8r_h68lpy.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187577/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-45_mwdlxz_anbed9.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187577/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-44_gvnsed_bephmj.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187578/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-47_yunylm_fx6eh0.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187578/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-46_vul1k5_hc9tee.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187580/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-48_xvlujm_nf8tpw.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187580/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-49_uhvi8r_mkudlt.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187580/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-50_cbprww_xtfgma.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187582/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-53_r8ax1i_amedow.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187582/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-51_hgjrnu_z75j0v.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187584/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-57_nupouy_zwvaay.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187584/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-52_zqbi2c_pp3chz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187584/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-54_v5pc5y_i7gyrl.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187585/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-59_v5uhsm_fup2tz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187586/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-55_ytirll_ogtql6.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187587/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-60_i6giqv_gfrbke.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187587/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-58_ek15hl_rasxh2.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187588/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-56_c4bhxd_fssqf2.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187588/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-64_ruhvu6_gtp8qv.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187589/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-61_vziejv_bfj5k3.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187589/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-63_z5iygb_voxsqm.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187591/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-68_ko5hxb_bfvlgu.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187591/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-66_rhsgqk_y7wfov.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187591/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-67_ctg2ee_uriomx.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187591/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-71_gsepv8_wsmcqx.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187593/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-74_oqw7lp_llpvyu.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187593/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-70_plvlb9_je5ve2.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187595/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-76_kudiep_cqybqt.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187595/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-75_lpog4w_obmdcv.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187597/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-72_tmkjic_m8kvee.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597187597/T%20AND%20T%20BUILDERS/Stagecoach%20RS/7777StagecoachDR-73_lm5xnb_pq7y38.jpg',
  }
];

const hitching_post_description = "These clients have become great friends!"

const hitching_post_specs = (
  <>
  <p>Architect: Brach Design </p>
  <a href="https://www.brachdesign.com/">https://www.brachdesign.com/</a>
  <p>Interior design by clients and T&T</p>
  <ul>
    <p>3000 SF</p>
    <p>Completed April 2016</p>
    <p>11 month construction timeline</p>
    <p>2x6 wall assembly with 3” exterior foam</p>
    <p>Alpen High Performance Windows</p>
    <p>Hydronic baseboard heating  / DHW combi system</p>
  </ul>
  </>
  )

const hitching_post_images = [
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177865/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH9073_swwwns_ctbfwc.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177858/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH9006-2_xrmfkp_e4ua4m.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177839/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8753_waiypy_tdqic2.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177838/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8754_clekht_evl85w.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177862/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH9056_jxyktv_yuk3ck.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177839/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8758-2_qbkrsu_sdqztr.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177865/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH9059_zjdglx_bktweb.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177839/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8751_l8nyf9_wuduyd.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177839/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8774-2_zlqvz1_h1anrq.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177839/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8749_owes3o_x8dk3y.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177842/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8785_qjrglo_wl7fzm.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177842/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8788_w9hlja_dfc3kj.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177843/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8790-2_pvalsc_plk4vq.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177840/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8778_qflhkp_cak4at.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177840/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8782_hv88ef_llipgd.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177840/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8784_jxf1cu_mhhbo5.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177841/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8799_p9lpfs_ucqjyo.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177842/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8796_rct1ud_ckgqiw.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177843/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8805_rohcce_fifhxn.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177843/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8807_ofhtwh_if1nbz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177844/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8803_xcoku2_s3rjgq.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177845/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8836-2_vqybtk_x7f13x.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177846/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8836_ybltgw_ygzqah.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177845/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8838_jse9ub_txx5ni.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177846/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8825_m4jdzc_n5zucg.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177846/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8842-2_whpbrk_bkrnb4.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177849/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8843-3_dxkntw_zyvwiz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177849/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8845_ybbftf_n06l6p.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177849/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8858_vawwla_by8xod.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177850/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8840_e6yeci_malka7.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177851/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8871_xrx7cb_kd274r.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177851/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8856-3_zxofpt_ycs6ml.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177851/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8864_vrza8c_ibtuff.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177852/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8876_fbnlyu_cma1wd.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177852/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8878_mk1sex_vlioyy.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177853/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8874_p6jeob_y9tj1m.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177853/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8879_kxkwfz_y62p2j.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177854/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8890_lociqi_xxqofo.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177855/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8893_czifwj_rxpzlj.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177856/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8888_crqneu_d2vrvi.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177857/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8892_ej2fmz_sntoca.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177859/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8991_awws22_ur9mrw.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177860/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8999_nlmwak_cwinag.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177860/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH8993_yp5hke_skgzmt.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177860/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH9013_uy6w1o_hvsgz3.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177862/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH9002_vchdbs_xgvqv2.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177863/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH9038-2_qd2p7b_eatgvl.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597177863/T%20AND%20T%20BUILDERS/Hitching%20Post%20RS/_JAH9031_kzvfj6_tlkrxn.jpg',
  }
];

const sterlingwood_description = "Floor plan revisions and layout by T&T, interior design by Alder & Tweed"

const sterlingwood_specs = (
<>
  <p>This was a 3000 SF condo remodel for friends that happen to live out of the country. </p> 
  <p> The online collaboration was a another great example of clients trusting in us to see their vision (or dreams!) through to the end.</p>
  <p>We completely “gutted” the interior to the studs, stripped all of the mechanicals and started over. Where this may 
    seem wasteful, the project was built in the early 80’s, and built poorly at that. The upper level was hot in 
    the summer, the lower level was an ice box in the winter, and they never had enough hot water. We delivered on 
    redesigning these systems and other to create another comfortable / healthy project that they love.</p>
</>
)

const sterlingwood_images = [
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203509/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3861_gzb02k_qz6jhk.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203509/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3859_ccooiz_n9d1vh.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203510/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3860_qvvwtb_zpuzgf.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204658/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3865_c3crao_cylb8g.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204661/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3880_dvetrj_pmgjrg.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204659/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3877_rgwcrt_ny6mbt.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204661/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3883_qabfve_jtvjly.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204956/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3947_ukbeon_kwrvd5.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597205045/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3996_jfgcel_b60plq.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597205045/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3998_wvdix4_rcrnrz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204961/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3977_rjrxsy_hrqkyy.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204961/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3972_awozdg_kah0pe.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204960/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3971_cxfymq_q4hpdy.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204960/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3955_nvybqa_loawl7.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204959/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3965_pqvmdk_ujnf9h.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204958/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3949_qxovwv_smnpiv.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890141/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3939_ydv4ec.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1595890137/T%20AND%20T%20BUILDERS/Royal%20St/JAH-3907_qmy4hv.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204957/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3969_tg1rjw_ewb0pr.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204956/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3956-2_oavkji_th9j0w.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204953/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3944_i9ri79_z0kuxe.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204953/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3946_quyhud_omhz3g.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204953/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3922_waxbkm_eahgz3.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204953/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3939_ydv4ec_ki2oqe.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204951/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3920_p9bpbl_syvu9y.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204951/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3918_tjnf1s_souolp.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204950/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3931_rspoyy_pbrheb.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204949/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3932_ylbeh6_ridgl2.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204668/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3917_jiappz_bptoz5.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204668/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3891_yo82xo_zjtgq5.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204667/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3915_b2xwlh_qxpxu8.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204666/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3904_e1usbq_z0cbao.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204667/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3912_nnqewg_yyen6k.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204667/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3907_qmy4hv_qlmf3w.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204665/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3892_cnwcoe_x21rkv.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204663/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3886_iupcyv_xqgg3j.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204663/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3884_uj6c91_f6yavn.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204662/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3881_acjfjv_zsqfw0.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204661/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3882_cs5kdq_dzkfsj.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204659/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3868_or1vug_hh8ggb.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204658/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3866_i2s514_e1jahu.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204658/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3871_f53sqh_p2p8yd.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204658/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3870_zlnkef_f1f20y.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597204657/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3867_v3jzsa_ssylph.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203511/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3862_q3gpsw_dibem6.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203510/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3858_oh0lq5_fjtcls.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203510/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3856_wxjcy9_opbtgl.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203510/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3854_f9otn2_ucny2i.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203506/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3853_my1gn0_myfe32.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203506/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3845_vunq22_ib1ysz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203505/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3849_e1ssmn_eqcrcq.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203505/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3842_ii7sc9_m6almd.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203505/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3841_heofaa_pdebmx.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203505/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3847_hsuxwf_xt2wdz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203505/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3838_w52dx9_fwbunw.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203504/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3836_tbtvwo_g2cp9s.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203503/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3830_avy7h0_juxiof.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203503/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3827_yuhrbq_tdyzov.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203503/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3825_c3x2cl_on7ofa.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203503/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3824_hrrgjp_nduqz8.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203503/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3814_k1qar0_qouidp.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203337/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3789_bvs7jz_mh0qio.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203336/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3809_jkscsv_oimr2r.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203335/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3808_ele8z2_pvim24.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203335/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3793_dob7gb_vedw8u.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203334/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3787_mwu4ab_nop0nk.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203333/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3791_myeucq_l5c5l4.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203333/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3801_ctql2e_to52bl.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203332/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3803_ovyhph_fiitcm.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203329/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3773_qpt2rr_edlpcc.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203329/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3778_naull0_yv9ous.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203328/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3774_ljmiuw_hjdcfo.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203328/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3763_obgyz1_r5bluo.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203328/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3765_rc9qb5_kvpyjs.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203327/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3757_gaqtmb_b4zofo.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203326/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3759_hbqzp5_vcojit.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203325/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-1_xlvjs2_b6e34g.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203326/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-5_t9vorl_jvqcvv.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203325/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3755_rcj0vd_ph7nyp.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203325/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-4_ly7x6k_sammic.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597203325/T%20AND%20T%20BUILDERS/Sterlingwood%20RS/JAH-3752_ygucdk_qf8dih.jpg',
  }
];

const interlaken_description = "This project was built for a friend on the site of an old cabin that was built in the 70’s."

const interlaken_specs = (
  <>
  <p>Architect: Park City Design+Build: Andrew Foster (now Drift Design)</p>
  <a href="https://www.driftdesignstudio.co/">https://www.driftdesignstudio.co/</a>
  <ul>
    <p>2154 SF House</p>
    <p>1700 SF Garage!</p>
    <p>809 SF of deck space to maximize outdoor living!</p>
    <p>2 x 8 double stud wall construction</p>
    <p>Completed January 2019. (9 month construction process)</p>
  </ul>
  </>
  )


const interlaken_images = [
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201661/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_66_krdupe_bll5yf.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201667/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_75_ohijzs_y1yyxd.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201658/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_63_pimmly_fooq35.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201664/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_68_ye0zsy_bnsi67.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201667/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_74_oluvve_e5h7j9.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201665/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_72_hiiqiv_fr2reh.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201663/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_70_ql2db2_feauug.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201664/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_71_dbnfid_slfwit.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201661/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_62_tcjduc_lw6cma.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201661/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_67_xiyxct_fr7e8l.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201659/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_64_pac2ur_q14bve.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201658/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_65_ljzuv8_jtsd1w.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201658/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_61_m7yvnf_ufofyc.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201655/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_55_r1beyc_o6bn6q.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201170/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_19_addibj_kfcexf.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201173/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_21_fndw6y_ok4now.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201169/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_23_k1tae7_yr3phn.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201169/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_22_jfudh7_vwo31l.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201169/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_20_vbwtbt_zdjpcj.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201166/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_17_ow9cpq_xpkmmk.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201166/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_16_riu6yy_rtdtne.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201166/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_10_omvh9s_ievemu.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201166/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_8_txghhz_csv9vq.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201166/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_18_pxvwhq_fj2u64.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201165/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_15_jwls1y_d0u8q6.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201163/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_14_n6y2it_ip2t91.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201163/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_9_uc1sen_canwim.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201162/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_11_wgmwcy_nhq4rh.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201162/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_13_ynvg5q_d3ltzo.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201162/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_4_xtmza8_ds4cke.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201161/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_3_muwpgw_bq1g7d.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201161/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_7_mbuapo_mcubno.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201160/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_6_rv2jdj_qi1szp.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201160/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_1_mieyzy_km5sgi.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201370/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_33_bqlazl_alavqn.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201370/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_24_nql5kp_uc1wqr.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201371/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_31_eflryf_yxuen3.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201371/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_28_bphv3y_cuedvx.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201371/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_25_dnio8k_dftbau.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201372/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_27_sftfmh_fhq38k.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201372/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_35_sbbvbc_yctbtl.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201373/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_38_hx54me_cm4mqq.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201373/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_37_nx7eyg_xxyrvp.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201373/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_34_be636a_celmkq.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201373/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_40_zuou4s_vgrohb.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201375/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_41_b9gyzp_a75a6t.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201375/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_42_yobbid_pwgc2o.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201375/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_48_f0uxau_j9ug6h.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201375/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_43_fgc4jb_xrpett.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201376/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_47_mdzvxj_qxznue.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201377/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_50_fzlnnj_wriaom.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201379/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_49_unv5yz_ripzoa.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201379/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_53_iu1exy_oqefjf.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201379/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_54_izdlui_tt9gdc.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201654/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_60_fz7bh9_nobetk.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597201654/T%20AND%20T%20BUILDERS/Interlaken%20RS/272JungfrauHillRD_58_tddztr_wbgk4g.jpg',
  }
];

const meadows_description = "This is the first fully certified Passive House in the city of Park City. (the first in Summit County is owned by T&T!) This project was constructed for a family from Northern California who is conscious about their overall environmental impact."

const meadows_specs = (
  <>
  <p>Architect: Park City Design+Build : Chris Price</p>
  <a href="http://klimaarchitecture.com/">http://klimaarchitecture.com</a>
  <p>Interior design by J2 , Julie Chahine</p>
  <p>This project team was a great example of enjoyable building experience!</p>
  <ul>
    <p>5000 SF</p>
    <p>12” double stud wall, with 3” continuous exterior insulation </p>
    <p>Lumos solar canopies over decks, with additional solar PV on upper roof</p>
    <p>All electric, truly net zero!</p>
    <p>Heat pump heating and cooling</p>
    <p>Zehnder HRV ventilation system</p>
    <p>Glo European windows</p>
    <p>Sanden heat pump water heater (first in Utah)</p>
    <p>Delta Millworks Sho-sugi-ban siding</p>
    <p>Completed August 2019 (15 month construction process)</p>
  </ul>
  </>
  )

const meadows_images = [
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199953/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-9_dbnjr8_rj5s6p.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199952/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-12_vhbt0b_tnklxc.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199949/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-14_tk7vz3_lyndmw.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199934/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-3_jzvvfg_ch1rht.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199933/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-1_pr3onp_lx3wta.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200107/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-26_nmdyre_orhh3z.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200109/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-29_vkmxkk_qeq5rs.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200105/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-24_os2csn_uhpohp.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200108/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-28_lswdwu_qdbfte.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200106/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-27_hspja3_ofgk3f.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200105/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-25_vtmjyt_eza8vv.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200108/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-32_pumdxw_cyn9ci.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200107/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-23_nm9rgz_talbu0.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200105/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-22_g56aeu_ri107e.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200104/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-34_fqx0zf_i9qri0.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200104/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-35_pmjiad_pwabul.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200103/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-20_w0gwnp_bb5g3w.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200103/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-19_mpphnm_wik1vd.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200102/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-33_rjmmw4_wpjgat.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597200101/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-21_dbxqul_tmutik.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199962/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-13_dhes0h_yow2cj.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199957/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-18_eubgci_hercqp.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199955/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-17_eff8xg_n61yvp.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199952/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-15_o5llzv_vaxpzt.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199944/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-11_tfjksu_rdtq3o.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199943/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-6_m0cpxn_lcvqlz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199939/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-5_qfybla_oc6nw3.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199942/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-7_elio3k_ubqkyt.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199938/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-4_uv7wbz_av9atm.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199935/T%20AND%20T%20BUILDERS/Meadows%20RS/Meadows_Dr_PC-2_bglfws_tpqzbz.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199934/T%20AND%20T%20BUILDERS/Meadows%20RS/Iphone_1_pwdn27_tajxt0.jpg',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597199932/T%20AND%20T%20BUILDERS/Meadows%20RS/Iphone_4_pzkcoq_ooysiv.jpg',
  }
];

const maple_description = "This was the first certified passive house in Summit county, built and occupied by Travis and Tammy of T and T Mountain Builders."

const maple_specs = (
  <>
  <p>Designed by Travis and Tammy</p>
  <p>Passive house consulting by Dave Brach</p>
  <ul>
    <p>Completed November 2014</p>
    <p>5 month construction timeline (whew!)</p>
    <p>2350 SF</p>
    <p>All electric</p>
    <p>Solar Thermal domestic hot water</p>
    <p>Solar PV</p>
    <p>Net Zero</p>
    <p>Zola European windows</p>
    <p>Zehnder HRV ventilation</p>
  </ul>
  </>
  )

const maple_images = [
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597186369/T%20AND%20T%20BUILDERS/Maple%20RS/Screen_Shot_2020-08-05_at_5.06.01_PM_oieia5_mhwdlp.png',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597186367/T%20AND%20T%20BUILDERS/Maple%20RS/Screen_Shot_2020-08-05_at_5.02.19_PM_y2ze1h_tqlkdo.png',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597186362/T%20AND%20T%20BUILDERS/Maple%20RS/Screen_Shot_2020-08-05_at_5.08.25_PM_e2ivwj_arx1ef.png',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597186369/T%20AND%20T%20BUILDERS/Maple%20RS/Screen_Shot_2020-08-05_at_5.09.47_PM_vf8x4t_kwvwud.png',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597186368/T%20AND%20T%20BUILDERS/Maple%20RS/Screen_Shot_2020-08-05_at_5.07.30_PM_onk2hd_nyvffi.png',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597186370/T%20AND%20T%20BUILDERS/Maple%20RS/Screen_Shot_2020-08-05_at_5.09.16_PM_vt283k_dszshc.png',
  },
  {
    original: 'https://res.cloudinary.com/grizzcode-llc/image/upload/v1597186364/T%20AND%20T%20BUILDERS/Maple%20RS/Screen_Shot_2020-08-05_at_5.05.15_PM_fhs4og_wjkoiy.png',
  }
];
