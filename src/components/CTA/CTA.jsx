
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import actionHair from '../../assets/CTAImages/action-hair.png';
import './CTA.css';

export default function CTA({
  image = actionHair,
  eyebrow = 'YOUR NEXT APPOINTMENT',
  title = 'Your feed could use',
  accent = 'better hair.',
  description = 'Your next favorite look starts in the chair.',
  buttonText = 'Book Your Appointment',
  buttonHref,
  secondaryText,
  secondaryHref,
  align = 'left',
  imagePosition = 'center',
  variant = 'default',
}) {
  return (
    <section
      className={`cta cta--${align} cta--${variant}`}
      aria-label={`${title} ${accent}`}
      style={{
        '--cta-image': `url("${image}")`,
        '--cta-image-position': imagePosition,
      }}
    >
      <div className="cta__container page-container">
        <div className="cta__content">
          {eyebrow && (
            <span className="cta__eyebrow">{eyebrow}</span>
          )}

          <h2 className="cta__title">
            {title}
            {accent && <em>{accent}</em>}
          </h2>

          {description && (
            <p className="cta__description">
              {description}
            </p>
          )}

          {(buttonHref || secondaryHref) && (
            <div className="cta__actions">
              {buttonHref && (
                <a
                  href={buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta__button"
                >
                  {buttonText}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </a>
              )}

              {secondaryHref && (
                <Link
                  to={secondaryHref}
                  className="cta__secondary"
                >
                  {secondaryText || 'Learn More'}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
