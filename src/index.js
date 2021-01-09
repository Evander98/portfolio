import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components'
import * as color from './config/colors.jsx'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={color}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
