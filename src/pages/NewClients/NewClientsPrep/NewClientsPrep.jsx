
import './NewClientsPrep.css';

import blondingImage from '../../../assets/images/service-blonding.jpg';

const preparationTips = [
  {
    number: '01',
    title: 'Bring Your Inspiration',
    description:
      "Save a few photos of colors, cuts, or styles you love. They're a great starting point for discussing your goals and creating a look that works for you.",
  },
  {
    number: '02',
    title: 'Know Your Hair History',
    description:
      "Be ready to share any previous color treatments, at-home products, or chemical services. Understanding your hair's history helps us plan your appointment.",
  },
  {
    number: '03',
    title: 'Give Yourself Time',
    description:
      "Beautiful results shouldn't feel rushed. Some services take longer than others, so plan your day with enough flexibility to enjoy the experience.",
  },
  {
    number: '04',
    title: 'Keep an Open Mind',
    description:
      "Every head of hair is different. We'll talk through what's achievable, what works best for your hair, and how to maintain your results.",
  },
];

export default function NewClientsPrep() {
  return (
    <section
      className="new-clients-prep"
      aria-labelledby="new-clients-prep-title"
    >
      <div className="new-clients-prep__container page-container">
        <div className="new-clients-prep__intro">
          <span className="new-clients-prep__eyebrow">
            BEFORE YOU ARRIVE
          </span>

          <h2
            className="new-clients-prep__title"
            id="new-clients-prep-title"
          >
            Come inspired.
            <em>Leave confident.</em>
          </h2>

          <p className="new-clients-prep__description">
            A little preparation goes a long way. Here's how
            to make the most of your first appointment.
          </p>

          <figure className="new-clients-prep__visual">
            <img
              src={blondingImage}
              alt="Beautifully styled blonde hair with dimensional color"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="new-clients-prep__list">
          {preparationTips.map((tip) => (
            <article
              className="new-clients-prep__item"
              key={tip.number}
            >
              <span
                className="new-clients-prep__item-number"
                aria-hidden="true"
              >
                {tip.number}
              </span>

              <div className="new-clients-prep__item-content">
                <h3 className="new-clients-prep__item-title">
                  {tip.title}
                </h3>

                <p className="new-clients-prep__item-description">
                  {tip.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
