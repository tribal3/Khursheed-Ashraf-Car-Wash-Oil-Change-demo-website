import {
  ArrowUpRight,
  Droplets,
  Sparkles,
  Droplet,
  Wrench,
  Wind,
  CircleDot,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type ServicesProps = {
  onBook: (service?: string) => void;
};

type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
  price: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Exterior Foam Wash",
    description:
      "A thick snow-foam bath, gentle hand wash and microfibre dry that lifts Karachi dust without touching your paint.",
    image: "/images/svc-exterior.jpg",
    alt: "Snow foam being sprayed onto a car during an exterior wash",
    price: "Rs. 1,500",
    icon: Droplets,
  },
  {
    title: "Interior Detailing",
    description:
      "Deep vacuum, seat and carpet shampoo, dashboard care and a fresh cabin that feels brand new again.",
    image: "/images/svc-interior.jpg",
    alt: "A detailing specialist cleaning the interior seats of a car",
    price: "Rs. 2,500",
    icon: Sparkles,
  },
  {
    title: "Oil & Filter Change",
    description:
      "Genuine oils, quality filters and a quick, honest service that keeps your engine smooth and protected.",
    image: "/images/svc-oil.jpg",
    alt: "Fresh engine oil being poured into a car engine",
    price: "Rs. 5,500",
    icon: Droplet,
  },
  {
    title: "Polish & Wax",
    description:
      "Machine polish and premium wax to restore gloss, deepen the colour and add a layer of real protection.",
    image: "/images/svc-polish.jpg",
    alt: "A detailer polishing the paintwork of a black car",
    price: "Rs. 4,500",
    icon: Sparkles,
  },
  {
    title: "Engine Bay Cleaning",
    description:
      "Careful degreasing and dressing to keep the heart of your car clean, healthy and easy to inspect.",
    image: "/images/svc-engine.jpg",
    alt: "A clean and detailed car engine bay",
    price: "Rs. 2,000",
    icon: Wrench,
  },
  {
    title: "Tyre & Glass Care",
    description:
      "Rim cleaning, rich tyre shine and crystal-clear glass for the finishing touch that changes the whole look.",
    image: "/images/svc-glass.jpg",
    alt: "A car window being cleaned to a streak-free finish",
    price: "Rs. 800",
    icon: CircleDot,
  },
];

export default function Services({ onBook }: ServicesProps) {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Wind size={14} />
                What we do
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2>
                More than a wash.
                <br />
                A full reset.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="section-head-aside">
            <p>
              Six focused services, one standard of care. Whether it&apos;s a quick weekly shine or a
              full interior revival, we treat every car like it&apos;s our own.
            </p>
            <button type="button" className="link-arrow" onClick={() => onBook()}>
              Book any service
              <ArrowUpRight size={17} />
            </button>
          </Reveal>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal as="article" className="service-card" key={service.title} delay={index * 60}>
                <div className="service-media">
                  <img src={service.image} alt={service.alt} loading="lazy" width={800} height={600} />
                  <span className="service-index">0{index + 1}</span>
                  <span className="service-icon">
                    <Icon size={20} />
                  </span>
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-foot">
                    <span className="service-price">
                      <small>from</small>
                      {service.price}
                    </span>
                    <button type="button" className="service-book" onClick={() => onBook(service.title)}>
                      Book now
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="services-note">
          <p>
            Not sure what your car needs? <a href="#contact">Ask the team</a> — we&apos;ll take a look and
            recommend only what&apos;s actually required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
