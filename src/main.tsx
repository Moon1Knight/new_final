import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Enable React concurrent features
const root = createRoot(document.getElementById("root")!);

// Preload critical resources
const preloadResources = () => {
  // Preload important images
  const imagesToPreload = [
    '/lovable-uploads/logo.png',
    // Add other critical images
  ];

  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Use requestIdleCallback for better performance
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    preloadResources();
  });
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    preloadResources();
  }, 0);
}
