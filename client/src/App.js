import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [user, setUser] = useState();

  useEffect(() => {
    const tempUser = localStorage.getItem('philly-art-user');
    if (tempUser) {
      setUser(tempUser);
    } else {
      const tempUser = 'tom';
      localStorage.setItem('philly-art-user', tempUser);
      setUser(tempUser);
    }
  }, []);

  useEffect(() => {
    if (!user) return;

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
      });
  }, [user]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            philly-art
          </Typography>
          {user}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
