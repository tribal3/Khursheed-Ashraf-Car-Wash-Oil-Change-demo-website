import { ArrowRight, Check, Clock, Gauge, ShieldCheck, Wrench } from "lucide-react";
import { formatPKR } from "../lib/business";
import Reveal from "./Reveal";

type OilChangeProps = {
  onBook: (service?: string) => void;
};

const checks = [
  "Genuine branded engine oil",
  "New oil filter every time",
  "Fluid top-up & 20-point check",
  "Clean, responsible oil disposal",
];

const oilOptions = [
  { name: "Standard Oil Change", price: 5500, note: "Mineral / semi-synthetic" },
  { name: "Synthetic Oil Change", price: 8900, note: "Full synthetic protection" },
];

export default function OilChange({ onBook }: OilChangeProps) {
  return (
    <section className="section oil-section" id="oil-change">
      <div className="oil-glow" aria-hidden="true" />
      <div className="container oil-grid">
        <Reveal className="oil-media">
          <div className="oil-photo">
            <img
              src="/images/oil-dipstick.jpg"
              alt="Mechanic checking the engine oil level with a dipstick"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
          <div className="oil-photo-small">
            <img
              src="/images/oil-filter.jpg"
              alt="A new oil filter ready to be fitted"
              loading="lazy"
              width={600}
              height={800}
            />
          </div>
          <div className="oil-stat-card">
            <span className="oil-stat-icon">
              <Clock size={20} />
            </span>
            <div>
              <strong>30 min</strong>
              <small>Average oil change</small>
            </div>
          </div>
        </Reveal>

        <div className="oil-copy">
          <Reveal>
            <span className="eyebrow eyebrow-light">
              <Wrench size={14} />
              Oil &amp; filter change
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2>
              Keep the engine
              <br />
              <span className="text-gradient">purring.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="oil-lead">
              We match the right grade of oil to your car, replace the filter and give the engine a
              proper once-over — while you wait in comfort.
            </p>
          </Reveal>

          <Reveal delay={170}>
            <ul className="oil-checks">
              {checks.map((check) => (
                <li key={check}>
                  <span className="oil-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {check}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={220}>
            <div className="oil-options">
              {oilOptions.map((option) => (
                <div className="oil-option" key={option.name}>
                  <div>
                    <strong>{option.name}</strong>
                    <small>{option.note}</small>
                  </div>
                  <span>
                    <small>from</small>
                    {formatPKR(option.price)}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={270}>
            <div className="oil-bottom">
              <button type="button" className="btn btn-primary" onClick={() => onBook("Oil & Filter Change")}>
                Book an oil change
                <ArrowRight size={17} />
              </button>
              <span className="oil-guarantee">
                <ShieldCheck size={16} />
                Genuine parts only
              </span>
            </div>
            <p className="oil-fineprint">
              <Gauge size={14} /> Final price depends on your engine size and chosen oil grade.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
