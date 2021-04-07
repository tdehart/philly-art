import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ArtistHeader from './ArtistHeader';
import ArtGallery from './ArtGallery';
import ArtMap from './ArtMap';
import { getById } from '../../utils/artists';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Artist() {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [artist, setArtist] = useState({
    name: '',
    art: [],
  });

  useEffect(() => {
    (async function () {
      setLoading(true);

      const data = await getById(id);

      if (data) {
        setArtist(data);
      }

      setLoading(false);
    })();
  }, [id]);

  if (loading)
    return (
      <Box textAlign="center" mt={2}>
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <ArtistHeader name={artist.name} art={artist.art} />
      <Container className={classes.cardGrid} maxWidth="md">
        <ArtGallery art={artist.art} />
        <ArtMap art={artist.art} />
      </Container>
    </>
  );
}
