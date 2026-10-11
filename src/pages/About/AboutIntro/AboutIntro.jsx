
import './AboutIntro.css';

import alexPortrait from '../../../assets/images/about-alex-01.png';
import cheetahTexture from '../../../assets/textures/cheetah.png';

export default function AboutIntro({ image = alexPortrait }) {
  return (
    <section
      className="about-intro"
      id="meet-alex"
      aria-labelledby="about-intro-title"
    >
      <div
        className="about-intro__texture"
        style={{ backgroundImage: `url(${cheetahTexture})` }}
        aria-hidden="true"
      />

      <div className="about-intro__container page-container">
        <div className="about-intro__visual">
          <div className="about-intro__image-frame">
            <img
              className="about-intro__image"
              src={image}
              alt="Alexandria, founder and hairstylist at Alexandria Hair Studios in Charlotte"
              loading="lazy"
              decoding="async"
            />
          </div>

          <span className="about-intro__photo-caption">
            ALEXANDRIA HAIR STUDIOS
            <span>CHARLOTTE, NC</span>
          </span>
        </div>

        <div className="about-intro__content">
          <span className="about-intro__eyebrow">
            A LITTLE INTRODUCTION
          </span>

          <h2
            className="about-intro__title"
            id="about-intro-title"
          >
            Hi, I'm <em>Alex.</em>
          </h2>

          <div className="about-intro__copy">
            <p className="about-intro__lead">
              I'm the stylist behind Alexandria Hair Studios,
              with a love for beautiful, effortless hair and
              the connections made along the way.
            </p>

            <p>
              I specialize in dimensional color, lived-in blondes,
              and extensions, creating looks that feel natural,
              personalized, and easy to wear beyond the salon.
            </p>

            <p>
              I'm always learning, finding new inspiration, and
              paying attention to the little details. More than
              anything, I want your time in my chair to feel
              comfortable, collaborative, and completely you.
            </p>
          </div>

          <div className="about-intro__signature">
            <span
              className="about-intro__signature-line"
              aria-hidden="true"
            />
            <span>So happy you're here.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
