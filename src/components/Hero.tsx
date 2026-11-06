import { ArrowRight, ArrowUpRight, BadgeCheck, Clock, MapPin, Phone, Star } from "lucide-react";
import { business } from "../lib/business";
import Reveal from "./Reveal";
import { GoogleGIcon } from "./BrandIcons";

type HeroProps = {
  onBook: () => void;
};

export default function Hero({ onBook }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow eyebrow-light">
              <MapPin size={14} />
              Jheel Park Road, P.E.C.H.S. · Karachi
            </span>
          </Reveal>

          <Reveal delay={70}>
            <h1>
              Karachi dust
              <br />
              doesn&apos;t stand
              <br />
              <span className="text-gradient">a chance.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero-lead">
              Premium hand car wash, deep interior detailing and honest oil changes — all under one roof
              in the heart of P.E.C.H.S.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary btn-lg" onClick={onBook}>
                Book a wash
                <ArrowRight size={18} />
              </button>
              <a className="btn btn-outline-light btn-lg" href={business.phoneHref}>
                <Phone size={17} />
                {business.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="hero-proof">
              <div className="hero-proof-item">
                <span className="hero-proof-value">4.9</span>
                <span className="hero-proof-label">
                  <span className="stars" aria-label="Rated 4.9 out of 5">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} size={12} fill="currentColor" />
                    ))}
                  </span>
                  Local rating
                </span>
              </div>
              <div className="hero-proof-item">
                <span className="hero-proof-value">12k+</span>
                <span className="hero-proof-label">Cars cleaned</span>
              </div>
              <div className="hero-proof-item">
                <span className="hero-proof-value">30<span>min</span></span>
                <span className="hero-proof-label">Express wash</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-media" delay={180}>
          <div className="hero-photo">
            <img
              src="/images/hero-car-wash.jpg"
              alt="A black car covered in thick snow foam during a premium hand wash"
              width={1200}
              height={800}
              fetchPriority="high"
            />
            <div className="hero-photo-overlay" aria-hidden="true" />
            <span className="hero-chip">
              <Clock size={14} />
              In and out in 30 minutes
            </span>
            <span className="hero-chip hero-chip--bottom">
              <BadgeCheck size={14} />
              Genuine oils &amp; filters
            </span>
          </div>

          <div className="hero-rating-card">
            <span className="hero-rating-logo">
              <GoogleGIcon size={22} />
            </span>
            <div>
              <strong>4.9 / 5</strong>
              <span>Loved by P.E.C.H.S. drivers</span>
            </div>
            <span className="hero-rating-stars">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} size={12} fill="currentColor" />
              ))}
            </span>
          </div>

          <a className="hero-directions" href={business.directionsHref} target="_blank" rel="noreferrer">
            <span className="hero-directions-icon">
              <MapPin size={17} />
            </span>
            <span>
              <strong>Find the bay</strong>
              <small>Jheel Park Rd, Block 2</small>
            </span>
            <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
