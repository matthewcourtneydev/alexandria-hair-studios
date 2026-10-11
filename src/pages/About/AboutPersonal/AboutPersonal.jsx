import { ArrowUpRight } from 'lucide-react';

import personalMain from '../../../assets/images/beyond-lifestyle-02.png';
import personalTravel from '../../../assets/images/miami-condo.png';
import personalFood from '../../../assets/images/dinner-wine.png';

import './AboutPersonal.css';

const photos = [
  {
    src: personalMain,
    alt: 'Alex enjoying an evening out',
    className: 'about-personal__image--main',
  },
  {
    src: personalTravel,
    alt: 'A Miami high-rise overlooking the city',
    className: 'about-personal__image--secondary',
  },
  {
    src: personalFood,
    alt: 'Dinner and wine from an evening out',
    className: 'about-personal__image--detail',
  },
];

export default function AboutPersonal() {
  return (
    <section
      className="about-personal"
      aria-labelledby="about-personal-title"
    >
      <div className="about-personal__container page-container">
        <div className="about-personal__visual">
          <div className="about-personal__collage">
            {photos.map((photo) => (
              <div
                className={`about-personal__image ${photo.className}`}
                key={photo.className}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="about-personal__content">
          <span className="about-personal__eyebrow">
            OFF THE CLOCK
          </span>

          <h2
            className="about-personal__title"
            id="about-personal-title"
          >
            When I'm not doing your hair,
            <em> I'm letting mine down.</em>
          </h2>

          <div className="about-personal__copy">
            <p className="about-personal__lead">
              There's a little more to me than blondes,
              balayage, and a good blowout.
            </p>

            <p>
              When I'm not behind the chair, you'll probably
              find me planning my next trip, trying a new
              restaurant, or finding an excuse to get dressed
              up. Miami has my heart, and I'm always up for
              good food, great company, and a little retail
              therapy.
            </p>

            <p>
              I love sharing the things I discover along the
              way, from beauty and makeup favorites to places
              worth visiting. And if you sit in my chair long
              enough, chances are we'll end up talking about
              all of it.
            </p>
          </div>

          <a
            className="about-personal__link"
            href="https://www.instagram.com/alexdidmycolor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MORE OF MY LIFE LATELY
            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>

          <span className="about-personal__handle">
            @alexdidmycolor
          </span>
        </div>
      </div>
    </section>
  );
}