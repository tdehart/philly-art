import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { artist } from '../../../utils/sample';
import ArtMap from '../ArtMap';

describe('ArtMap', () => {
  beforeEach(() => {
    const { debug } = render(<ArtMap art={artist.art} />);
  });

  it('renders the map', () => {
    expect(screen.queryByText(/OpenStreetMap/i)).not.toBeNull();
  });

  it('Displays markers with alt text', () => {
    expect(screen.getByAltText(/Taller Puertorriqueno Mosaic/i)).not.toBeNull();
    expect(screen.getByAltText(/Doorways to Peace/i)).not.toBeNull();
    expect(screen.getByAltText(/Church Stop Reflection/i)).not.toBeNull();
  });
});
