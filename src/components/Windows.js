import React from 'react'
import styled from 'styled-components'
import Card from './WindowCard'
import A5 from '../images/Glo_Img/A5 window.jpg'
import A7 from '../images/Glo_Img/A7 window.jpg'
import CW from '../images/Glo_Img/CW curtain wall window.jpg'
import DW from '../images/Glo_Img/DW air lux descending window .jpg'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div>
    <StyledText>
        <StyledH4>Window Sales</StyledH4>
      </StyledText>
      <p>T&T Mountain Builders is a full-service dealer</p>
    </div>
    <div className={classes.root}>
      <StyledAppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <StyledTab label="Aluminum Windows" {...a11yProps(0)} />
          <StyledTab label="Aluminum Doors" {...a11yProps(1)} />
        </Tabs>
      </StyledAppBar>
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
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
   </>
  );
}

const StyledText = styled.div`

`

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
const StyledTab = styled(Tab)`
  background-color: black;
`

const StyledAppBar = styled(AppBar)`
  background-color: black;
`