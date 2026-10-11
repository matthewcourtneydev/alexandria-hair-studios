import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { lookbookPhotos } from '../../../data/lookbook';
import './LookbookPreview.css';

const TOTAL = lookbookPhotos.length;
const wrapIndex = (index) => TOTAL ? ((index % TOTAL) + TOTAL) % TOTAL : 0;
const formatNumber = (number) => String(number).padStart(2, '0');
const DURATION = 720;
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function LookbookPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [movement, setMovement] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [instant, setInstant] = useState(false);
  const activeRef = useRef(0);
  const animationRef = useRef(false);
  const timerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const mobileTrackRef = useRef(null);
  const mobileCardRefs = useRef([]);
  const lightboxOpen = lightboxIndex !== null;

  // Seven mounted tiles: two extra tiles let the track travel one position
  // without swapping images in the middle of the animation.
  const desktopIndices = TOTAL
    ? [-3, -2, -1, 0, 1, 2, 3].map((offset) => wrapIndex(activeIndex + offset))
    : [];

  const scrollToMobilePhoto = (index) => {
    const track = mobileTrackRef.current;
    const card = mobileCardRefs.current[index];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: reduceMotion() ? 'instant' : 'smooth',
    });
  };

  const navigate = (direction) => {
    if (!TOTAL) return;
    const next = wrapIndex(activeRef.current + direction);
    if (window.matchMedia('(max-width: 768px)').matches) {
      activeRef.current = next;
      setActiveIndex(next);
      scrollToMobilePhoto(next);
      return;
    }
    if (animationRef.current) return;
    if (reduceMotion()) {
      activeRef.current = next;
      setActiveIndex(next);
      return;
    }
    animationRef.current = true;
    setInstant(false);
    setMovement(direction);
    setAnimating(true);
    timerRef.current = window.setTimeout(() => {
      // Reset the transform without animation after the destination is reached.
      setInstant(true);
      activeRef.current = next;
      setActiveIndex(next);
      setMovement(0);
      setAnimating(false);
      animationRef.current = false;
      requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
    }, DURATION);
  };

  const selectPhoto = (index) => {
    const next = wrapIndex(index);
    if (next === activeRef.current) return;
    if (window.matchMedia('(max-width: 768px)').matches) {
      activeRef.current = next;
      setActiveIndex(next);
      scrollToMobilePhoto(next);
      return;
    }
    const forward = wrapIndex(activeRef.current + 1) === next;
    const backward = wrapIndex(activeRef.current - 1) === next;
    if (forward || backward) navigate(forward ? 1 : -1);
  };

  const handleMobileScroll = () => {
    const track = mobileTrackRef.current;
    if (!track) return;
    const center = track.getBoundingClientRect().left + track.clientWidth / 2;
    let closest = 0;
    let distance = Infinity;
    mobileCardRefs.current.forEach((card, index) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const current = Math.abs(rect.left + rect.width / 2 - center);
      if (current < distance) { distance = current; closest = index; }
    });
    activeRef.current = closest;
    setActiveIndex(closest);
  };

  const openLightbox = (index) => {
    previousFocusRef.current = document.activeElement;
    setLightboxIndex(index);
  };

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); setLightboxIndex(null); return; }
      if (event.key === 'ArrowRight') { event.preventDefault(); setLightboxIndex((i) => wrapIndex(i + 1)); return; }
      if (event.key === 'ArrowLeft') { event.preventDefault(); setLightboxIndex((i) => wrapIndex(i - 1)); return; }
      if (event.key !== 'Tab') return;
      const dialog = closeButtonRef.current?.closest('.lookbook-lightbox');
      const focusable = Array.from(dialog?.querySelectorAll('button:not([disabled]), a[href]') ?? []);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [lightboxOpen]);

  if (!TOTAL) return null;
  const activePhoto = lookbookPhotos[activeIndex];
  return (
    <>
      <section className="lookbook-preview" aria-labelledby="lookbook-preview-title">
        <div className="lookbook-preview__inner">
          <div className="lookbook-preview__header page-container">
            <div className="lookbook-preview__heading">
              <span className="lookbook-preview__eyebrow">THE LOOKBOOK / 02</span>
              <h2 id="lookbook-preview-title">Good hair <em>speaks for itself.</em></h2>
            </div>
            <div className="lookbook-preview__introduction">
              <p>A collection of lived-in blondes, dimensional color, and extensions created at Alexandria Hair Studios in Charlotte, North Carolina.</p>
              <Link to="/lookbook" className="lookbook-preview__link">Explore the Lookbook <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="lookbook-preview__gallery-area">
            <div className="lookbook-preview__desktop">
              <div className="lookbook-preview__viewport">
                <div
                  className={`lookbook-preview__gallery ${instant ? 'is-instant' : ''} ${animating ? 'is-moving' : ''}`}
                  data-direction={movement}
                  style={{ '--duration': `${DURATION}ms` }}
                >
                  {desktopIndices.map((photoIndex, position) => {
                    const photo = lookbookPhotos[photoIndex];
                    const offset = position - 3;
                    const visualOffset = offset - movement;
                    const featured = visualOffset === 0;
                    return (
                      <button
                        key={`${activeIndex}-${position}-${photo.id}`}
                        type="button"
                        className={`lookbook-preview__tile ${featured ? "is-featured" : Math.abs(visualOffset) === 1 ? "is-near" : "is-far"}`}
                        style={{ '--distance': Math.abs(visualOffset) }}
                        onClick={() => featured ? openLightbox(photoIndex) : selectPhoto(photoIndex)}
                        aria-label={featured ? `View ${photo.title} fullscreen` : `Feature ${photo.title}`}
                        tabIndex={Math.abs(offset) <= 2 ? 0 : -1}
                      >
                        <img src={photo.image} alt={photo.alt} loading="lazy" decoding="async" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lookbook-preview__mobile">
              <div className="lookbook-preview__mobile-track" ref={mobileTrackRef} onScroll={handleMobileScroll} aria-label="Hair portfolio photographs">
                {lookbookPhotos.map((photo, index) => (
                  <button key={photo.id} type="button" className={`lookbook-preview__mobile-card ${activeIndex === index ? 'is-active' : ''}`} ref={(element) => { mobileCardRefs.current[index] = element; }} onClick={() => openLightbox(index)} aria-label={`View ${photo.title} fullscreen`}>
                    <img src={photo.image} alt={photo.alt} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lookbook-preview__navigation page-container">
              <button type="button" className="lookbook-preview__nav-arrow" onClick={() => navigate(-1)} aria-label="Previous photograph"><ArrowLeft size={20} strokeWidth={1.4} aria-hidden="true" /></button>
              <div className="lookbook-preview__legend" aria-live="polite" aria-atomic="true">
                <span className="lookbook-preview__legend-counter">{formatNumber(activeIndex + 1)}<span> / </span>{formatNumber(TOTAL)}</span>
                <span className="lookbook-preview__legend-title">{activePhoto.title}</span>
              </div>
              <button type="button" className="lookbook-preview__nav-arrow" onClick={() => navigate(1)} aria-label="Next photograph"><ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </section>
      {lightboxOpen && createPortal(
        <div className="lookbook-lightbox" role="dialog" aria-modal="true" aria-label="Hair portfolio photo viewer" onMouseDown={(event) => { if (event.target === event.currentTarget) setLightboxIndex(null); }}>
          <button ref={closeButtonRef} type="button" className="lookbook-lightbox__close" onClick={() => setLightboxIndex(null)} aria-label="Close photo viewer"><X size={23} strokeWidth={1.5} aria-hidden="true" /></button>
          <button type="button" className="lookbook-lightbox__arrow lookbook-lightbox__arrow--previous" onClick={() => setLightboxIndex((i) => wrapIndex(i - 1))} aria-label="Previous photograph"><ArrowLeft size={23} strokeWidth={1.5} aria-hidden="true" /></button>
          <div className="lookbook-lightbox__content">
            <img src={lookbookPhotos[lightboxIndex].image} alt={lookbookPhotos[lightboxIndex].alt} />
            <div className="lookbook-lightbox__caption"><div><span>{lookbookPhotos[lightboxIndex].category}</span><h3>{lookbookPhotos[lightboxIndex].title}</h3></div><span className="lookbook-lightbox__counter">{formatNumber(lightboxIndex + 1)} / {formatNumber(TOTAL)}</span></div>
          </div>
          <button type="button" className="lookbook-lightbox__arrow lookbook-lightbox__arrow--next" onClick={() => setLightboxIndex((i) => wrapIndex(i + 1))} aria-label="Next photograph"><ArrowRight size={23} strokeWidth={1.5} aria-hidden="true" /></button>
        </div>, document.body
      )}
    </>
  );
}
