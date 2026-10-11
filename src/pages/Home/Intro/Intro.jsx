
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import leafTexture from '../../../assets/textures/leaf-texture.png';

import './Intro.css';

export default function Intro() {
  return (
    <section
      id="home-intro"
      className="home-intro"
      aria-labelledby="home-intro-title"
      style={{
        '--home-intro-image': `url("${leafTexture}")`,
      }}
    >
      <div
        className="home-intro__background"
        aria-hidden="true"
      />

      <div className="home-intro__container page-container">
        <div className="home-intro__content">
          <span className="home-intro__eyebrow">
            WELCOME TO ALEXANDRIA HAIR STUDIOS
          </span>

          <h2
            id="home-intro-title"
            className="home-intro__title"
          >
            Great hair is
            <em>always in style.</em>
          </h2>

          <p className="home-intro__description">
            Beautiful hair should feel like you.
            Discover personalized blonding, dimensional
            color, and effortless styling at Alexandria
            Hair Studios in Charlotte, North Carolina.
          </p>

          <Link
            to="/services"
            className="home-intro__link"
          >
            Explore Our Services

            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
