import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import HouzzIcon from '../images/houzz.png'
import InstagramIcon from '@material-ui/icons/Instagram';



export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const themeObject = {
    palette: {
      type: 'dark'
    },
    typography: {
      fontFamily: ['Work Sans', 'sans-serif !important'],
      fontWeight: 300,
    }
  }

  const themeConfig = createMuiTheme(themeObject)

  return (
    <NavDiv>
      <ThemeProvider theme={themeConfig}>
        <StyledButton to="/" component={RouterLink}>
          Home
        </StyledButton>
        <StyledButton aria-controls="progress-menu" aria-haspopup="true" onClick={handleClick}>
          Current
        </StyledButton>
        <Menu
          id="progress-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <StyledMenuItem onClick={handleClose} component={RouterLink} to="/robertson">
            Robertson
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose} component={RouterLink} to="/pineridge">
            Pineridge
          </StyledMenuItem>
        </Menu>
        <StyledButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick2}>
          Completed
        </StyledButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl2}
          keepMounted
          open={open2}
          onClose={handleClose2}
          TransitionComponent={Fade}
        >
          <StyledMenuItem onClick={handleClose2} component={RouterLink} to="/stagecoach">
              Stagecoach
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose2} component={RouterLink} to="/meadows">
              Meadows Passive House
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose2} component={RouterLink} to="/interlaken">
              Interlaken
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose2} component={RouterLink} to="/canyon">
              Pineridge
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose2} component={RouterLink} to="/sterlingwood">
              Sterlingwood
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose2} component={RouterLink} to="/hitching_post">
              Hitching Post
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose2} component={RouterLink} to="/maple">
              Maple Passive Haus
          </StyledMenuItem>
        </Menu>
        <StyledButton component={RouterLink} to="/about">
            About
        </StyledButton>
        {/* </StyledLink> */}
        {/* <StyledLink to="/method">
          <StyledButton>
            Method
        </StyledButton>
        </StyledLink> */}
        <StyledButton component={RouterLink} to="/testimonials">
          Testimonials
        </StyledButton>
        <StyledButton component={RouterLink} to="/contact">
          Contact
        </StyledButton>
        <StyledA href="https://coconstruct.com/app/skins/default/default.aspx">
          <StyledButton>
            Client Login
          </StyledButton>
        </StyledA>
        <Button>
          <a href="https://www.instagram.com/tandttravis/?hl=en">
            <StyledInstagram />
          </a>
        </Button>
        <Button>
          <a href="https://www.houzz.com/professionals/general-contractors/tandt-mountain-builders-pfvwus-pf~629659661">
            <LogoImg src={HouzzIcon} width="20" height="20" />
          </a>
        </Button>
      </ThemeProvider>
    </NavDiv>
  );
}


const StyledButton = styled(Button)`
  &&& {
    color: white;
    margin-right: 6px;
    margin-left: 6px;
    font-size: 13px;
    &:hover {
      transition: transform .4s;
      transform: scale(1.1);
    }
  }
`;

const NavDiv = styled.div`
  width: auto;
  height: 44px;
  background-color: #181818;
  text-align: right;
  position: fixed;
  bottom: 0;
  right: 0;
  // border-radius: 4px 0px 0px 0px;
`

const StyledMenuItem = styled(MenuItem)`
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-family: Work Sans, sans-serif;
  font-size: 13px !important;
  margin-bottom: 3px;
  width: 100%;
`
const StyledA = styled.a`
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-family: Work Sans, sans-serif;
  font-size: 13px;
  margin-bottom: 3px;
`

const LogoImg = styled.img`
margin-top: 2px;
  &:hover {
    transition: transform .2s;
    transform: scale(1.4);
  }
`
const StyledInstagram = styled(InstagramIcon)`
  color: white;
  margin-top: 2px;
  &:hover {
    transition: transform .2s;
    transform: scale(1.4);
  }
`

