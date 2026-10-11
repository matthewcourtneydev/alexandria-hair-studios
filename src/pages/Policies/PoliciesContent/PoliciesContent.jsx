
import './PoliciesContent.css';
import cheetahTexture from '../../../assets/textures/cheetah.png';

const policySections = [
  {
    id: 'booking',
    number: '01',
    eyebrow: 'RESERVATIONS',
    title: 'Booking',
    accent: 'your appointment.',
    description:
      'A little planning helps make your appointment as seamless as possible.',
    details: [
      {
        label: 'Scheduling',
        text: 'Appointments can be requested through the online booking page. Please review the available services before selecting your appointment.',
      },
      {
        label: 'Deposits & Payments',
        text: 'Deposit requirements, accepted payment methods, and any applicable fees will be confirmed before launch.',
        pending: true,
      },
    ],
  },
  {
    id: 'changes',
    number: '02',
    eyebrow: 'SCHEDULE CHANGES',
    title: 'Cancellations',
    accent: '& rescheduling.',
    description:
      'Plans change, and clear communication helps keep the appointment schedule running smoothly.',
    details: [
      {
        label: 'Cancellation Notice',
        text: 'The required cancellation notice period and any applicable fees will be added once confirmed.',
        pending: true,
      },
      {
        label: 'Rescheduling',
        text: 'Rescheduling requirements and any associated policies will be added once confirmed.',
        pending: true,
      },
    ],
  },
  {
    id: 'preparation',
    number: '03',
    eyebrow: 'BEFORE YOUR VISIT',
    title: 'Come',
    accent: 'prepared.',
    description:
      'Your consultation is an opportunity to talk through your hair goals and find the right direction for your appointment.',
    details: [
      {
        label: 'Inspiration',
        text: 'Consider bringing a few inspiration photos to help communicate the color, cut, or overall look you have in mind.',
      },
      {
        label: 'Hair History',
        text: 'Be ready to discuss previous color treatments, chemical services, and anything else that may be relevant to your hair goals.',
      },
    ],
  },
  {
    id: 'appointment',
    number: '04',
    eyebrow: 'AT THE SALON',
    title: 'Your',
    accent: 'appointment.',
    description:
      'A comfortable, personalized experience starts with knowing what to expect.',
    details: [
      {
        label: 'Arrival & Timing',
        text: 'Late-arrival requirements and any appointment timing restrictions will be added once confirmed.',
        pending: true,
      },
      {
        label: 'Additional Information',
        text: 'Guest policies, service adjustments, and any other salon-specific guidelines will be added once confirmed.',
        pending: true,
      },
    ],
  },
];

export default function PoliciesContent() {
  return (
    <section
      className="policies-content"
      id="policies-content"
      aria-labelledby="policies-content-title"
    >
      <div
        className="policies-content__texture"
        style={{ backgroundImage: `url(${cheetahTexture})` }}
        aria-hidden="true"
      />

      <div className="policies-content__container">
        <div className="policies-content__intro">
          <span className="policies-content__eyebrow">
            GOOD TO KNOW
          </span>

          <h2
            className="policies-content__heading"
            id="policies-content-title"
          >
            Before you <em>book.</em>
          </h2>

          <p>
            Here's a helpful overview of the appointment
            process and the details to keep in mind before
            your visit.
          </p>
        </div>

        <div className="policies-content__sections">
          {policySections.map((section) => (
            <article
              className="policies-content__section"
              key={section.id}
              aria-labelledby={`policy-${section.id}-title`}
            >
              <div className="policies-content__number-column">
                <span
                  className="policies-content__number"
                  aria-hidden="true"
                >
                  {section.number}
                </span>
              </div>

              <div className="policies-content__main">
                <span className="policies-content__section-eyebrow">
                  {section.eyebrow}
                </span>

                <h3
                  className="policies-content__section-title"
                  id={`policy-${section.id}-title`}
                >
                  {section.title}
                  <span>{section.accent}</span>
                </h3>

                <p className="policies-content__description">
                  {section.description}
                </p>
              </div>

              <div className="policies-content__details">
                {section.details.map((detail) => (
                  <div
                    className="policies-content__detail"
                    key={detail.label}
                  >
                    <h4>{detail.label}</h4>

                    <p>{detail.text}</p>

                    {detail.pending && (
                      <span className="policies-content__pending">
                        DETAILS TO BE CONFIRMED
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="policies-content__footer">
          <span className="policies-content__footer-line" />

          <span>
            THOUGHTFUL DETAILS. A BETTER EXPERIENCE.
          </span>
        </div>
      </div>
    </section>
  );
}
