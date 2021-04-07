import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { artist } from '../../../utils/sample';
import ArtGallery from '../ArtGallery';

describe('ArtGallery', () => {
  beforeEach(() => {
    const { debug } = render(<ArtGallery art={artist.art} />);
  });

  it('Shows art name for each piece from sample data', () => {
    expect(screen.queryByText(/Taller Puertorriqueno Mosaic/i)).not.toBeNull();
    expect(screen.queryByText(/Doorways to Peace/i)).not.toBeNull();
    expect(screen.queryByText(/Church Stop Reflection/i)).not.toBeNull();
  });
});
