import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Provider from './Provider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

//test