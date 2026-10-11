
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

import { site } from '../../data/site';
import logo from '../../assets/images/logo.png';

import './Footer.css';

const footerNavigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Lookbook', to: '/lookbook' },
  { label: 'Hair Edit', to: '/hair-edit' },
  { label: 'About', to: '/about' },
  { label: 'New Clients', to: '/new-clients' },
  { label: 'Policies', to: '/policies' },
];

const studioHours = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '11:00 AM – 7:00 PM' },
  { day: 'Wednesday', hours: '11:00 AM – 7:00 PM' },
  { day: 'Thursday', hours: '11:00 AM – 7:00 PM' },
  { day: 'Friday', hours: '10:30 AM – 6:30 PM' },
  { day: 'Saturday', hours: '11:30 AM – 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(
    'Alexandria Hair Studios, 6832 Carnegie Blvd STE #200 Suite 23, Charlotte, NC 28211'
  );

const TIKTOK_URL =
  'https://www.tiktok.com/@alexandria.elizabeth';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__container">

        {/* MAIN FOOTER */}
        <div className="site-footer__main">

          {/* BRAND */}
          <div className="site-footer__brand">
            <Link
              to="/"
              className="site-footer__logo"
              aria-label="Alexandria Hair Studios home"
            >
              <img
                src={logo}
                alt="Alexandria Hair Studios"
              />
            </Link>

            <p className="site-footer__tagline">
              Beautiful hair. Good conversation.
              <br />
              A little bit of magic.
            </p>

            <span className="site-footer__location">
              CHARLOTTE, NORTH CAROLINA
            </span>

            <div className="site-footer__socials">
              {site.instagramUrl && (
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @alexdidmycolor"
                >
                  <FaInstagram
                    size={18}
                    aria-hidden="true"
                  />
                </a>
              )}

              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @alexandria.elizabeth"
              >
                <FaTiktok
                  size={17}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* FOOTER LINKS */}
          <div className="site-footer__links">

            {/* EXPLORE */}
            <div className="site-footer__column">
              <h2>EXPLORE</h2>

              <nav aria-label="Footer navigation">
                {footerNavigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* VISIT */}
            <div className="site-footer__column site-footer__visit">
              <h2>VISIT THE STUDIO</h2>

              <address className="site-footer__address">
                <strong>Alexandria Hair Studios</strong>

                <span>
                  6832 Carnegie Blvd
                  <br />
                  STE #200, Suite 23
                  <br />
                  Charlotte, NC 28211
                </span>
              </address>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__directions"
              >
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Get Directions
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                />
              </a>

              {site.bookingUrl && (
                <div className="site-footer__visit-cta">
                  <span>YOUR NEXT GREAT HAIR DAY</span>

                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__booking"
                  >
                    Book an Appointment
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              )}
            </div>

            {/* HOURS */}
            <div className="site-footer__column site-footer__hours-column">
              <h2>STUDIO HOURS</h2>

              <dl className="site-footer__hours">
                {studioHours.map(({ day, hours }) => (
                  <div
                    className="site-footer__hours-row"
                    key={day}
                  >
                    <dt>{day}</dt>
                    <dd>{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="site-footer__bottom">
          <span className="site-footer__copyright">
            © {year} ALEXANDRIA HAIR STUDIOS.
            ALL RIGHTS RESERVED.
          </span>

          <div className="site-footer__bottom-right">
            <span className="site-footer__made-in">
              MADE WITH LOVE IN CHARLOTTE, NC
            </span>

            <span
              className="site-footer__bottom-divider"
              aria-hidden="true"
            />

            {site.portfolioUrl && site.portfolioUrl !== '#' ? (
              <a
                href={site.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__credit"
                aria-label="Website designed and developed by Matthew Courtney"
              >
                WEBSITE BY
                <span>MATTHEW COURTNEY</span>
                <ArrowUpRight
                  size={12}
                  aria-hidden="true"
                />
              </a>
            ) : (
              <span className="site-footer__credit">
                WEBSITE BY
                <span>MATTHEW COURTNEY</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
