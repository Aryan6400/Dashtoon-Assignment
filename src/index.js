import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ImageProvider from './context/ImageContext';
import ThemeProvider from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <ImageProvider>
      <App />
    </ImageProvider>
  </ThemeProvider>
);
