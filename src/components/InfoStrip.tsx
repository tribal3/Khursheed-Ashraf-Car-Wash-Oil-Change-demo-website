import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { business } from "../lib/business";
import Reveal from "./Reveal";

const items = [
  {
    icon: Clock,
    label: "Open today",
    value: "9:00 AM – 8:00 PM",
  },
  {
    icon: MapPin,
    label: "Find us",
    value: "Jheel Park Rd, P.E.C.H.S.",
  },
  {
    icon: Phone,
    label: "Call the bay",
    value: "0335 1276515",
    href: business.phoneHref,
  },
  {
    icon: ShieldCheck,
    label: "Always",
    value: "Genuine oils & filters",
  },
];

export default function InfoStrip() {
  return (
    <div className="info-strip">
      <div className="container">
        <Reveal>
          <div className="info-strip-card">
            {items.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="info-strip-icon">
                    <Icon size={20} />
                  </span>
                  <span className="info-strip-copy">
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </>
              );

              return item.href ? (
                <a key={item.label} className="info-strip-item" href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label} className="info-strip-item">
                  {content}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
