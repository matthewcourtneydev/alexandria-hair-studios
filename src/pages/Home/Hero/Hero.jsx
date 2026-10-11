
import { ArrowUpRight, ArrowDown } from 'lucide-react';

import heroImage from '../../../assets/images/hero_blonde_two.png';
import { site } from '../../../data/site';

import './Hero.css';

export default function Hero() {
  return (
    <section
      className="home-hero"
      aria-labelledby="hero-title"
    >
      <img
        className="home-hero__image"
        src={heroImage}
        alt="Editorial portrait featuring long, voluminous blonde hair"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      <div
        className="home-hero__overlay"
        aria-hidden="true"
      />

      <div className="home-hero__content page-container">
        <div className="home-hero__copy">
          <div className="home-hero__eyebrow">
            <span
              className="home-hero__eyebrow-line"
              aria-hidden="true"
            />
            CHARLOTTE, NORTH CAROLINA
          </div>

          <h1
            id="hero-title"
            className="home-hero__title"
          >
            ALEXANDRIA
            <span>HAIR STUDIOS</span>
          </h1>

          <p className="home-hero__subtitle">
            LUXURY COLOR
            <span aria-hidden="true">✦</span>
            EXTENSIONS
            <span aria-hidden="true">✦</span>
            CUSTOM HAIR
          </p>

          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero__button"
          >
            Book Your Appointment
            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
        </div>

        <div
          className="home-hero__side-text"
          aria-hidden="true"
        >
          <span>GOOD</span>
          <span>HAIR</span>
          <span>DAYS</span>
          <span>LIVE</span>
          <span>HERE.</span>

          <div className="home-hero__side-line" />
        </div>

        <a
          href="#home-intro"
          className="home-hero__scroll"
        >
          <ArrowDown
            size={15}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span>SCROLL TO EXPLORE</span>
        </a>
      </div>

      <div
        className="home-hero__index"
        aria-hidden="true"
      >
        AHS. — 001
      </div>
    </section>
  );
}
