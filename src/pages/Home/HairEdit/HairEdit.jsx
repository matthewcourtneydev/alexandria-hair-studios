
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { hairEdit } from '../../../data/hairEdit';
import './HairEdit.css';

export default function HairEdit() {
  const products = hairEdit.products ?? [];
  const storefrontUrl = hairEdit.storefrontUrl;

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

          <p className="hair-edit__description">
            Great hair doesn't stop at the salon.
            Explore Alex's selection of hair care,
            styling products, and everyday favorites
            for keeping your hair looking its best
            between appointments.
          </p>
        </div>

        {products.length > 0 && (
          <div className="hair-edit__collection">
            <div className="hair-edit__collection-meta">
              <span>THE CURATED COLLECTION</span>

              <span>
                {String(products.length).padStart(2, '0')}
                {' / '}FAVORITES
              </span>
            </div>

            <div className="hair-edit__products">
              {products.map((product, index) => (
                <article
                  key={product.id ?? index}
                  className="hair-edit__product"
                >
                  <div className="hair-edit__product-image">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div
                        className="hair-edit__product-placeholder"
                        aria-hidden="true"
                      >
                        <Sparkles
                          size={20}
                          strokeWidth={1}
                        />
                        <span>AHS.</span>
                      </div>
                    )}
                  </div>

                  <div className="hair-edit__product-info">
                    {product.category && (
                      <span className="hair-edit__product-category">
                        {product.category}
                      </span>
                    )}

                    <h3>{product.name}</h3>

                    {product.description && (
                      <p>{product.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {products.length > 1 && (
              <div className="hair-edit__mobile-hint">
                SWIPE TO EXPLORE
                <span aria-hidden="true">→</span>
              </div>
            )}
          </div>
        )}

        <div className="hair-edit__bottom">
          <p className="hair-edit__bottom-copy">
            A few favorites for keeping the good hair days going.
          </p>

          {storefrontUrl && (
            <a
              href={storefrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hair-edit__storefront-link"
            >
              Shop the Storefront
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          )}
        </div>

        <p className="hair-edit__disclosure">
          Some links may be affiliate links. Purchases made
          through these links may earn a commission at no
          additional cost to you.
        </p>
      </div>
    </section>
  );
}
