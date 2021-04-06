import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    maxHeight: 400,
    marginTop: theme.spacing(2),
  },
}));

export default function ArtistsList({ artists, total }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <List component="nav" aria-label="artists">
          {artists.length === 0 && (
            <ListItem>
              <ListItemText primary="No artists found" />
            </ListItem>
          )}
          {artists.map((artist, idx) => (
            <ListItem button key={`${artist.name}-${idx}`}>
              <ListItemText primary={artist.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box p={2}>{`${artists.length} of ${total} results`}</Box>
    </div>
  );
}
