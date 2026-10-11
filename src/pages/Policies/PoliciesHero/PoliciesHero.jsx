
import { ArrowDown } from 'lucide-react';
import heroImage from '../../../assets/images/policies-hero.png';
import './PoliciesHero.css';

export default function PoliciesHero({ image = heroImage }) {
  return (
    <section
      className="policies-hero"
      aria-labelledby="policies-hero-title"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="policies-hero__overlay" aria-hidden="true" />

      <div className="policies-hero__container">
        <div className="policies-hero__content">
          <span className="policies-hero__eyebrow">
            ALEXANDRIA HAIR STUDIOS / THE DETAILS
          </span>

          <h1
            className="policies-hero__title"
            id="policies-hero-title"
          >
            The little
            <span>details matter.</span>
          </h1>

          <p className="policies-hero__description">
            Everything you need to know before your visit,
            all in one place. Take a moment to explore our
            appointment information so you can arrive
            feeling prepared and ready to relax.
          </p>

          <a
            className="policies-hero__scroll"
            href="#policies-content"
          >
            APPOINTMENT INFORMATION
            <ArrowDown size={17} strokeWidth={1.5} />
          </a>
        </div>

        <div className="policies-hero__footer">
          <span>THE DETAILS MAKE THE DIFFERENCE</span>
          <span>ALEXANDRIA HAIR STUDIOS · CHARLOTTE, NC</span>
        </div>
      </div>
    </section>
  );
}
