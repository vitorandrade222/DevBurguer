import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';

import AppProvider from './hooks'
import { Router } from './routes';
import GlobalStyles from './styles/GlobalStyles.js';
import stripePromise from './config/stripeConfig.js'
import { standardTheme } from './styles/themes/standard.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer theme='dark' autoClose={2000} />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
