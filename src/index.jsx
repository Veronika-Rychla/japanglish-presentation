import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

import { Japanglish } from './pages/Japanglish';
import { OurGame } from './pages/OurGame';
import { OurTeam } from './pages/OurTeam';
import { Gallery } from './pages/Gallery';
import { GraphicNovel } from './pages/GraphicNovel';
import { Home } from './pages/Home';

const App = () => (
  <>
    <Header />
    <Navigation />
    <Outlet />

    <Footer />
  </>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="graphicnovel" element={<GraphicNovel />} />
        <Route path="japanglish" element={<Japanglish />} />
        <Route path="ourgame" element={<OurGame />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="ourteam" element={<OurTeam />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
