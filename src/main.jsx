import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CheckProvider } from './context/check.context.jsx';
import { DatasProvider } from './context/data.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CheckProvider>
      <DatasProvider>
        <App />
      </DatasProvider>
    </CheckProvider>
  </React.StrictMode>
);
