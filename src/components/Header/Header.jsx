import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const navigation = [
  { label: "Services", path: "/services" },
  { label: "Lookbook", path: "/lookbook" },
  { label: "Hair Edit", path: "/hair-edit" },
  { label: "About", path: "/about" },
  { label: "New Clients", path: "/new-clients" },
  { label: "Policies", path: "/policies" },
];

const BOOKING_URL = "https://alexandria-hair-studios.square.site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`site-header ${
        scrolled || menuOpen ? "site-header--scrolled" : ""
      }`}
    >
      <div className="site-header__inner">
        <Link
          to="/"
          className="site-header__logo"
          onClick={() => setMenuOpen(false)}
          aria-label="Alexandria Hair Studios home"
        >
          <img src={logo} alt="" className="site-header__logo-image" />
        </Link>

        <nav className="site-header__nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `site-header__link ${isActive ? "is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="site-header__booking"
        >
          Book Now
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </a>

        <button
          className="site-header__toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        <div className="mobile-nav__links">
          {navigation.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav__number">0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={22} strokeWidth={1} />
            </NavLink>
          ))}
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-nav__booking"
          onClick={() => setMenuOpen(false)}
        >
          Book Your Appointment
          <ArrowUpRight size={18} />
        </a>

        <span className="mobile-nav__location">CHARLOTTE, NORTH CAROLINA</span>
      </nav>
    </header>
  );
}
