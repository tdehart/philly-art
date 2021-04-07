import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import ClearIcon from '@material-ui/icons/Clear';
import ArtistsList from './ArtistsList';
import { getAll } from '../../utils/artists';

const PAGE_SIZE = 10;

export default function Artists() {
  const [loading, setLoading] = useState(true);
  const [filterInput, setFilterInput] = useState('');
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [page, setPage] = React.useState(1);

  const handlePageChange = (event, value) => setPage(value);
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
      const data = await getAll();

      if (data) {
        setArtists(data.list);
        setFilteredArtists(data.list);
      }

      setLoading(false);
    })();
  }, []);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageCount = Math.ceil(filteredArtists.length / PAGE_SIZE);

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
      </Box>
      <Container maxWidth="xs">
        <TextField
          id="filter-artist"
          fullWidth
          label="Filter by name"
          placeholder="Start typing..."
          disabled={loading}
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
        {loading ? (
          <Box textAlign="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <ArtistsList artists={filteredArtists.slice(start, end)} />
            {pageCount > 0 && (
              <Box mt={2}>
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={handlePageChange}
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </React.Fragment>
  );
}
