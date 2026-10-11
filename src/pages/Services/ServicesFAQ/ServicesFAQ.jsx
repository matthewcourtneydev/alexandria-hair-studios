
import { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { site } from '../../../data/site';
import './ServicesFAQ.css';

const faqs = [
  {
    question: 'What should I book?',
    answer:
      "Not sure which service is right for you? That's completely okay. If you're considering a big change or have questions about your hair goals, starting with a consultation is a great way to create a personalized plan.",
  },
  {
    question: 'Do you offer consultations?',
    answer:
      'Consultations are a great starting point for discussing your hair history, inspiration photos, desired results, and the services that may be right for you. Please check the booking page for current consultation options.',
  },
  {
    question: 'How should I prepare for my appointment?',
    answer:
      'Bring a few inspiration photos and be ready to share your recent color history, at-home treatments, and hair goals. Any specific preparation instructions will be provided when your appointment is confirmed.',
  },
  {
    question: 'How long will my appointment take?',
    answer:
      'Appointment times vary depending on the service, your starting point, and your desired result. More involved color transformations and extension services may require additional time.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellation and rescheduling policies are provided through the booking platform. Please review the current policy when scheduling your appointment.',
  },
];

export default function ServicesFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      className="services-faq"
      aria-labelledby="services-faq-title"
    >
      <div className="services-faq__container">
        <div className="services-faq__intro">
          <div className="services-faq__eyebrow">
            <span
              className="services-faq__eyebrow-line"
              aria-hidden="true"
            />
            GOOD TO KNOW
          </div>

          <h2
            className="services-faq__title"
            id="services-faq-title"
          >
            Your questions,
            <span>answered.</span>
          </h2>

          <p className="services-faq__description">
            Everything you need to know before your
            appointment. Still have questions? I'm always
            happy to help you feel confident about your
            next visit.
          </p>

          <a
            className="services-faq__link"
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            HAVE ANOTHER QUESTION?
            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="services-faq__accordion">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const answerId = `services-faq-answer-${index}`;
            const questionId = `services-faq-question-${index}`;

            return (
              <div
                key={faq.question}
                className={`services-faq__item ${
                  isOpen ? 'services-faq__item--open' : ''
                }`}
              >
                <h3 className="services-faq__question-heading">
                  <button
                    type="button"
                    id={questionId}
                    className="services-faq__question"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>

                    <span
                      className="services-faq__icon"
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus size={18} strokeWidth={1.5} />
                      ) : (
                        <Plus size={18} strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  className="services-faq__answer"
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
