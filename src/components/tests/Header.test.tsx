import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  it('renders the site name', () => {
    render(<Header />);
    const siteName = screen.getByRole('heading', { name: /multilink/i });
    expect(siteName).toBeInTheDocument();
  });
});
