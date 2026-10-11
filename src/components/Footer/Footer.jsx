import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

import { site } from '../../data/site';

import './Footer.css';

const footerNavigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Lookbook', to: '/lookbook' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link
              to="/"
              className="site-footer__logo"
              aria-label="Alexandria Hair Studios home"
            >
              AHS<span>.</span>
            </Link>

            <p>
              Beautiful hair. Good conversation.
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
                  aria-label="Alex on Instagram, @alexdidmycolor"
                >
                  <FaInstagram size={19} aria-hidden="true" />
                </a>
              )}

              {site.tiktokUrl && site.tiktokUrl !== '#' ? (
                <a
                  href={site.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Alex on TikTok"
                >
                  <FaTiktok size={18} aria-hidden="true" />
                </a>
              ) : (
                <span
                  className="site-footer__social-disabled"
                  aria-label="TikTok coming soon"
                  title="TikTok coming soon"
                >
                  <FaTiktok size={18} aria-hidden="true" />
                </span>
              )}
            </div>
          </div>

          <div className="site-footer__links">
            <div className="site-footer__column">
              <h2>EXPLORE</h2>

              <nav aria-label="Footer navigation">
                {footerNavigation.map((item) => (
                  <Link key={item.to} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="site-footer__column">
              <h2>CONNECT</h2>

              {site.instagramUrl && (
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}

              {site.tiktokUrl && site.tiktokUrl !== '#' ? (
                <a
                  href={site.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ) : (
                <span className="site-footer__coming-soon">
                  TikTok — Coming Soon
                </span>
              )}

              {site.amazonUrl && site.amazonUrl !== '#' && (
                <a
                  href={site.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Hair Edit
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
            </div>

            <div className="site-footer__column">
              <h2>YOUR NEXT VISIT</h2>

              <p>Ready for your next great hair day?</p>

              {site.bookingUrl && (
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__booking"
                >
                  Book an Appointment
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span className="site-footer__copyright">
            © {year} ALEXANDRIA HAIR STUDIOS. ALL RIGHTS RESERVED.
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
                <ArrowUpRight size={12} aria-hidden="true" />
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