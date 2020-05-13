import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import filmPic from '../Assets/filmLogo.png';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
  scrollButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(4),
  },
}));
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });


const handleClick = (event) => {
  const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

return (
  <Zoom in={trigger}>
    <div onClick={handleClick} role="presentation" className={classes.scrollButton}>
      {children}
    </div>
  </Zoom>
);
}


const Sitebar = (props) => {
  const classes = useStyles();
      
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar id="back-to-top-anchor">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img id="filmPic" src={filmPic} alt="logo" height='60px'/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            CINEMA REVIEWS
          </Typography>
           { props.token ? 
           <Button id="logOut" variant="contained" onClick={props.clickLogout}>LOGOUT</Button>
           : null }
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
      <Fab color="primary" size="large" aria-label="scroll back to top">
        <KeyboardArrowUpIcon/>
      </Fab>
      </ScrollTop>
    </div>
  );
}



export default Sitebar;