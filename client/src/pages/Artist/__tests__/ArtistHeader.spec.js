import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { artist } from '../../../utils/sample';
import ArtistHeader from '../ArtistHeader';

describe('ArtistHeader', () => {
  beforeEach(() => {
    const { debug } = render(<ArtistHeader name={artist.name} art={artist.art} />);
  });

  it('Shows arists name', () => {
    expect(screen.queryByText(/Joe Brenman/i)).not.toBeNull();
  });

  it('Displays how many art pieces artist has', () => {
    expect(screen.queryByText(/3 works of art/i)).not.toBeNull();
  });
});
