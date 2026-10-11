import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { signatureServices } from "../../../data/services";
import "./SignatureServices.css";

const services = [
  {
    number: "01",
    title: "Blonding",
    description: "Soft, lived-in highlights and bright, dimensional blondes.",
  },
  {
    number: "02",
    title: "Dimensional Color",
    description: "Rich brunette tones, seamless highlights, and natural depth.",
  },
  {
    number: "03",
    title: "Extensions",
    description:
      "Personalized length and fullness for effortless-looking hair.",
  },
  {
    number: "04",
    title: "Finishing",
    description: "Polished styling and thoughtful finishing touches.",
  },
];

export default function SignatureServices() {
  return (
    <section
      className="signature-services"
      aria-labelledby="signature-services-title"
    >
      <div className="signature-services__container page-container">
        <div className="signature-services__header">
          <div className="signature-services__heading">
            <span className="signature-services__eyebrow">WHAT WE DO / 01</span>

            <h2 id="signature-services-title">
              Our <em>services.</em>
            </h2>
          </div>

          <div className="signature-services__header-aside">
            <p className="signature-services__aside-lead">
              Personalized hair, thoughtfully created.
            </p>

            <p>
              From lived-in blondes and dimensional color to extensions and
              finishing, every service is tailored to your hair, your goals, and
              your lifestyle.
            </p>

            <p>
              Whether you're looking for a subtle refresh or something
              completely new, the focus is always on beautiful, wearable results
              that feel like you.
            </p>
          </div>
        </div>

        <div className="signature-services__grid">
          {services.map((service, index) => {
            const image = signatureServices[index];

            return (
              <article
                key={service.number}
                className="signature-services__item"
              >
                <Link
                  to="/services"
                  className="signature-services__image-link"
                  aria-label={`Explore ${service.title} services`}
                >
                  <div className="signature-services__image">
                    {image?.image ? (
                      <img
                        src={image.image}
                        alt={
                          image.alt ||
                          `${service.title} hair inspiration at Alexandria Hair Studios`
                        }
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div
                        className="signature-services__placeholder"
                        aria-hidden="true"
                      >
                        AHS.
                      </div>
                    )}
                  </div>
                </Link>

                <div className="signature-services__item-content">
                  <div className="signature-services__item-heading">
                    <span className="signature-services__number">
                      {service.number}
                    </span>

                    <h3>
                      <Link to="/services">{service.title}</Link>
                    </h3>
                  </div>

                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
