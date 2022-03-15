import React, { useContext } from 'react';
import { Context as LinkContext } from '../context/LinksContext';

export const Links: React.FC = () => {
  const {
    state: { links },
  } = useContext(LinkContext);

  return (
    <>
      {links.map((link, i) => (
        <a key={i} href={link.original}>
          {link.shortened}
        </a>
      ))}
    </>
  );
};
