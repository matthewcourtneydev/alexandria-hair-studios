
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import hairstylistAtWork from '../../../assets/images/hairstylist-at-work.png';
import hairClose from '../../../assets/images/hair-close.png';

import './ServicesIntro.css';

export default function ServicesIntro() {
  return (
    <section
      className="services-intro"
      aria-labelledby="services-intro-title"
    >
      <div className="services-intro__container">
        <div className="services-intro__visual">
          <div className="services-intro__image-main">
            <img
              src={hairstylistAtWork}
              alt="Hairstylist carefully applying color to highlighted hair using a tint brush and foils"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="services-intro__image-detail">
            <img
              src={hairClose}
              alt="Close-up of dimensional blonde and brunette hair with soft, glossy waves"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="services-intro__image-caption">
            <span>THE ART OF GOOD HAIR</span>
            <span>CHARLOTTE, NC</span>
          </div>
        </div>

        <div className="services-intro__content">
          <div className="services-intro__eyebrow">
            <span className="services-intro__eyebrow-line" />
            <span>THE AHS APPROACH</span>
          </div>

          <h2
            id="services-intro-title"
            className="services-intro__title"
          >
            Your hair,
            <span>your way.</span>
          </h2>

          <div className="services-intro__copy">
            <p>
              Great hair is never one-size-fits-all. Every
              appointment begins with understanding your
              hair, your goals, and the way you live.
            </p>

            <p>
              From dimensional color and lived-in blondes
              to extensions and finishing, every detail
              is considered to create beautiful, wearable
              results that feel like you.
            </p>
          </div>

          <Link
            to="/about"
            className="services-intro__link"
          >
            <span>MEET ALEX</span>
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
