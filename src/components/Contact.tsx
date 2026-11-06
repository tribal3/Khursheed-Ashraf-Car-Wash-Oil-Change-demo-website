import { Banknote, Clock, CreditCard, MapPin, Navigation, Phone, Smartphone } from "lucide-react";
import { business, whatsappLink } from "../lib/business";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./BrandIcons";

const payments = [
  { icon: Banknote, label: "Cash" },
  { icon: CreditCard, label: "Card" },
  { icon: Smartphone, label: "Easypaisa" },
  { icon: Smartphone, label: "JazzCash" },
];

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow">
                <MapPin size={14} />
                Visit the bay
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2>Right around the corner.</h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="section-head-aside">
            <p>
              On Jheel Park Road in Block 2, P.E.C.H.S. — easy to reach, easy to park, and always a
              friendly face at the counter.
            </p>
          </Reveal>
        </div>

        <div className="contact-grid">
          <Reveal className="contact-panel">
            <div className="contact-row">
              <span className="contact-icon">
                <MapPin size={20} />
              </span>
              <div>
                <small>Address</small>
                <p>{business.addressLine}</p>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-icon">
                <Phone size={20} />
              </span>
              <div>
                <small>Phone</small>
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
                <span className="contact-row-sub">Call or WhatsApp — same number</span>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-icon">
                <Clock size={20} />
              </span>
              <div className="contact-hours">
                <small>Opening hours</small>
                {business.hours.map((slot) => (
                  <div className="contact-hours-row" key={slot.day}>
                    <span>{slot.day}</span>
                    <strong>{slot.time}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-payments">
              <small>We accept</small>
              <div className="payment-chips">
                {payments.map((payment) => {
                  const Icon = payment.icon;
                  return (
                    <span className="payment-chip" key={payment.label}>
                      <Icon size={14} />
                      {payment.label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="contact-actions">
              <a className="btn btn-dark" href={business.directionsHref} target="_blank" rel="noreferrer">
                <Navigation size={16} />
                Get directions
              </a>
              <a className="btn btn-outline-dark" href={whatsappLink("Assalam-o-Alaikum! I have a question.")} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={17} />
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-map" delay={100}>
            <iframe
              title="Map showing Khursheed Ashraf Car Wash and Oil Change on Jheel Park Road, P.E.C.H.S., Karachi"
              src={business.mapEmbedHref}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="contact-map-card">
              <span className="contact-map-dot" aria-hidden="true" />
              <div>
                <strong>{business.shortName}</strong>
                <small>{business.addressShort}</small>
              </div>
              <a href={business.directionsHref} target="_blank" rel="noreferrer" aria-label="Open directions in Google Maps">
                <Navigation size={17} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
