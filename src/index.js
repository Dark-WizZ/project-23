import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextprovider } from './context/AuthContext';
import { RestContextProvider } from './context/RestContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextprovider>
    <RestContextProvider>
    <App />
    </RestContextProvider>
    </AuthContextprovider>
  </React.StrictMode>
);
