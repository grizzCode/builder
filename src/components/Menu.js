import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'



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
    // palette: {
    //   type: 'dark'
    // },
    typography: {
      fontFamily: ['Work Sans', 'sans-serif'],
      fontWeight: 300,
    }
  }

  const themeConfig = createMuiTheme(themeObject)

  return (
    <NavDiv>
      <ThemeProvider theme={themeConfig}>
        <StyledButton>
          <StyledLink to="/">
            Home
          </StyledLink>
        </StyledButton>
        <StyledButton aria-controls="progress-menu" aria-haspopup="true" onClick={handleClick}>
          In-Progress
        </StyledButton>
        <Menu
          id="progress-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>
            <StyledLink to="/robertson">
              Robertson
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
           <StyledLink to="/pineridge">
              Pineridge
            </StyledLink>
          </MenuItem>
        </Menu>
        <StyledButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick2}>
          Completed Projects
        </StyledButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl2}
          keepMounted
          open={open2}
          onClose={handleClose2}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose2}>
            <StyledLink to="/canyon_dr">
                Canyon Dr
            </StyledLink>
          </MenuItem>
          {/* <MenuItem onClick={handleClose2}>Project 2</MenuItem>
          <MenuItem onClick={handleClose2}>Project 3</MenuItem>
          <MenuItem onClick={handleClose2}>Project 4</MenuItem>
          <MenuItem onClick={handleClose2}>Project 5</MenuItem>
          <MenuItem onClick={handleClose2}>Project 6</MenuItem> */}
        </Menu>
        <StyledButton>
          <StyledLink to="/about">
            About
          </StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink to="/testimonials">
            Testimonials
          </StyledLink>
        </StyledButton>
      </ThemeProvider>
    </NavDiv>
  );
}

const StyledButton = styled(Button)`
  &&& {
    color: black;
    margin-right: 20px;
    font-size: 13px;
  }
`;

const NavDiv = styled.div`
  width: 75%;
  padding: 4px;
  background-color: white;
  text-align: right;
  margin-left: 25%
`

const StyledLink = styled(Link)`
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-family: Work Sans, sans-serif;
  font-size: 13px;
`
