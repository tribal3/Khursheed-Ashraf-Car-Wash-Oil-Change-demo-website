import { ArrowUp, MapPin, Phone } from "lucide-react";
import { business, navLinks } from "../lib/business";
import Logo from "./Logo";
import { WhatsAppIcon } from "./BrandIcons";

const currentYear = new Date().getFullYear();

const serviceLinks = [
  "Exterior Foam Wash",
  "Interior Detailing",
  "Oil & Filter Change",
  "Polish & Wax",
  "Engine Bay Cleaning",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            A neighbourhood car care studio in the heart of P.E.C.H.S. Hand wash, honest oil changes and
            a finish you&apos;ll notice every morning.
          </p>
          <div className="footer-actions">
            <a
              className="footer-action footer-action--green"
              href={business.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={17} />
              WhatsApp
            </a>
            <a className="footer-action" href={business.phoneHref}>
              <Phone size={16} />
              Call
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            {serviceLinks.map((service) => (
              <li key={service}>
                <a href="#services">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-visit">
          <h3>Visit us</h3>
          <a className="footer-contact-row" href={business.directionsHref} target="_blank" rel="noreferrer">
            <MapPin size={17} />
            <span>
              V3C6+JXQ, Jheel Park Rd,
              <br />
              Block 2 P.E.C.H.S., Karachi
            </span>
          </a>
          <a className="footer-contact-row" href={business.phoneHref}>
            <Phone size={17} />
            <span>{business.phoneDisplay}</span>
          </a>
          <div className="footer-hours">
            <span>Mon–Sat · 9:00 AM – 8:00 PM</span>
            <span>Sunday · 10:00 AM – 6:00 PM</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {currentYear} {business.fullName}. All rights reserved.
        </p>
        <p className="footer-demo">
          Demo concept website — prices, hours and reviews are illustrative.
        </p>
        <a className="footer-top" href="#top">
          Back to top
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
