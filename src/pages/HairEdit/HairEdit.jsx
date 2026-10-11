
import { useState } from "react";

import HairEditHero from "./HairEditHero/HairEditHero";
import CategorySelector from "./CategorySelector/CategorySelector";
import ProductCollection from "./ProductCollection/ProductCollection";
import HairEditCTA from "./HairEditCTA/HairEditCTA";

import { hairEdit } from "../../data/hairEdit";

import "./HairEdit.css";

export default function HairEdit() {
  const [activeCategory, setActiveCategory] = useState(
    hairEdit.collections[0].id
  );

  const selectedCollection = hairEdit.collections.find(
    (collection) => collection.id === activeCategory
  );

  return (
    <main className="hair-edit-page">
      <HairEditHero />

      <section
        id="hair-edit-collection"
        className="hair-edit-page__collection"
        aria-labelledby="hair-edit-collection-title"
      >
        <div className="hair-edit-page__inner">
          <div className="hair-edit-page__intro">
            <span className="hair-edit-page__eyebrow">
              01 / CURATED BY ALEX
            </span>

            <h2 id="hair-edit-collection-title">
              Good hair starts <em>here.</em>
            </h2>

            <p>
              The products behind the looks. Explore the
              essentials Alex loves for everyday care,
              styling, and finishing touches.
            </p>
          </div>

          <CategorySelector
            categories={hairEdit.collections}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div
            className="hair-edit-page__results"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="hair-edit-page__results-heading">
              <div>
                <span className="hair-edit-page__results-label">
                  SELECTED COLLECTION
                </span>

                <h3>{selectedCollection.title}</h3>
              </div>

              <span className="hair-edit-page__count">
                {String(
                  selectedCollection.products.length
                ).padStart(2, "0")}{" "}
                PRODUCTS
              </span>
            </div>

            <ProductCollection
              products={selectedCollection.products}
            />
          </div>
        </div>
      </section>

      <HairEditCTA />
    </main>
  );
}
