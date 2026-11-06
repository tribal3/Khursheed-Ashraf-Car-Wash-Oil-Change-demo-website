import { ArrowRight, CalendarDays, Car, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Book or call",
    description:
      "Reserve a slot online or drop us a WhatsApp. Tell us your car and what it needs — we'll suggest the right package.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "We inspect & clean",
    description:
      "Our team checks the paint, interior and fluids first, then gets to work with the right products for your car.",
  },
  {
    icon: Car,
    number: "03",
    title: "Drive out shining",
    description:
      "A final quality check and a quick walkaround with you. You leave with a car that feels brand new.",
  },
];

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="process-head">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Sparkles size={14} />
                How it works
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2>Three steps to a fresher car.</h2>
            </Reveal>
          </div>
          <Reveal delay={110}>
            <a className="link-arrow" href="#book">
              Start a booking
              <ArrowRight size={17} />
            </a>
          </Reveal>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal as="article" className="process-card" key={step.number} delay={index * 80}>
                <span className="process-number" aria-hidden="true">
                  {step.number}
                </span>
                <span className="process-icon">
                  <Icon size={24} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
