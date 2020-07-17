import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

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
    palette: {
      type: 'dark'
    }
  }

  const themeConfig = createMuiTheme(themeObject)

  return (
    <NavDiv>
      <ThemeProvider theme={themeConfig}>
        <StyledButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          Projects ^
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
          Process ^
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
      </ThemeProvider>
    </NavDiv>
  );
}

const StyledButton = styled(Button)`
  &&& {
    font-family: 'Work Sans', sans-serif;
    color: white;
    margin-right: 20px;
  }
`;

const NavDiv = styled.div`
  width: 75%;
  padding: 8px;
  background-color: black;
  position: fixed;
  bottom: 0;
  left: 0;

`