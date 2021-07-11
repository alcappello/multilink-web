import React from 'react';
import 'bulma/css/bulma.min.css';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
