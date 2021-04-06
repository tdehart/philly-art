import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ArtMap from './ArtMap';
import { getById } from '../../utils/artists';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Artist() {
  let { id } = useParams();
  const classes = useStyles();
  const [artist, setArtist] = useState({
    name: '',
    art: [],
  });

  useEffect(() => {
    (async function () {
      const data = await getById(id);

      if (data) {
        setArtist(data);
      }
    })();
  }, [id]);

  return (
    <>
      <Box pt={8}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {artist.name}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            This artist has {artist.art.length}{' '}
            {artist.art.length === 1 ? 'work' : 'works'} of art in Philadelphia
          </Typography>
        </Container>
      </Box>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {artist.art.map(art => (
            <Grid item key={art.title.display} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={art.pictures[0].large.url}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {art.title.display}
                  </Typography>
                  <Typography color="textSecondary">
                    {art.years[0].year}
                  </Typography>
                  <Typography>Located on {art.location.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {artist.art.length > 0 && (
          <Box mt={8}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Map
            </Typography>
            <ArtMap art={artist.art} />
          </Box>
        )}
      </Container>
    </>
  );
}
