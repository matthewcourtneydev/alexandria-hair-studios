
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../../../data/site';
import './AboutCTA.css';

export default function AboutCTA({ image = null }) {
  return (
    <section
      className="about-cta"
      aria-labelledby="about-cta-title"
    >
      <div className="about-cta__background" aria-hidden="true">
        {image && <img src={image} alt="" loading="lazy" />}
      </div>

      <div className="about-cta__overlay" aria-hidden="true" />

      <div className="about-cta__container">
        <div className="about-cta__content">
          <span className="about-cta__eyebrow">
            LET'S MAKE SOMETHING BEAUTIFUL
          </span>

          <h2 className="about-cta__title" id="about-cta-title">
            Your hair story
            <span>starts here.</span>
          </h2>

          <p className="about-cta__description">
            Whether you're ready for a fresh look or just
            getting to know me, I'd love to be part of your
            next hair chapter.
          </p>

          <div className="about-cta__actions">
            <a
              className="about-cta__button"
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK YOUR APPOINTMENT
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </a>

            <Link className="about-cta__secondary" to="/services">
              EXPLORE SERVICES
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <span className="about-cta__watermark" aria-hidden="true">
          AHS
        </span>
      </div>
    </section>
  );
}
