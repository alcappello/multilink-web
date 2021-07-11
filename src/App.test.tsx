import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

it('renders a text input for entering a link', () => {
  render(<App />);
  const linkElement = screen.getByRole('textbox', { name: /add link/i });
  expect(linkElement).toBeInTheDocument();
});
