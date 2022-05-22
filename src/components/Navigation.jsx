import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <section className="telo">
      <section>
        <nav className="navbar navbar-expand-lg bg-light" id="navigace">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
                <Link to="visualnovel" className="nav-link">
                  Visual novel
                </Link>
                <Link to="japanglish" className="nav-link">
                  Japanglish
                </Link>
                <Link to="ourgame" className="nav-link">
                  Our game
                </Link>
                <Link to="gallery" className="nav-link">
                  Gallery
                </Link>
                <Link to="ourteam" className="nav-link">
                  Our team
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </section>
  );
};
