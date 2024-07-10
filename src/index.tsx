import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  // BrowserRouter,
  // Routes,
  // Route,
  HashRouter
} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
