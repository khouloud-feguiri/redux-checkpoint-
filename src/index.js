import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import store from './JS/Store';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <provider store={store}>
    <App />
    </provider>
  </React.StrictMode>
);

