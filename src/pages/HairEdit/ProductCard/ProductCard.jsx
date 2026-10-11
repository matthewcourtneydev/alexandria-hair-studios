
import { ArrowUpRight } from 'lucide-react';

import './ProductCard.css';

export default function ProductCard({ product, index }) {
  return (
    <article className="hair-product-card">
      <a
        className="hair-product-card__image-link"
        href={product.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        aria-label={`Shop ${product.brand} ${product.name} on Amazon (opens in a new tab)`}
      >
        <div className="hair-product-card__image">
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            loading="lazy"
          />

          <span className="hair-product-card__index">
            {String(index + 1).padStart(2, '0')}
          </span>

          <span
            className="hair-product-card__image-arrow"
            aria-hidden="true"
          >
            <ArrowUpRight size={21} strokeWidth={1.4} />
          </span>
        </div>
      </a>

      <div className="hair-product-card__details">
        <span className="hair-product-card__brand">
          {product.brand}
        </span>

        <h4 className="hair-product-card__name">
          {product.name}
        </h4>

        <p className="hair-product-card__description">
          {product.description}
        </p>

        <a
          className="hair-product-card__shop"
          href={product.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          SHOP PRODUCT
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="sr-only">
            {' '}(opens in a new tab)
          </span>
        </a>
      </div>
    </article>
  );
}
