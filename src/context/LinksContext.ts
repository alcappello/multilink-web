import { Action, createDataContext } from './createDataContext';
import { Dispatch } from 'react';

export interface LinkStruct {
  original: string;
  shortened: string;
}

export interface State {
  links: LinkStruct[];
}

const linksReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add':
      return { ...state, links: [...state.links, action.payload.newLink] };
    default:
      return state;
  }
};

const addLink = (dispatch: Dispatch<Action>) => (link: string) => {
  if (!link.includes('://')) {
    link = `https://${link}`;
  }
  const newLink = { original: link, shortened: 'short.er' };
  dispatch({ type: 'add', payload: { newLink } });
};

export const { Provider, Context } = createDataContext(linksReducer, { addLink }, { links: [] });
