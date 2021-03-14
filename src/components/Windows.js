import React from 'react'
import styled from 'styled-components'
import Card from './WindowCard'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));


const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTabs: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'black',
      },
    },
  },
});


export default function WindowTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>   
        <StyledH4>Window Sales</StyledH4> 
        <p>T&T Mountain Builders is a full-service dealer</p>
      </div>
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
            <Tab label="Aluminum Windows" {...a11yProps(0)} />
            <Tab label="Aluminum Doors" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
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
            <Card
              image={DW}
              imageTitle="Glo DW Window Series"
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
        </CardWrapperDiv>
      </TabPanel>
      </div>
      </ThemeProvider>
    </>
  );
}


const StyledH4 = styled.h3`
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 400;
  margin: 20px;
`
const CardWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`