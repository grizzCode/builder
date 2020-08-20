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
import MenuOpenIcon from '@material-ui/icons/MenuOpen';



export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
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
    <ThemeProvider theme={themeConfig}>
      <NavDiv>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick3}>
          <StyledMenuIcon />
        </Button>
        <Menu
          id="simple-menu-3"
          anchorEl={anchorEl3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          keepMounted
          open={open3}
          onClose={handleClose3}
        >
          <StyledMenuItem to="/" component={RouterLink}>
            Home
        </StyledMenuItem>
          <StyledMenuItem aria-controls="progress-menu" aria-haspopup="true" onClick={handleClick}>
            Current
        </StyledMenuItem>
          <Menu
            id="progress-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
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
          <StyledMenuItem aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick2}>
            Completed
        </StyledMenuItem>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={open2}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
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
          <StyledMenuItem component={RouterLink} to="/about">
            About
        </StyledMenuItem>
          {/* </StyledLink>
        {/* <StyledLink to="/method">
          <StyledButton>
            Method
        </StyledButton>
        </StyledLink> */}
          <StyledMenuItem component={RouterLink} to="/testimonials">
            Testimonials
        </StyledMenuItem>
          <StyledMenuItem component={RouterLink} to="/contact">
            Contact
        </StyledMenuItem>
          <StyledA href="https://coconstruct.com/app/skins/default/default.aspx">
            <StyledMenuItem>
              Client Login
          </StyledMenuItem>
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
        </Menu>
      </NavDiv>
    </ThemeProvider>
  );
}

const StyledMenuIcon = styled(MenuOpenIcon)`
  margin: auto;
  margin-top: 5px;
  font-size: 36px;
`

const NavDiv = styled.div`
  width: auto;
  height: 44px;
  background-color: #181818;
  text-align: right;
  position: absolute;
  right: 0;
  bottom: 0;
  -webkit-backface-visibility: hidden;
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
 
`
const StyledInstagram = styled(InstagramIcon)`
  color: white;
  margin-top: 2px;
`

