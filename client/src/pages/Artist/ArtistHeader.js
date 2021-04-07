import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const ArtistHeader = ({ name, art }) => (
  <Box pt={8}>
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {name}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        This artist has {art.length} {art.length === 1 ? 'work' : 'works'} of
        art in Philadelphia
      </Typography>
    </Container>
  </Box>
);

export default ArtistHeader;