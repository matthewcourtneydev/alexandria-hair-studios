
import { ArrowUpRight } from 'lucide-react';

import './CategorySelector.css';

export default function CategorySelector({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div
      className="category-selector"
      role="group"
      aria-label="Browse product categories"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            className={`category-selector__item ${
              isActive ? 'is-active' : ''
            }`}
            onClick={() => onCategoryChange(category.id)}
            aria-pressed={isActive}
          >
            <span className="category-selector__top">
              <span className="category-selector__number">
                {category.number} / 04
              </span>

              <ArrowUpRight
                size={19}
                strokeWidth={1.4}
                aria-hidden="true"
              />
            </span>

            <span className="category-selector__title">
              {category.title}
            </span>

            <span className="category-selector__description">
              {category.description}
            </span>
          </button>
        );
      })}
    </div>
  );
}
