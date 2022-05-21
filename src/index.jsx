import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

const App = () => (
  <div className="container">
    <Header />
    <Navigation />
    <Outlet />
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
