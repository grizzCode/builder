import React from 'react'
import styled from 'styled-components'
import Card from './WindowCard'
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import A5 from '../images/Glo_Img/A5 window.jpg'
import A7 from '../images/Glo_Img/A7 window.jpg'
import CW from '../images/Glo_Img/CW curtain wall window.jpg'
import DW from '../images/Glo_Img/DW air lux descending window .jpg'
import A5D from '../images/Glo_Img/A5 door.jpg'
import A7D from '../images/Glo_Img/A7 door.jpg'
import LSD from '../images/Glo_Img/LS lift and slide door.jpg'
import PCD from '../images/Glo_Img/PC postless corner door.jpg'
import PD from '../images/Glo_Img/PD air lux pivot door.jpg'
import SD from '../images/Glo_Img/SD air lux sliding door.jpg'
import Logo from '../images/logo2.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const theme = createMuiTheme({
  overrides: {
    MuiTabs: {
      root: {
        background: 'black',
        flexGrow: 1,
      },
    },
  },
});


export default function WindowTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HeaderWrapper>
        <StyledLogo src={Logo}/>
        <HeadTextWrapper>
        <Heading>T&T Mountain Builders is your full-service Utah dealer for Glo and Air-Lux window and door products</Heading>
        <p> 
          As a successful General Contractor specializing in highly energy efficient custom mountain homes, we have the 
          full-spectrum knowledge to ensure your project is as smooth and successful as possible from inception to completion 
          and continued life cycle. We have worked with these windows and doors for several years, and it was a natural extension of
           our business to provide and service these incredibly well engineered European door and window packages. 
        </p>
        </HeadTextWrapper>
      </HeaderWrapper>
      {/* <ProcessWrapper>
        <ProcessHeading>
          GUIDED PROCESS
        </ProcessHeading>
        <ProcessBanner>
          <Banner1P>Starts with selecting the best products to compliment your design and project constraints.</Banner1P> 
        </ProcessBanner>
        <ProcessBanner>
          <Banner2P>In-house installation service with a specially-trained crew that knows the tolerances and demands of correct installation of these products.</Banner2P> 
        </ProcessBanner>
        <ProcessBanner>
          <Banner3P>Continued service and adjustment after installation to ensure an exceptional ownership experience.</Banner3P> 
        </ProcessBanner>
        <ProcessBanner>
          <Banner4P>Single point of contact means that we accept full responsibility for and are invested in the success and continued support of your door and window package.</Banner4P>
        </ProcessBanner>
        

 

 
-  
      </ProcessWrapper> */}
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
            <Tab label="Air-Lux" {...a11yProps(0)} />
            <Tab label="Glo Aluminum Windows" {...a11yProps(1)} />
            <Tab label="Glo Aluminum Doors" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CardWrapperDiv>
            <Card
              image={PD}
              imageTitle="Air Lux Pivot Door Series"
              href="https://glowindows.com/product/air-lux-pivot-door/"
              series="PD"
              title="Air-Lux Pivot Door"
              content="The ground-breaking Air-Lux Pivot Door provides a unique and enviable aesthetic without the typical drawbacks associated with pivoting entrance doors. The robust and dynamic hardware allows for incredibly large door panels to effortlessly rotate on a central or lateral axis, providing a show-stopping alternative to conventional doors at oversized entrance locations. A state-of-the-art air and […]"
            />
            <Card
              image={SD}
              imageTitle="Air Lux Sliding Door Series"
              href="https://glowindows.com/product/sliding-doors-air-lux/"
              series="SD"
              title="Air-Lux Sliding Doors"
              content="Once again upending the fenestration industry with superior design and construction, the Air-Lux Sliding Door leaves lesser door systems in the dust with its ability to span incredible dimensions and provide 100% impermeable water and air sealing. This patented sealing system combined with the ability to accommodate sliding leaf weights of up to nearly 4000lbs […]"
            />
            <Card
              image={DW}
              imageTitle="Air Lux DW Window Series"
              href="https://glowindows.com/product/air-lux-descending-window/"
              series="DW"
              title="Air-Lux Descending Window"
              content="Air-Lux has created a new paradigm in fenestration products with the Descending Window. By designing a system in which the entire width of the window can be opened without the requirements of side pockets or stacked sliding panels, Air-Lux has once again shattered pre-conceived expectations and limitations in both the design and construction of exterior […]"
            />
          </CardWrapperDiv>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <CardWrapperDiv>
            <Card
              image={A5}
              imageTitle="Glo A5 Window Series"
              href="https://glowindows.com/product/a5-double-triple-pane-european-windows/"
              series="A5"
              title="Double Pane + Triple Pane Aluminum Windows"
              content="A high performance glazing unit with a narrow frame. The A5 double pane and triple pane aluminum windows provide modern aesthetic and thermal performance."
            />
            <Card
              image={A7}
              imageTitle="Glo A7 Window Series"
              href="https://glowindows.com/product/a7-aluminum-triple-pane-windows/"
              series="A7"
              title="Triple Pane Aluminum Windows"
              content="An all aluminum frame with continuous insulation provides excellent durability and quality. The A7 triple pane aluminum windows achieve a greater level of energy performance and aesthetically clean architectural lines."
            />
            <Card
              image={CW}
              imageTitle="Glo CW Window Series"
              href="https://glowindows.com/product/curtain-wall-double-pane/"
              series="CW"
              title="Curtain Wall Double + Triple Pane Aluminum"
              content="Achieve eye-catching designs through innovative custom solutions with our Curtain Wall systems; available in both double and triple pane thermally-broken aluminum."
            />
          </CardWrapperDiv>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <CardWrapperDiv>
            <Card
              image={A5D}
              imageTitle="Glo A5 Door Series"
              href="https://glowindows.com/product/a5-aluminum-doors/"
              series="A5"
              title="Double Pane + Triple Pane Aluminum Doors"
              content="The A5 double pane and triple pane aluminum doors are the perfect union of cost effective efficiency and beauty. The sleek frame, thermal performance and European hardware is sure to be a great solution for an array of projects."
            />
            <Card
              image={A7D}
              imageTitle="Glo A7 Door Series"
              href="https://glowindows.com/product/a7-triple-pane-aluminum-entry-doors/"
              series="A7"
              title="Triple Pane Aluminum Entry Doors"
              content="The A7 triple pane aluminum doors are the FIRST Passive House Certified doors in the United States. Comprised of a larger thermal break, multiple air seals, argon gas and low-e glass: Redefining the aluminum door experience."
            />
            <Card
              image={LSD}
              imageTitle="Glo Lift & Slide Door Series"
              href="https://glowindows.com/product/lift-and-slide-door/"
              series="LS"
              title="Lift and Slide Doors"
              content="Our modern Lift and Slide doors establish a new paradigm of style, precision, and durability sure to make a statement in any setting. Designed with quality and purpose, the lift and slide door is custom crafted to meet a wide variety of functional and aesthetic requirements while also delivering excellent performance."
            />
            <Card
              image={PCD}
              imageTitle="Glo Postless Corner Door Series"
              href="https://glowindows.com/product/postless-corner-door/"
              series="PC"
              title="Postless Corner Doors"
              content="Highly customizable and inherently impressive, the Postless Corner Door exemplifies modern style and serves as a perfect complement to contemporary trends."
            />

          </CardWrapperDiv>
        </TabPanel>
      </ThemeProvider>
    </>
  );
}

const CardWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const HeadTextWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 2%;
`

const StyledLogo = styled.img`
  height: 120px;
  margin: 2%;

`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h2`
font-weight: 400;

`
