import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Process from './components/Process'
import About from './components/About'
import Green_Building from './components/Green_Building';
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
          <Route exact path="/process" component={Process}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact_us" component={Contact}/>
          <Route exact path="/green-building" component={Green_Building}/>
          <Route exact path="/pineridge">
            <CurrentProject name="PINERIDGE" image={PineridgeImg} />
          </Route>
          <Route exact path="/robertson">
            <CurrentProject name="ROBERTSON" image={RobertsonImg} />
          </Route>
          <Route exact path="/testimonials" component={Testimonials}/>
          <Route exact path="/canyon">
            <CompletedProject name="CANYON" images={canyon_images}/>
          </Route>
          <Route exact path="/stagecoach">
            <CompletedProject name="STAGECOACH" images={stagecoach_images}/>
          </Route>
          <Route exact path="/hitching_post">
            <CompletedProject name="HITCHING POST" images={hitching_post_images}/>
          </Route>
          <Route exact path="/sterlingwood">
            <CompletedProject name="STERLINGWOOD" images={sterlingwood_images}/>
          </Route>
          <Route exact path="/interlaken">
            <CompletedProject name="INTERLAKEN" images={interlaken_images}/>
          </Route>
          <Route exact path="/meadows">
            <CompletedProject name="MEADOWS PASSIVE HOUSE" images={meadows_images}/>
          </Route>
          <Route exact path="/maple">
            <CompletedProject name="MAPLE PASSIVE HOUSE" images={maple_images}/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
} 

export default App;



const canyon_images = [
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

const stagecoach_images = [
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

const hitching_post_images = [
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

const sterlingwood_images = [
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

const interlaken_images = [
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

const meadows_images = [
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

const maple_images = [
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