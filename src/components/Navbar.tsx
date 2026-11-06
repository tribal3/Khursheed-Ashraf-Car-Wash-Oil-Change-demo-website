import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "../lib/business";
import Logo from "./Logo";
import { WhatsAppIcon } from "./BrandIcons";

type NavbarProps = {
  onBook: () => void;
};

export default function Navbar({ onBook }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleBook = () => {
    closeMenu();
    onBook();
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={business.phoneHref}>
            <span className="header-phone-icon">
              <Phone size={15} />
            </span>
            <span className="header-phone-copy">
              <small>Call the bay</small>
              <strong>{business.phoneDisplay}</strong>
            </span>
          </a>
          <button type="button" className="btn btn-primary btn-sm header-book" onClick={onBook}>
            Book a wash
            <ArrowUpRight size={16} />
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a key={link.href} href={link.href} onClick={closeMenu} style={{ transitionDelay: `${index * 35}ms` }}>
              <span>0{index + 1}</span>
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <p>{business.addressLine}</p>
          <div className="mobile-menu-actions">
            <a className="btn btn-primary" href={business.phoneHref} onClick={closeMenu}>
              <Phone size={16} /> Call now
            </a>
            <a
              className="btn btn-outline-light"
              href={business.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <WhatsAppIcon size={17} /> WhatsApp
            </a>
          </div>
          <button type="button" className="mobile-menu-book" onClick={handleBook}>
            Or request a slot online
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {menuOpen && <button type="button" className="menu-backdrop" aria-label="Close menu" onClick={closeMenu} />}
    </header>
  );
}
