import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { artists } from '../../../utils/sample';
import ArtistsList from '../ArtistsList';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}));

describe('ArtistsList', () => {
  it('Shows art name for each piece from sample data', () => {
    const history = createMemoryHistory();
    history.push('/');

    render(
      <Router history={history}>
        <ArtistsList artists={artists} />
      </Router>
    );

    artists.forEach(artist => {
      expect(screen.queryByText(artist.name)).not.toBeNull();
    });
    expect(screen.queryByText(/no artists found/i)).toBeNull();
  });
});

it('Shows placeholder when artists array is empty', () => {
  const history = createMemoryHistory();
  history.push('/');

  render(
    <Router history={history}>
      <ArtistsList artists={[]} />
    </Router>
  );

  expect(screen.queryByText(/no artists found/i)).not.toBeNull();
});
