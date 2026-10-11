
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { hairEdit } from '../../../data/hairEdit';
import './HairEdit.css';

export default function HairEdit() {
  const products = hairEdit.featuredProducts ?? [];

  return (
    <section
      className="hair-edit"
      aria-labelledby="hair-edit-title"
    >
      <div className="hair-edit__container page-container">
        <div className="hair-edit__header">
          <div className="hair-edit__heading">
            <span className="hair-edit__eyebrow">
              THE HAIR EDIT / 03
            </span>

            <h2 id="hair-edit-title">
              The good hair <em>essentials.</em>
            </h2>
          </div>

          <div className="hair-edit__intro">
            <p className="hair-edit__description">
              Great hair doesn't stop at the salon.
              Discover a few of Alex's favorite products
              for keeping your hair looking its best
              between appointments.
            </p>

            <a
              href="/hair-edit"
              className="hair-edit__explore"
            >
              EXPLORE THE HAIR EDIT
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="hair-edit__collection-meta">
          <span>A FEW OF ALEX'S FAVORITES</span>
          <span>01 / CURATED PICKS</span>
        </div>

        <div className="hair-edit__products">
          {products.map((product) => (
            <article
              key={product.id}
              className="hair-edit__product"
            >
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="hair-edit__product-link"
                aria-label={`Shop ${product.brand} ${product.name} on Amazon (opens in a new tab)`}
              >
                <div className="hair-edit__product-image">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.name}`}
                    loading="lazy"
                    decoding="async"
                  />

                  <span
                    className="hair-edit__product-arrow"
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                    />
                  </span>
                </div>

                <div className="hair-edit__product-info">
                  <span className="hair-edit__product-category">
                    {product.brand}
                  </span>

                  <h3>{product.name}</h3>

                  <span className="hair-edit__product-shop">
                    SHOP PRODUCT
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="hair-edit__bottom">
          <p>
            More good hair days start here.
          </p>

          <a
            href="/hair-edit"
            className="hair-edit__bottom-link"
          >
            VIEW ALL FAVORITES
            <ArrowRight
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
        </div>

        <p className="hair-edit__disclosure">
          As an Amazon Associate, Alexandria Hair Studios
          earns from qualifying purchases.
        </p>
      </div>
    </section>
  );
}
