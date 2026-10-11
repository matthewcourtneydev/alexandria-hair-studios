
import cheetahTexture from '../../../assets/textures/cheetah.png';

import './NewClientsProcess.css';

const steps = [
  {
    number: '01',
    title: 'Choose Your Service',
    description:
      "Explore the services and find the one that best fits your hair goals. Not sure where to start? A consultation can help you decide.",
  },
  {
    number: '02',
    title: 'Prepare for Your Visit',
    description:
      "Gather your inspiration photos, think about your hair goals, and come ready to share your hair history. We'll take it from there.",
  },
  {
    number: '03',
    title: 'Enjoy Your Appointment',
    description:
      "Relax while we create a look that's tailored to you. From the consultation to the finishing touches, it's all about your experience.",
  },
];

export default function NewClientsProcess() {
  return (
    <section
      className="new-clients-process"
      id="new-clients-process"
      aria-labelledby="new-clients-process-title"
    >
      <div
        className="new-clients-process__texture"
        style={{
          backgroundImage: `url(${cheetahTexture})`,
        }}
        aria-hidden="true"
      />

      <div className="new-clients-process__container page-container">
        <div className="new-clients-process__header">
          <div className="new-clients-process__heading">
            <span className="new-clients-process__eyebrow">
              THE PROCESS
            </span>

            <h2
              className="new-clients-process__title"
              id="new-clients-process-title"
            >
              Your first appointment,
              <em> simplified.</em>
            </h2>
          </div>

          <p className="new-clients-process__intro">
            Great hair doesn't have to be complicated.
            Here's what to expect when you're ready
            to book your first appointment.
          </p>
        </div>

        <div className="new-clients-process__grid">
          {steps.map((step) => (
            <article
              className="new-clients-process__step"
              key={step.number}
            >
              <span
                className="new-clients-process__number"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <h3 className="new-clients-process__step-title">
                {step.title}
              </h3>

              <p className="new-clients-process__step-description">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="new-clients-process__footer">
          <span className="new-clients-process__footer-line" />
          <span className="new-clients-process__footer-text">
            A PERSONALIZED EXPERIENCE, FROM START TO FINISH
          </span>
        </div>
      </div>
    </section>
  );
}
