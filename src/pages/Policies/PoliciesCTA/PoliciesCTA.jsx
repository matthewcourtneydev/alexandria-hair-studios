
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import { site } from '../../../data/site';
import policiesCtaImage from '../../../assets/images/policies-cta.png';

import './PoliciesCTA.css';

export default function PoliciesCTA() {
  return (
    <section
      className="policies-cta"
      aria-labelledby="policies-cta-title"
      style={{
        '--policies-cta-image': `url(${policiesCtaImage})`,
      }}
    >
      <div className="policies-cta__container">
        <div className="policies-cta__top">
          <span className="policies-cta__eyebrow">
            ONE LAST THING
          </span>

          <span
            className="policies-cta__decorative-line"
            aria-hidden="true"
          />
        </div>

        <div className="policies-cta__content">
          <div className="policies-cta__icon" aria-hidden="true">
            <MessageCircle size={24} strokeWidth={1.2} />
          </div>

          <h2
            className="policies-cta__title"
            id="policies-cta-title"
          >
            Still have
            <span>questions?</span>
          </h2>

          <p className="policies-cta__description">
            Every hair journey is a little different.
            If you're unsure which service is right for
            you or have questions before booking,
            I'd love to help you feel confident about
            your next appointment.
          </p>

          <div className="policies-cta__actions">
            <a
              className="policies-cta__primary"
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK AN APPOINTMENT
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </a>

            <Link
              className="policies-cta__secondary"
              to="/services"
            >
              EXPLORE SERVICES
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="policies-cta__bottom">
          <span>ALEXANDRIA HAIR STUDIOS</span>
          <span>CHARLOTTE, NORTH CAROLINA</span>
        </div>
      </div>
    </section>
  );
}
