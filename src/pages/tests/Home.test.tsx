import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from '../Home';
import { Provider as LinksProvider, State } from '../../context/LinksContext';

const contextualRender = (ui: JSX.Element, state?: State) => {
  return render(<LinksProvider injectedState={state}>{ui}</LinksProvider>);
};

describe('Home', () => {
  it('adds a link to the list', async () => {
    contextualRender(<Home />);
    let link = screen.queryByRole('link');
    expect(link).not.toBeInTheDocument();

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'www.test.com');
    screen.getByRole('button', { name: /add link/i }).click();

    link = await screen.findByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining('http'));
    expect(input).toHaveValue('');
  });
});
