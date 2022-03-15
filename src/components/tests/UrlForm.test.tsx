import React from 'react';
import { render, screen } from '@testing-library/react';
import { UrlForm } from '../UrlForm';

describe('UrlForm', () => {
  it('renders a text input and a button for entering a link', () => {
    render(<UrlForm />);
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /add link/i });
    expect(textbox).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
