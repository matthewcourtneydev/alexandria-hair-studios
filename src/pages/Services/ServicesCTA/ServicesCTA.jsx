import { ArrowUpRight } from 'lucide-react';
import { site } from '../../../data/site';
import bannerImage from '../../../assets/images/service-banner.png';
import './ServicesCTA.css';

export default function ServicesCTA() {
  return (
    <section
      className="services-cta"
      aria-labelledby="services-cta-title"
    >
      <div className="services-cta__image">
        <img
          src={bannerImage}
          alt="A hairstylist carefully applying color to hair using foils"
          loading="lazy"
        />
      </div>

      <div className="services-cta__overlay" aria-hidden="true" />

      <div className="services-cta__container">
        <div className="services-cta__content">
          <div className="services-cta__eyebrow">
            <span className="services-cta__eyebrow-line" />
            THE EXPERIENCE
          </div>

          <h2
            className="services-cta__title"
            id="services-cta-title"
          >
            More than just a service.
            <span>A personalized experience.</span>
          </h2>

          <p className="services-cta__description">
            From consultation to finishing touches, every detail
            is designed to help you feel confident, informed,
            and cared for — in and out of the chair.
          </p>

          <a
            className="services-cta__link"
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK YOUR EXPERIENCE
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}