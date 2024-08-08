import React from 'react';
import createRoot from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();



