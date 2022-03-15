import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider as LinksProvider, State } from '../../context/LinksContext';
import { Links } from '../Links';

const contextualRender = (ui: JSX.Element, state?: State) => {
  return render(<LinksProvider injectedState={state}>{ui}</LinksProvider>);
};

describe('Links', () => {
  it('renders a list of links', () => {
    const initialState = {
      links: [
        { original: 'pippo', shortened: 'pip' },
        { original: 'pollo', shortened: 'pol' },
      ],
    };
    contextualRender(<Links />, initialState);

    const links = screen.queryAllByRole('link');
    expect(links).toHaveLength(2);
  });
});
