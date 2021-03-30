
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#181818",
    color: "white",
    borderRadius: "4px",
    boxShadow: "5px 5px 7px black",
  },
}));

export default function SimplePopper(props) {
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
      <Popper id={id} open={open} anchorEl={anchorEl} placement={props.position} transition>
      {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>
              <CloseDiv>
               <FontAwesomeIcon icon={faTimesCircle} size="1x" color="lightgrey" onClick={handleClick} />
              </CloseDiv>
              <h4>WE WANT TO HEAR ABOUT YOUR PROJECT</h4>
              <p>Reach out to us:</p>
              <ContactA href="mailto:travis@tandtmountainbuilders.com">travis@tandtmountainbuilders.com</ContactA>
            </div>
          </Fade>
        )}
      </Popper>
    </>
  );
}

const StyledButton = styled(Button)`
  width: 160px;
  background-color: #99D420!important;
  transition: transform .4s!important;
  &:hover {
    transition: transform .4s;
    transform: scale(1.07);
  }
  
`

const ContactA = styled.a`
  color: rgb(158, 203, 40);
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
`

const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`