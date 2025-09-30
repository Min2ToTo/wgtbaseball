import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/index.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '@/i18n/translations.ts';

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
