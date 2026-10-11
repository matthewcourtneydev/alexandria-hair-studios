
import { ArrowUpRight } from "lucide-react";
import { hairEdit } from "../../../data/hairEdit";
import bustImage from "../../../assets/CTAImages/bust-cta.png";

import "./HairEditCTA.css";

export default function HairEditCTA() {
  return (
    <section
      className="hair-edit-cta"
      aria-labelledby="hair-edit-cta-title"
    >
      <div className="hair-edit-cta__background" aria-hidden="true">
        <img
          src={bustImage}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="hair-edit-cta__overlay" aria-hidden="true" />

      <div className="hair-edit-cta__container">
        <div className="hair-edit-cta__content">
          <span className="hair-edit-cta__eyebrow">
            THE EDIT CONTINUES
          </span>

          <h2 id="hair-edit-cta-title">
            A little more
            <br />
            <em>to love.</em>
          </h2>

          <p className="hair-edit-cta__description">
            Discover more of Alex's favorite products,
            styling tools, and everyday beauty essentials.
          </p>

          <a
            className="hair-edit-cta__link"
            href={hairEdit.storefrontUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            EXPLORE THE FULL STOREFRONT

            <ArrowUpRight
              size={19}
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </a>

          <small className="hair-edit-cta__disclosure">
            As an Amazon Associate, I earn from qualifying purchases.
          </small>
        </div>
      </div>
    </section>
  );
}
