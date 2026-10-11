import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { lookbookPhotos, lookbookFilters } from '../../../data/lookbook';
import './LookbookGallery.css';

const ITEMS_PER_PAGE = 8;

export default function LookbookGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeItem, setActiveItem] = useState(null);

  const galleryHeadingRef = useRef(null);
  const lightboxRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const filteredItems = activeCategory === 'all'
    ? lookbookPhotos
    : lookbookPhotos.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const page = Math.min(currentPage, Math.max(1, totalPages));
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const firstVisible = filteredItems.length ? startIndex + 1 : 0;
  const lastVisible = Math.min(startIndex + ITEMS_PER_PAGE, filteredItems.length);
  const activeIndex = activeItem
    ? filteredItems.findIndex((item) => item.id === activeItem.id)
    : -1;

  const getCategoryLabel = (category) =>
    lookbookFilters.find((item) => item.id === category)?.label || category;

  const changeCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const changePage = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === page) return;
    setCurrentPage(nextPage);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    galleryHeadingRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? 'instant' : 'smooth',
      block: 'start',
    });
  };

  const openLightbox = (item, event) => {
    triggerRef.current = event.currentTarget;
    setActiveItem(item);
  };

  const closeLightbox = () => setActiveItem(null);

  const navigateLightbox = (direction) => {
    if (activeIndex < 0 || !filteredItems.length) return;
    const nextIndex = (activeIndex + direction + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  useEffect(() => {
    if (!activeItem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveItem(null);
        return;
      }
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        setActiveItem((current) => {
          const index = filteredItems.findIndex((item) => item.id === current?.id);
          if (index < 0) return current;
          return filteredItems[(index + direction + filteredItems.length) % filteredItems.length];
        });
      }
      if (event.key === 'Tab') {
        const focusable = lightboxRef.current?.querySelectorAll('button:not([disabled]), a[href]');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeItem !== null, activeCategory]);

  return (
    <section className="lookbook-gallery" id="lookbook-gallery" aria-labelledby="lookbook-gallery-title">
      <div className="lookbook-gallery__container">
        <div className="lookbook-gallery__heading" ref={galleryHeadingRef}>
          <div>
            <span className="lookbook-gallery__eyebrow">THE COLLECTION</span>
            <h2 className="lookbook-gallery__title" id="lookbook-gallery-title">
              Hair worth <em>sharing.</em>
            </h2>
          </div>
          <p className="lookbook-gallery__intro">
            Explore blonde transformations, dimensional color, extensions, and creative looks
            from Alexandria Hair Studios in Charlotte, NC.
          </p>
        </div>

        <div className="lookbook-gallery__filters" role="group" aria-label="Filter hair gallery by category">
          {lookbookFilters.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`lookbook-gallery__filter ${activeCategory === category.id ? 'lookbook-gallery__filter--active' : ''}`}
              onClick={() => changeCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        <p className="lookbook-gallery__count" aria-live="polite" aria-atomic="true">
          {filteredItems.length
            ? `SHOWING ${firstVisible}–${lastVisible} OF ${filteredItems.length} ${filteredItems.length === 1 ? 'LOOK' : 'LOOKS'}`
            : 'NO LOOKS FOUND'}
        </p>

        <div className={`lookbook-gallery__grid ${activeCategory !== 'all' ? 'lookbook-gallery__grid--filtered' : ''}`}>
          {visibleItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="lookbook-gallery__item"
              onClick={(event) => openLightbox(item, event)}
              aria-label={`View ${item.title}`}
            >
              <div className={`lookbook-gallery__image ${!item.image ? 'lookbook-gallery__image--placeholder' : ''}`}>
                {item.image ? (
                  <img src={item.image} alt={item.alt || item.title} loading="lazy" decoding="async" />
                ) : (
                  <span className="lookbook-gallery__placeholder-label" aria-hidden="true">AHS</span>
                )}
              </div>
              <div className="lookbook-gallery__item-overlay">
                <div className="lookbook-gallery__item-copy">
                  <span className="lookbook-gallery__item-category">{getCategoryLabel(item.category)}</span>
                  <h3 className="lookbook-gallery__item-title">{item.title}</h3>
                </div>
                <span className="lookbook-gallery__item-arrow" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </div>
            </button>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="lookbook-gallery__pagination" aria-label="Lookbook gallery pages">
            <button
              type="button"
              className="lookbook-gallery__page-arrow"
              onClick={() => changePage(page - 1)}
              disabled={page === 1}
              aria-label="Previous gallery page"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                className={`lookbook-gallery__page-number ${page === pageNumber ? 'lookbook-gallery__page-number--active' : ''}`}
                onClick={() => changePage(pageNumber)}
                aria-label={`Gallery page ${pageNumber}`}
                aria-current={page === pageNumber ? 'page' : undefined}
              >
                {String(pageNumber).padStart(2, '0')}
              </button>
            ))}
            <button
              type="button"
              className="lookbook-gallery__page-arrow"
              onClick={() => changePage(page + 1)}
              disabled={page === totalPages}
              aria-label="Next gallery page"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </nav>
        )}
      </div>

      {activeItem && (
        <div
          className="lookbook-lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div
            className="lookbook-lightbox__dialog"
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lookbook-lightbox-title"
            aria-describedby="lookbook-lightbox-description"
          >
            <button
              ref={closeButtonRef}
              className="lookbook-lightbox__close"
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <X size={23} strokeWidth={1.5} />
            </button>
            <div className="lookbook-lightbox__body">
              <div className={`lookbook-lightbox__image ${!activeItem.image ? 'lookbook-lightbox__image--placeholder' : ''}`}>
                {activeItem.image ? (
                  <img src={activeItem.image} alt={activeItem.alt || activeItem.title} />
                ) : (
                  <span aria-hidden="true">AHS</span>
                )}
              </div>
              <div className="lookbook-lightbox__details">
                <span className="lookbook-lightbox__eyebrow">{getCategoryLabel(activeItem.category)}</span>
                <h3 id="lookbook-lightbox-title">{activeItem.title}</h3>
                <p id="lookbook-lightbox-description">
                  {activeItem.description || 'Explore this look from the Alexandria Hair Studios portfolio.'}
                </p>
                <div className="lookbook-lightbox__navigation">
                  <button type="button" onClick={() => navigateLightbox(-1)} aria-label="Previous look">
                    <ChevronLeft size={22} strokeWidth={1.5} />
                  </button>
                  <span>{activeIndex + 1} / {filteredItems.length}</span>
                  <button type="button" onClick={() => navigateLightbox(1)} aria-label="Next look">
                    <ChevronRight size={22} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
