import { ArrowDown } from 'lucide-react';

import aboutHero from '../../../assets/images/about-hero.png';

import './AboutHero.css';

export default function AboutHero() {
  return (
    <section
      className="about-hero"
      aria-labelledby="about-hero-title"
      style={{
        '--about-hero-image': `url("${aboutHero}")`,
      }}
    >
      <div className="about-hero__container page-container">
        <div className="about-hero__content">
          <span className="about-hero__eyebrow">
            ABOUT ALEXANDRIA HAIR STUDIOS
          </span>

          <h1
            className="about-hero__title"
            id="about-hero-title"
          >
            More than
            <em>just great hair.</em>
          </h1>

          <p className="about-hero__description">
            Beautiful hair is only part of the story.
            Get to know the stylist behind Alexandria
            Hair Studios, where personalized color,
            genuine connections, and a little bit of
            magic come together in Charlotte, NC.
          </p>

          <a
            className="about-hero__link"
            href="#meet-alex"
          >
            MEET ALEX

            <ArrowDown
              size={17}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
        </div>

        <span
          className="about-hero__location"
          aria-hidden="true"
        >
          ALEXANDRIA HAIR STUDIOS — CHARLOTTE, NC
        </span>
      </div>
    </section>
  );
}