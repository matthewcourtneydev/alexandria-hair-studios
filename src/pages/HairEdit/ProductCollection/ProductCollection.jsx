
import ProductCard from '../ProductCard/ProductCard';

import './ProductCollection.css';

export default function ProductCollection({ products = [] }) {
  if (!products.length) {
    return (
      <p className="hair-product-collection__empty">
        No products available in this collection yet.
      </p>
    );
  }

  return (
    <div className="hair-product-collection">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </div>
  );
}
