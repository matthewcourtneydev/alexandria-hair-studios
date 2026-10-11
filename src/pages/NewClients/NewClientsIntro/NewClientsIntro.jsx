
import './NewClientsIntro.css';

export default function NewClientsIntro({ image }) {
  return (
    <section
      className="new-clients-intro"
      id="new-clients-intro"
      aria-labelledby="new-clients-intro-title"
      style={
        image
          ? { '--intro-background': `url("${image}")` }
          : undefined
      }
    >
      <div className="new-clients-intro__container page-container">
        <div className="new-clients-intro__content">
          <span className="new-clients-intro__eyebrow">
            A PERSONALIZED APPROACH
          </span>

          <h2
            className="new-clients-intro__title"
            id="new-clients-intro-title"
          >
            A little about your
            <em> first visit.</em>
          </h2>

          <p className="new-clients-intro__lead">
            Every hair journey is different.
            Your experience should be, too.
          </p>

          <div className="new-clients-intro__copy">
            <p>
              From your first consultation to the finishing
              touches, we'll take time to understand your
              hair history, goals, and inspiration.
            </p>

            <p>
              Whether you're refreshing your current look
              or ready for something completely new, we'll
              create a personalized plan that feels
              comfortable, realistic, and uniquely you.
            </p>
          </div>

          <div className="new-clients-intro__signature">
            <span
              className="new-clients-intro__signature-line"
              aria-hidden="true"
            />
            <span>Thoughtful color. Beautiful results.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
