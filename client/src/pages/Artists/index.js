import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ArtistsList from './ArtistsList';
import getArtists from '../../utils/art';

export default function Artists() {
  const [filterInput, setFilterInput] = useState('');
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);

  const onChange = event => setFilterInput(event.target.value);
  const clearFilter = () => setFilterInput('');

  useEffect(() => {
    const filteredArtists = artists.filter(artist => {
      return artist.name.toLowerCase().includes(filterInput.toLowerCase());
    });

    setFilteredArtists(filteredArtists);
  }, [artists, filterInput]);

  useEffect(() => {
    (async function () {
      const data = await getArtists();

      if (data) {
        setArtists(data.list);
        setFilteredArtists(data.list);
      }
    })();
  }, []);

  return (
    <React.Fragment>
      <Box pt={4} pb={2}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Browse public art in Philadelphia
          </Typography>
        </Container>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              All Artists
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" disabled>
              Favorites
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Container maxWidth="xs">
        <TextField
          id="fiter-artist"
          fullWidth
          label="Filter by name"
          placeholder="Start typing..."
          value={filterInput}
          onChange={onChange}
          variant="outlined"
          InputProps={{
            endAdornment:
              filterInput.length > 0 ? (
                <InputAdornment position="end">
                  <IconButton aria-label="clear filter" onClick={clearFilter}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ) : null,
          }}
        />
        <ArtistsList artists={filteredArtists.slice(0, 8)} total={artists.length} />
      </Container>
    </React.Fragment>
  );
}
