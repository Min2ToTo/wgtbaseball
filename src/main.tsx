import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './i18n/translations.ts';
// It's a common practice to have a global CSS file, 
// even if it's just for Tailwind directives.
// Let's assume its existence for a complete setup.
// import './index.css'; 

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
