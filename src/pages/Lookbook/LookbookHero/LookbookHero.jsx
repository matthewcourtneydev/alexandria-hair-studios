
import { ArrowDown } from 'lucide-react';

import lookbookHero from '../../../assets/images/lookbook-hero.png';
import './LookbookHero.css';

export default function LookbookHero() {
  return (
    <section
      className="lookbook-hero"
      aria-labelledby="lookbook-hero-title"
    >
      <div className="lookbook-hero__background" aria-hidden="true">
        <img
          src={lookbookHero}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="lookbook-hero__container page-container">
        <div className="lookbook-hero__content">
          <div className="lookbook-hero__eyebrow">
            <span className="lookbook-hero__eyebrow-line" />
            <span>THE AHS LOOKBOOK</span>
          </div>

          <h1
            className="lookbook-hero__title"
            id="lookbook-hero-title"
          >
            The Color
            <em>Collection.</em>
          </h1>

          <p className="lookbook-hero__description">
          Explore lived-in blondes, dimensional color, hair extensions, and personalized transformations by Alexandria Hair Studios, a Charlotte, NC hairstylist.
          </p>

          <a
            className="lookbook-hero__scroll"
            href="#lookbook-gallery"
          >
            <span>EXPLORE THE COLLECTION</span>
            <ArrowDown
              size={17}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <span className="lookbook-hero__signature" aria-hidden="true">
        ALEXANDRIA HAIR STUDIOS — CHARLOTTE, NC
      </span>
    </section>
  );
}
