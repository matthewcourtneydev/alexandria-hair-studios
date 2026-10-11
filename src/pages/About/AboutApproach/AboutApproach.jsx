import scrapbook from '../../../assets/images/scrapbook.png';
import './AboutApproach.css';

export default function AboutApproach() {
  return (
    <section
      className="about-approach"
      aria-labelledby="about-approach-title"
    >
      <div className="about-approach__container">
        <div className="about-approach__content">
          <span className="about-approach__eyebrow">
            A FAMILY TRADITION
          </span>

          <h2
            className="about-approach__title"
            id="about-approach-title"
          >
            It's in
            <span>the roots.</span>
          </h2>

          <div className="about-approach__copy">
            <p>
              For me, beautiful hair has always been a family affair.
              My grandfather spent 40 years behind the barber's chair,
              and my grandmother dedicated more than 20 years to
              doing hair.
            </p>

            <p>
              Growing up surrounded by that passion shaped my own
              love for the beauty industry. What started generations
              ago continues today at Alexandria Hair Studios.
            </p>
          </div>

          <span className="about-approach__closing">
            Different generations. The same love for beautiful hair.
          </span>
        </div>
      </div>
    </section>
  );
}