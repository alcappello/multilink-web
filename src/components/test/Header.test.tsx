import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

it('renders the site name', () => {
  render(<Header />);
  screen.logTestingPlaygroundURL();
  const siteName = screen.getByRole('heading', { name: /multilink/i });
  expect(siteName).toBeInTheDocument();
});
