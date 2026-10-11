import { ArrowDown } from "lucide-react";

import heroImage from "../../../assets/images/hair-edit-hero.png";
import heroImageMobile from "../../../assets/images/hair-edit-hero-mobile.png";

import "./HairEditHero.css";

export default function HairEditHero() {
  const scrollToCollection = () => {
    document.getElementById("hair-edit-collection")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hair-edit-hero" aria-labelledby="hair-edit-hero-title">
      <div className="hair-edit-hero__background" aria-hidden="true">
        <picture>
          <source media="(max-width: 1100px)" srcSet={heroImageMobile} />

          <img src={heroImage} alt="" fetchPriority="high" />
        </picture>
      </div>

      <div className="hair-edit-hero__overlay" aria-hidden="true" />

      <div className="hair-edit-hero__container">
        <div className="hair-edit-hero__content">
          <span className="hair-edit-hero__eyebrow">
            ALEXANDRIA HAIR STUDIOS / THE HAIR EDIT
          </span>

          <h1 id="hair-edit-hero-title">
            The Hair <em>Edit.</em>
          </h1>

          <p className="hair-edit-hero__description">
            A curated collection of the products, tools, and treatments Alex
            loves — for good hair days beyond the salon.
          </p>

          <button
            type="button"
            className="hair-edit-hero__cta"
            onClick={scrollToCollection}
          >
            EXPLORE THE COLLECTION
            <ArrowDown size={17} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className="hair-edit-hero__scroll"
          onClick={scrollToCollection}
          aria-label="Scroll to the Hair Edit collection"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="hair-edit-hero__scroll-line" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
