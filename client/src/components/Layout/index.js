import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Layout({ username, children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink style={{ textDecoration: 'none', color: 'unset' }} to="/">
              philly-art
            </NavLink>
          </Typography>
          {username}
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </div>
  );
}
