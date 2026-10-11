
import { ArrowUpRight } from 'lucide-react';

import { site } from '../../../data/site';
import './BookingCTA.css';

export default function BookingCTA() {
  return (
    <section
      className="booking-cta"
      aria-labelledby="booking-cta-title"
    >
      <div className="booking-cta__container page-container">
        <div className="booking-cta__inner">
          <div className="booking-cta__content">
            <span className="booking-cta__eyebrow">
              YOUR NEXT APPOINTMENT
            </span>

            <h2 id="booking-cta-title">
              Good hair
              <em> starts here.</em>
            </h2>

            <p>
              A fresh color, a little change, or a
              whole new look. Whatever you're dreaming
              of, let's make it happen.
            </p>
          </div>

          <div className="booking-cta__action">
            <span className="booking-cta__action-label">
              READY WHEN YOU ARE
            </span>

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="booking-cta__button"
            >
              Book Your Appointment

              <ArrowUpRight
                size={19}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>

            <span className="booking-cta__location">
              ALEXANDRIA HAIR STUDIOS · CHARLOTTE, NC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
