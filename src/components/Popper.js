
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid grey',
    padding: theme.spacing(2),
    backgroundColor: "#efebe6",
  },
}));

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <StyledButton aria-describedby={id} type="button"  onClick={handleClick}>
        GET STARTED
      </StyledButton>
      <Popper id={id} open={open} anchorEl={anchorEl} placement={"left"} transition>
      {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>
              <h4>WE WANT TO HEAR ABOUT YOUR PROJECT</h4>
              <p>Reach out to us:</p>
              <a href="mailto:travis@tandtmountainbuilders.com">travis@tandtmountainbuilders.com</a>
            </div>
          </Fade>
        )}
      </Popper>
    </>
  );
}

const StyledButton = styled(Button)`
  width: 60%;
  background-color: #99D420!important;
  margin-right: 8%!important;
  transition: transform .4s!important;
  &:hover {
    transition: transform .4s;
    transform: scale(1.07);
  }

`