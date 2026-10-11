import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { serviceCategories } from '../../../data/services';
import { site } from '../../../data/site';
import blondingImage from '../../../assets/images/service-blonding.jpg';
import dimensionalImage from '../../../assets/images/service-dimensional.jpg';
import extensionsImage from '../../../assets/images/service-extensions.jpg';
import creativeImage from '../../../assets/images/service-creative.jpg';
import './ServiceMenu.css';

const categoryImages = {
  blonding: blondingImage,
  'dimensional-color': dimensionalImage,
  extensions: extensionsImage,
  finishing: creativeImage,
};

function ServiceModal({ category, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const root = document.getElementById('root');
    const previousInert = root?.inert ?? false;

    document.body.style.overflow = 'hidden';
    if (root) root.inert = true;
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (root) root.inert = previousInert;
      requestAnimationFrame(() => {
        if (previousFocusRef.current?.isConnected) {
          previousFocusRef.current.focus();
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), ' +
          'select:not([disabled]), textarea:not([disabled]), ' +
          '[tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((element) => element.getClientRects().length > 0);

      if (!focusable.length) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const image = category.image || categoryImages[category.id];

  return createPortal(
    <div
      className="service-modal__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="service-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        aria-describedby="service-modal-description"
        tabIndex={-1}
      >
        <button
          ref={closeRef}
          className="service-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close service details"
        >
          <X size={22} strokeWidth={1.5} aria-hidden="true" />
        </button>

        <div className="service-modal__layout">
          <div className="service-modal__main">
            <header className="service-modal__header">
              <span className="service-modal__eyebrow">
                {category.number} / THE SERVICE MENU
              </span>
              <h2 id="service-modal-title" className="service-modal__title">
                {category.title}<span>.</span>
              </h2>
              <p id="service-modal-description" className="service-modal__description">
                {category.description}
              </p>
            </header>

            <div className="service-modal__content">
              <div className="service-modal__section-heading">
                <span>AVAILABLE SERVICES</span>
                <span>{String(category.services.length).padStart(2, '0')}</span>
              </div>
              <div className="service-modal__services">
                {category.services.map((service, index) => (
                  <div className="service-modal__service" key={`${service.name}-${index}`}>
                    <div className="service-modal__service-info">
                      <h3>{service.name}</h3>
                      {service.description && <p>{service.description}</p>}
                    </div>
                    {service.price != null && (
                      <span className="service-modal__service-price">${service.price}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <footer className="service-modal__footer">
              <p>
                Every appointment is personalized to your hair goals. Final pricing and
                recommendations may vary following consultation.
              </p>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service-modal__booking"
              >
                BOOK AN APPOINTMENT
                <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </footer>
          </div>

          {image && (
            <div className="service-modal__photo" aria-hidden="true">
              <img src={image} alt="" />
              <span>ALEXANDRIA HAIR STUDIOS</span>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function ServiceMenu() {
  const [activeCategory, setActiveCategory] = useState(null);
  const closeModal = useCallback(() => setActiveCategory(null), []);

  return (
    <>
      <section id="service-menu" className="service-menu" aria-labelledby="service-menu-title">
        <div className="service-menu__container">
          <div className="service-menu__header">
            <div className="service-menu__heading">
              <span className="service-menu__eyebrow">THE SERVICE MENU</span>
              <h2 id="service-menu-title" className="service-menu__title">
                Find your <em>perfect fit.</em>
              </h2>
            </div>
            <div className="service-menu__intro">
              <p>
                From lived-in blondes to dimensional color and extensions, every service
                is tailored to your hair and your goals.
              </p>
              <Link to="/new-clients" className="service-menu__text-link">
                NEW HERE? START HERE
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="service-menu__grid">
            {serviceCategories.map((category) => {
              const image = category.image || categoryImages[category.id];
              return (
                <button
                  key={category.id}
                  type="button"
                  className="service-menu__card"
                  onClick={() => setActiveCategory(category)}
                  aria-haspopup="dialog"
                  aria-label={`View ${category.title} services`}
                >
                  <div className="service-menu__card-image">
                    {image ? (
                      <img src={image} alt="" loading="lazy" decoding="async" />
                    ) : (
                      <div className="service-menu__image-placeholder" aria-hidden="true">AHS.</div>
                    )}
                  </div>
                  <div className="service-menu__card-body">
                    <span className="service-menu__card-number">{category.number}</span>
                    <div className="service-menu__card-copy">
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                      <span className="service-menu__card-action">
                        {category.startingPrice != null
                          ? `STARTING AT $${category.startingPrice}`
                          : 'EXPLORE SERVICES'}
                        <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="service-menu__disclaimer">
            Services and pricing are subject to consultation. Final pricing may vary
            based on hair length, density, and desired results.
          </p>
        </div>
      </section>
      {activeCategory && <ServiceModal category={activeCategory} onClose={closeModal} />}
    </>
  );
}
