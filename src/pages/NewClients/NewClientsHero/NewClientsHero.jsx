
import { ArrowUpRight, ArrowDown } from 'lucide-react';

import heroImage from '../../../assets/images/new-client-hero.png';

import './NewClientsHero.css';

export default function NewClientsHero() {
  return (
    <section
      className="new-clients-hero"
      aria-labelledby="new-clients-hero-title"
    >
      <div className="new-clients-hero__background">
        <img
          src={heroImage}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="new-clients-hero__inner page-container">
        <div className="new-clients-hero__content">
          <span className="new-clients-hero__eyebrow">
            FIRST TIME HERE?
          </span>

          <h1
            className="new-clients-hero__title"
            id="new-clients-hero-title"
          >
            Your best hair
            <span>starts here.</span>
          </h1>

          <p className="new-clients-hero__subtitle">
            Consider this your invitation to great hair.
          </p>

          <p className="new-clients-hero__description">
            Whether you're looking for a subtle change or a
            full transformation, you're in the right place.
            I'm here to make the process easy, enjoyable,
            and tailored to you.
          </p>

          <a
            className="new-clients-hero__button"
            href="#new-clients-booking"
          >
            BOOK YOUR APPOINTMENT
            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
        </div>

        <a
          className="new-clients-hero__scroll"
          href="#new-clients-intro"
        >
          <ArrowDown
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          SCROLL TO EXPLORE
        </a>

        <div className="new-clients-hero__signature">
          <span>ALEXANDRIA HAIR STUDIOS</span>
          <span>CHARLOTTE, NORTH CAROLINA</span>
        </div>
      </div>
    </section>
  );
}
