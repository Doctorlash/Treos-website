import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';// Include global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
    <App />
    </React.StrictMode>,
  </Router>
 
);
