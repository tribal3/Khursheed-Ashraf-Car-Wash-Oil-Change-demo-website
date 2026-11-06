import { ArrowRight, Phone } from "lucide-react";
import { business } from "../lib/business";
import Reveal from "./Reveal";

type FinalCTAProps = {
  onBook: () => void;
};

export default function FinalCTA({ onBook }: FinalCTAProps) {
  return (
    <section className="final-cta">
      <img src="/images/cta-bg.jpg" alt="" aria-hidden="true" loading="lazy" />
      <div className="final-cta-overlay" aria-hidden="true" />
      <div className="container final-cta-inner">
        <Reveal>
          <span className="eyebrow eyebrow-light">Ready when you are</span>
        </Reveal>
        <Reveal delay={60}>
          <h2>Ready for that showroom feeling?</h2>
        </Reveal>
        <Reveal delay={110}>
          <p>
            Book a wash, book an oil change, or just roll in. We&apos;re on Jheel Park Road, seven days
            a week.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="final-cta-actions">
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
      </div>
    </section>
  );
}
