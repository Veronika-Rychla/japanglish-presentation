import React, { useState } from 'react';
import '../style_gallery.css';

const panels = {
  1: { imageUrl: '/gallery/background01.jpg', isActive: false },
  2: { imageUrl: '/gallery/background02.jpg', isActive: false },
  3: { imageUrl: '/gallery/background03.jpg', isActive: false },
  4: { imageUrl: '/gallery/background04.jpg', isActive: false },
  5: { imageUrl: '/gallery/background05.jpg', isActive: false },
  6: { imageUrl: '/gallery/background06.jpg', isActive: false },
};

export const Gallery = () => {
  const [gallery, setGallery] = useState(panels);

  return (
    <section>
      <div className="galerie bubble" id="galerie">
        <h2> Galerie</h2>
        <div className="container">
          {Object.keys(panels).map((index) => (
            <div
              className={gallery[index].isActive ? 'panel active' : 'panel'}
              style={{ backgroundImage: `url(${gallery[index].imageUrl})` }}
              key={index}
              onClick={() => {
                setGallery({
                  ...panels,
                  [index]: { imageUrl: panels[index].imageUrl, isActive: true },
                });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
