import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import AuthContext from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  
    <AuthContext>
      <App />
    </AuthContext>
);
