import React, { useState } from 'react';
import '../style_gallery.css';
import { GalleryComponent } from '../components/GalleryComponent';

const firstBatch = {
  1: { imageUrl: '/gallery/background01.jpg', isActive: false },
  2: { imageUrl: '/gallery/background02.jpg', isActive: false },
  3: { imageUrl: '/gallery/background03.jpg', isActive: false },
  4: { imageUrl: '/gallery/background04.jpg', isActive: false },
};

const secondBatch = {
  1: { imageUrl: '/gallery/background05.jpg', isActive: false },
  2: { imageUrl: '/gallery/background06.jpg', isActive: false },
};

export const Gallery = () => {
  return (
    <section>
      <div className="galerie bubble" id="galerie">
        <h2> Galerie</h2>
        <GalleryComponent panels={firstBatch} />
        <GalleryComponent panels={secondBatch} />
      </div>
    </section>
  );
};
