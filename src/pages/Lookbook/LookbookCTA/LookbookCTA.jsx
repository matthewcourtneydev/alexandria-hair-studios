
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../../../data/site';

import './LookbookCTA.css';

export default function LookbookCTA({ image = null }) {
  return (
    <section
      className="lookbook-cta"
      aria-labelledby="lookbook-cta-title"
    >
      <div className="lookbook-cta__container">
        <div className="lookbook-cta__content">
          <span className="lookbook-cta__eyebrow">
            YOUR NEXT LOOK AWAITS
          </span>

          <h2
            className="lookbook-cta__title"
            id="lookbook-cta-title"
          >
            Inspired by
            <span>what you see?</span>
          </h2>

          <p className="lookbook-cta__description">
            Let's turn your inspiration into something
            uniquely yours. Whether you're dreaming of a
            fresh blonde, richer dimension, or a completely
            new look, your next hair chapter starts here.
          </p>

          <div className="lookbook-cta__actions">
            <a
              className="lookbook-cta__button"
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK YOUR APPOINTMENT
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </a>

            <Link
              className="lookbook-cta__secondary"
              to="/new-clients"
            >
              NEW HERE? START HERE
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="lookbook-cta__visual">
          <div className="lookbook-cta__image-frame">
            <div
              className={`lookbook-cta__image ${
                !image ? 'lookbook-cta__image--placeholder' : ''
              }`}
            >
              {image && (
                <img
                  src={image}
                  alt="Beautifully styled hair inspiration"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          <span className="lookbook-cta__image-caption" aria-hidden="true">
            YOUR HAIR, YOUR STORY
          </span>

          <span className="lookbook-cta__watermark" aria-hidden="true">
            AHS
          </span>
        </div>
      </div>
    </section>
  );
}
