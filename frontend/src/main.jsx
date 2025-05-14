import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './Context/AppContext.jsx';
import { AuthProvider } from './Context/AuthContext'
import AdminContextProvider from './Context/AdminContext.jsx';
import BeauticianContextProvider from './Context/BeauticianContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      {/* <BrowserRouter> */}
      <AuthProvider> 
        <AdminContextProvider>
          <BeauticianContextProvider>
          <AppContextProvider>
        <App />
        </AppContextProvider>
        </BeauticianContextProvider>
        </AdminContextProvider>
        </AuthProvider>
       
      {/* </BrowserRouter> */}
   
  </StrictMode>
);