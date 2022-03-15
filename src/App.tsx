import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Provider as LinksProvider } from './context/LinksContext';

export const App: React.FC = () => (
  <>
    <Header />
    <LinksProvider>
      <Home />
    </LinksProvider>
  </>
);
