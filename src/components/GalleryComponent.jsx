import React, { useState, useEffect } from 'react';

export const GalleryComponent = ({ panels }) => {
  const [gallery, setGallery] = useState(panels);
  useEffect(() => {
    const firstKey = Object.keys(panels)[0];
    setGallery({
      ...panels,
      [firstKey]: { imageUrl: panels[firstKey].imageUrl, isActive: true },
    });
  }, []);

  return (
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
  );
};
