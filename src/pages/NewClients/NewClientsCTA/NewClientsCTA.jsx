
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../../../data/site';
import './NewClientsCTA.css';

export default function NewClientsCTA({ image = null }) {
  return (
    <section
      className="new-clients-cta"
      id="new-clients-booking"
      aria-labelledby="new-clients-cta-title"
    >
      <div className="new-clients-cta__container">
        <div className="new-clients-cta__content">
          <span className="new-clients-cta__eyebrow">
            YOUR NEXT CHAPTER
          </span>

          <h2
            className="new-clients-cta__title"
            id="new-clients-cta-title"
          >
            Ready for your
            <span>next hair chapter?</span>
          </h2>

          <p className="new-clients-cta__description">
            Great hair starts with a conversation. Whether
            you know exactly what you want or need a little
            guidance, I'd love to help you find your perfect
            look.
          </p>

          <div className="new-clients-cta__actions">
            <a
              className="new-clients-cta__button"
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK YOUR APPOINTMENT
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </a>

            <Link
              className="new-clients-cta__secondary"
              to="/services"
            >
              EXPLORE SERVICES
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="new-clients-cta__signature">
            <span className="new-clients-cta__signature-line" />
            <span>Can't wait to meet you.</span>
          </div>
        </div>

        <div className="new-clients-cta__visual">
          <div className="new-clients-cta__image-wrapper">
            <div
              className={`new-clients-cta__image ${
                !image ? 'new-clients-cta__image--placeholder' : ''
              }`}
            >
              {image && (
                <img
                  src={image}
                  alt="Warm and welcoming hair salon interior"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          <div
            className="new-clients-cta__accent"
            aria-hidden="true"
          />

          <span
            className="new-clients-cta__image-caption"
            aria-hidden="true"
          >
            ALEXANDRIA HAIR STUDIOS
          </span>
        </div>
      </div>
    </section>
  );
}
