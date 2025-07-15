// Entry point for the React app. Renders the main App component.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 