import React from 'react';

export const Home = () => {
  return (
    <section>
      <div className="canva bubble" id="canva">
        <h2>Welcome to Japanglish: Trip to Tokyo!</h2>
        <p>
          Japanglish: Trip to Tokyo is an educative visual novel that teaches
          Japanglish words to English speakers. This game was created by
          Veronika Rychlá (screenplay, React), Barbora Ševčíková (UX/UI design)
          and Nikol Schirová (character art style) using React, Pixi.js,
          royalty-free music and purchased background images.
        </p>
        <div className="view">
          <div className="day"></div>
          <div className="night"></div>
        </div>
      </div>
    </section>
  );
};
