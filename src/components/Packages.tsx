import { useState } from "react";
import { ArrowRight, Check, Clock, Crown, Sparkles } from "lucide-react";
import { formatPKR } from "../lib/business";
import Reveal from "./Reveal";

type PackagesProps = {
  onBook: (service?: string) => void;
};

type VehicleType = "sedan" | "suv";

type WashPackage = {
  name: string;
  tagline: string;
  price: Record<VehicleType, number>;
  duration: string;
  features: string[];
  featured?: boolean;
};

const packages: WashPackage[] = [
  {
    name: "Express Shine",
    tagline: "The quick weekly reset",
    price: { sedan: 1500, suv: 1800 },
    duration: "25–30 min",
    features: [
      "Exterior snow-foam wash",
      "Hand dry & microfibre finish",
      "Tyre shine",
      "Streak-free glass cleaning",
    ],
  },
  {
    name: "Signature Wash",
    tagline: "Our most-loved package",
    price: { sedan: 2500, suv: 2900 },
    duration: "45–60 min",
    features: [
      "Everything in Express Shine",
      "Interior vacuum & mat cleaning",
      "Dashboard & console wipe-down",
      "Cabin air freshener",
      "Door jambs & fuel cap cleaned",
    ],
    featured: true,
  },
  {
    name: "Full Detail",
    tagline: "The showroom treatment",
    price: { sedan: 6500, suv: 7500 },
    duration: "3–4 hours",
    features: [
      "Everything in Signature Wash",
      "Seat & carpet shampoo",
      "Machine polish & premium wax",
      "Engine bay dressing",
      "Headlight & trim restoration",
    ],
  },
];

export default function Packages({ onBook }: PackagesProps) {
  const [vehicle, setVehicle] = useState<VehicleType>("sedan");

  return (
    <section className="section packages" id="packages">
      <div className="container">
        <div className="packages-head">
          <Reveal>
            <span className="eyebrow">
              <Sparkles size={14} />
              Wash packages
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2>Pick your shine.</h2>
          </Reveal>
          <Reveal delay={110}>
            <p>
              Clear packages, no surprise add-ons. Every wash is done by hand with pH-neutral products
              that are safe for your paint.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="vehicle-toggle" role="group" aria-label="Choose your vehicle size">
              <button
                type="button"
                className={vehicle === "sedan" ? "is-active" : ""}
                onClick={() => setVehicle("sedan")}
                aria-pressed={vehicle === "sedan"}
              >
                Sedan / Hatchback
              </button>
              <button
                type="button"
                className={vehicle === "suv" ? "is-active" : ""}
                onClick={() => setVehicle("suv")}
                aria-pressed={vehicle === "suv"}
              >
                SUV / Crossover
              </button>
            </div>
          </Reveal>
        </div>

        <div className="packages-grid">
          {packages.map((pack, index) => (
            <Reveal
              as="article"
              className={`package-card ${pack.featured ? "is-featured" : ""}`}
              key={pack.name}
              delay={index * 80}
            >
              {pack.featured && (
                <span className="package-badge">
                  <Crown size={13} />
                  Most popular
                </span>
              )}
              <div className="package-top">
                <h3>{pack.name}</h3>
                <p>{pack.tagline}</p>
              </div>
              <div className="package-price">
                <span className="package-currency">PKR</span>
                <span className="package-amount">{formatPKR(pack.price[vehicle]).replace("Rs. ", "")}</span>
                <span className="package-per">/ wash</span>
              </div>
              <span className="package-duration">
                <Clock size={14} />
                {pack.duration}
              </span>
              <ul className="package-features">
                {pack.features.map((feature) => (
                  <li key={feature}>
                    <span className="package-check">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn ${pack.featured ? "btn-primary" : "btn-dark"} package-cta`}
                onClick={() => onBook(pack.name)}
              >
                Book {pack.name}
                <ArrowRight size={16} />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="packages-note">
          <p>
            Prices shown are launch pricing for the demo. Final price may vary with vehicle size and
            condition — we always confirm before starting.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
