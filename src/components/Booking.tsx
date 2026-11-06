import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleCheck,
  Clock,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { business, whatsappLink } from "../lib/business";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./BrandIcons";

type BookingProps = {
  selectedService: string;
  onServiceChange: (service: string) => void;
};

const serviceOptions = [
  "Express Shine",
  "Signature Wash",
  "Full Detail",
  "Exterior Foam Wash",
  "Interior Detailing",
  "Oil & Filter Change",
  "Polish & Wax",
  "Engine Bay Cleaning",
  "Tyre & Glass Care",
  "Not sure — advise me",
];

const vehicleOptions = ["Sedan / Hatchback", "SUV / Crossover", "Other / Commercial"];

const timeOptions = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

const initialForm = {
  name: "",
  phone: "",
  service: "Signature Wash",
  vehicle: "Sedan / Hatchback",
  date: "",
  time: "10:00 AM",
  notes: "",
};

const today = new Date().toISOString().split("T")[0];

export default function Booking({ selectedService, onServiceChange }: BookingProps) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [syncedService, setSyncedService] = useState(selectedService);

  if (selectedService !== syncedService) {
    setSyncedService(selectedService);
    setForm((current) => ({ ...current, service: selectedService }));
    setSubmitted(false);
  }

  const update = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (field === "service") onServiceChange(value);
  };

  const message = `Assalam-o-Alaikum Khursheed Ashraf Car Wash! I'd like to book ${form.service} for my ${form.vehicle} on ${form.date || "my preferred date"} at ${form.time}. Name: ${form.name || "—"}. Phone: ${form.phone || "—"}.${form.notes ? ` Notes: ${form.notes}` : ""}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ ...initialForm, service: selectedService });
    setSubmitted(false);
  };

  return (
    <section className="section booking" id="book">
      <div className="booking-glow" aria-hidden="true" />
      <div className="container booking-grid">
        <div className="booking-copy">
          <Reveal>
            <span className="eyebrow eyebrow-light">
              <CalendarDays size={14} />
              Book a slot
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2>
              Give your car
              <br />
              <span className="text-gradient">a day off.</span>
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="booking-lead">
              Tell us a little about your car and pick a time that works. We&apos;ll call you back to
              confirm — usually within 15 minutes during opening hours.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="booking-contact-cards">
              <a className="booking-contact-card" href={business.phoneHref}>
                <span className="booking-contact-icon">
                  <Phone size={19} />
                </span>
                <div>
                  <small>Prefer to call?</small>
                  <strong>{business.phoneDisplay}</strong>
                </div>
                <ArrowRight size={17} />
              </a>
              <a
                className="booking-contact-card"
                href={whatsappLink("Assalam-o-Alaikum! I'd like to book a car wash.")}
                target="_blank"
                rel="noreferrer"
              >
                <span className="booking-contact-icon booking-contact-icon--green">
                  <WhatsAppIcon size={19} />
                </span>
                <div>
                  <small>WhatsApp us</small>
                  <strong>Chat with the team</strong>
                </div>
                <ArrowRight size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={210}>
            <div className="booking-hours">
              <span className="booking-hours-icon">
                <Clock size={18} />
              </span>
              <div>
                <strong>Open 7 days</strong>
                <p>Mon–Sat 9:00 AM – 8:00 PM · Sun 10:00 AM – 6:00 PM</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <ul className="booking-perks">
              <li>
                <Check size={14} strokeWidth={3} /> No online payment needed
              </li>
              <li>
                <Check size={14} strokeWidth={3} /> Free condition check
              </li>
              <li>
                <Check size={14} strokeWidth={3} /> Pay at the counter
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="booking-card" delay={120}>
          {submitted ? (
            <div className="booking-success">
              <span className="booking-success-icon">
                <CircleCheck size={34} />
              </span>
              <h3>Request noted{form.name ? `, ${form.name.split(" ")[0]}` : ""}!</h3>
              <p>
                We&apos;ll call <strong>{form.phone}</strong> shortly to confirm your slot. Want an
                instant reply? Send the same details on WhatsApp.
              </p>

              <dl className="booking-summary">
                <div>
                  <dt>Service</dt>
                  <dd>{form.service}</dd>
                </div>
                <div>
                  <dt>Vehicle</dt>
                  <dd>{form.vehicle}</dd>
                </div>
                <div>
                  <dt>Preferred</dt>
                  <dd>
                    {form.date || "Flexible"} · {form.time}
                  </dd>
                </div>
              </dl>

              <a
                className="btn btn-whatsapp btn-block"
                href={whatsappLink(message)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={18} />
                Confirm on WhatsApp
              </a>
              <button type="button" className="booking-reset" onClick={reset}>
                Make another booking
              </button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="booking-form-head">
                <span className="booking-form-icon">
                  <Sparkles size={18} />
                </span>
                <div>
                  <h3>Request your slot</h3>
                  <p>Takes less than a minute.</p>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="booking-name">Your name</label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Ali Khan"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="booking-phone">Phone number</label>
                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    placeholder="03XX XXXXXXX"
                    autoComplete="tel"
                    pattern="[0-9+\-\s()]{10,}"
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="booking-service">Service</label>
                  <select
                    id="booking-service"
                    name="service"
                    value={form.service}
                    onChange={(event) => update("service", event.target.value)}
                  >
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="booking-vehicle">Vehicle</label>
                  <select
                    id="booking-vehicle"
                    name="vehicle"
                    value={form.vehicle}
                    onChange={(event) => update("vehicle", event.target.value)}
                  >
                    {vehicleOptions.map((vehicle) => (
                      <option key={vehicle} value={vehicle}>
                        {vehicle}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="booking-date">Preferred date</label>
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(event) => update("date", event.target.value)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="booking-time">Preferred time</label>
                  <select
                    id="booking-time"
                    name="time"
                    value={form.time}
                    onChange={(event) => update("time", event.target.value)}
                  >
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="booking-notes">
                  Anything we should know? <span>Optional</span>
                </label>
                <textarea
                  id="booking-notes"
                  name="notes"
                  rows={3}
                  placeholder="Car model, stains, preferred oil grade..."
                  value={form.notes}
                  onChange={(event) => update("notes", event.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block btn-lg">
                <Send size={17} />
                Request my slot
              </button>

              <p className="booking-form-note">
                <MessageCircle size={13} />
                Demo website — no data is stored. For a real booking, call or WhatsApp us.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
