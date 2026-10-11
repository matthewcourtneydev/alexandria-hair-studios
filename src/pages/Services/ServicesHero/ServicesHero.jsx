import { ArrowDown, ArrowUpRight } from 'lucide-react';

import servicesHero from '../../../assets/images/services-hero.png';

import './ServicesHero.css';

export default function ServicesHero() {
  const scrollToServices = () => {
    const serviceMenu = document.getElementById('service-menu');

    if (!serviceMenu) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    serviceMenu.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      className="services-hero"
      aria-labelledby="services-hero-title"
    >
      {/* Background photograph */}
      <div className="services-hero__image" aria-hidden="true">
        <img
          src={servicesHero}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Main content */}
      <div className="services-hero__container">
        <div className="services-hero__content">
          <div className="services-hero__eyebrow">
            <span
              className="services-hero__eyebrow-line"
              aria-hidden="true"
            />

            <span>THE SERVICE EXPERIENCE</span>
          </div>

          <h1
            id="services-hero-title"
            className="services-hero__title"
          >
            Beautiful hair,
            <em>thoughtfully done.</em>
          </h1>

          <p className="services-hero__description">
            Personalized color, extensions, and healthy hair.
            Thoughtfully tailored to you, your style, and your
            everyday life.
          </p>

          <button
            type="button"
            className="services-hero__button"
            onClick={scrollToServices}
          >
            <span>EXPLORE SERVICES</span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Bottom scroll prompt */}
        <button
          type="button"
          className="services-hero__scroll"
          onClick={scrollToServices}
          aria-label="Scroll to the service menu"
        >
          <ArrowDown
            size={17}
            strokeWidth={1.4}
            aria-hidden="true"
          />

          <span>SCROLL TO EXPLORE</span>
        </button>

        {/* Subtle photo-side signature */}
        <div
          className="services-hero__signature"
          aria-hidden="true"
        >
          <span>ALEXANDRIA HAIR STUDIOS</span>
          <span>CHARLOTTE, NORTH CAROLINA</span>
        </div>
      </div>
    </section>
  );
}