import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { Router, Link, Switch, Route } from 'react-router-dom';
import {Foods} from '../../App';
import {Wrapper} from './drawer.style';
import { Button } from '@material-ui/core';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import { createBrowserHistory } from 'history';

import Random from '../random/Random';

const drawerWidth = 240;
const history = createBrowserHistory();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1)
    },
    //using
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    }
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  food: Foods;
}

export const ResponsiveDrawer: React.FC<Props> = ({window, food}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Router history={history}>
      <div>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              {/* HOMEICON */}
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"}/>
          </ListItem>
        </Link>
        <Link to="/random" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              {/* HOMEICON */}
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Random Food"}/>
          </ListItem>
        </Link>
        <Switch>
          <Route exact path="/random" component={Random} />
        </Switch>
      </div>  
    </Router>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Thai Best Food!!!
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Wrapper>
        <img src={food.imageData} alt={food.foodName} />
    <div>
        <h3>Food Name: {food.foodName}</h3>
        <p>Liked: {food.liked}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
        >
          <FavoriteTwoToneIcon />
        </Button>
    </div>
    </Wrapper>
      </main>
    </div>
  );
}
