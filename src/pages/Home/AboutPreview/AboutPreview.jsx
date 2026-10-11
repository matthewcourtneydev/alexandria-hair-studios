
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import portrait from '../../../assets/images/portrait.jpeg';
import './AboutPreview.css';

export default function AboutPreview() {
  return (
    <section
      className="about-preview"
      aria-labelledby="about-preview-title"
    >
      <div
        className="about-preview__texture"
        aria-hidden="true"
      />

      <div className="about-preview__container page-container">
        <div className="about-preview__portrait">
          <img
            src={portrait}
            alt="Alexandria, founder and hairstylist at Alexandria Hair Studios in Charlotte, North Carolina"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about-preview__content">
          <span className="about-preview__eyebrow">
            THE PERSON BEHIND THE CHAIR
          </span>

          <h2 id="about-preview-title">
            Meet <em>Alexandria.</em>
          </h2>

          <p className="about-preview__description">
            A love for beautiful hair, passed down through
            generations. Today, Alexandria brings that passion
            to her Charlotte studio, creating effortless,
            lived-in color and genuine connections along the way.
          </p>

          <Link
            to="/about"
            className="about-preview__link"
          >
            Discover Her Story

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
