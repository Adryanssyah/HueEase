import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import AlertProvider from './context/AlertContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <BrowserRouter>
               <Theme>
                    <AlertProvider>
                         <App />
                    </AlertProvider>
               </Theme>
          </BrowserRouter>
     </React.StrictMode>
);
