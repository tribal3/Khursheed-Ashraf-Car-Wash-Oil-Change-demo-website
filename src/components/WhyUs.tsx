import { Armchair, Award, BadgeCheck, Hand, ShieldCheck, ThumbsUp, Timer } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Hand,
    title: "Scratch-free hand wash",
    description: "Two-bucket method, soft microfibre and pH-neutral foam. No harsh brushes, ever.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine oils & filters",
    description: "Branded products matched to your engine — not the cheapest drum in the market.",
  },
  {
    icon: BadgeCheck,
    title: "Honest fixed pricing",
    description: "You approve the price before we start. No mystery charges at the counter.",
  },
  {
    icon: Timer,
    title: "Quick, careful turnaround",
    description: "Express washes in 30 minutes, with a comfortable lounge while you wait.",
  },
];

const stats = [
  { value: "10+", label: "Years in P.E.C.H.S." },
  { value: "12k+", label: "Cars cared for" },
  { value: "4.9", label: "Average local rating" },
];

export default function WhyUs() {
  return (
    <section className="section why" id="about">
      <div className="container why-grid">
        <Reveal className="why-media">
          <div className="why-photo">
            <img
              src="/images/about-wash.jpg"
              alt="A team member power-spraying a luxury car inside the car wash bay"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
          <div className="why-photo-small">
            <img
              src="/images/svc-interior.jpg"
              alt="Interior of a car being carefully cleaned"
              loading="lazy"
              width={600}
              height={600}
            />
          </div>
          <div className="why-badge">
            <span className="why-badge-icon">
              <Award size={22} />
            </span>
            <div>
              <strong>Since 2015</strong>
              <small>Trusted in the neighbourhood</small>
            </div>
          </div>
        </Reveal>

        <div className="why-copy">
          <Reveal>
            <span className="eyebrow">
              <ThumbsUp size={14} />
              Why Karachi trusts us
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2>
              A neighbourhood bay.
              <br />
              A showroom standard.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="why-lead">
              We&apos;re the car care stop your neighbours actually recommend. Same team, same care,
              every single visit — whether it&apos;s a daily driver or a weekend classic.
            </p>
          </Reveal>

          <div className="why-features">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal className="why-feature" key={feature.title} delay={index * 60}>
                  <span className="why-feature-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={220}>
            <div className="why-stats">
              {stats.map((stat) => (
                <div className="why-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
              <span className="why-stats-lounge">
                <Armchair size={16} />
                Waiting lounge
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
