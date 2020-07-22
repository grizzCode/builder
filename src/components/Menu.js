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
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const themeObject = {
    // palette: {
    //   type: 'dark'
    // },
    typography: {
      fontFamily: ['Work Sans', 'sans-serif'],
    }
  }

  const themeConfig = createMuiTheme(themeObject)

  return (
    <NavDiv>
      <ThemeProvider theme={themeConfig}>
        <StyledButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          In-Progress
        </StyledButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Project 1</MenuItem>
          <MenuItem onClick={handleClose}>Project 2</MenuItem>
          <MenuItem onClick={handleClose}>Project 3</MenuItem>
          <MenuItem onClick={handleClose}>Project 4</MenuItem>
          <MenuItem onClick={handleClose}>Project 5</MenuItem>
          <MenuItem onClick={handleClose}>Project 6</MenuItem>
        </Menu>
        <StyledButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          Completed Projects
        </StyledButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Project 1</MenuItem>
          <MenuItem onClick={handleClose}>Project 2</MenuItem>
          <MenuItem onClick={handleClose}>Project 3</MenuItem>
          <MenuItem onClick={handleClose}>Project 4</MenuItem>
          <MenuItem onClick={handleClose}>Project 5</MenuItem>
          <MenuItem onClick={handleClose}>Project 6</MenuItem>
        </Menu>
        <StyledButton>
          <StyledLink to="/process">
            Process
          </StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink to="/about">
            About
          </StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink to="/green-building">
            Green Building
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
  }
`;

const NavDiv = styled.div`
  width: 50%;
  padding: 4px;
  background-color: white;
  text-align: right;
  margin-left: 50%
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit
`