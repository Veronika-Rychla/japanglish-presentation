import React from 'react';
import '../style.css';

export const OurTeam = () => {
  return (
    <section>
      <div className="canva bubble" id="canva">
        <h2>Our team</h2>
        <div className="veronika bubble"></div>
        <h3>Veronika Rychlá</h3>
        <p>Screenplay</p>
        <p>React and JavaScript</p>
        <div className='barca bubble'></div>
        <h3>Barbora Ševčíková</h3>
        <p>UX/UI design</p>
        <p>HTML and CSS</p>
        <div className="niki bubble"></div>
        <h3>Nikol Schirová</h3>
        <p>character art style</p>
      </div>
    </section>
  );
};
