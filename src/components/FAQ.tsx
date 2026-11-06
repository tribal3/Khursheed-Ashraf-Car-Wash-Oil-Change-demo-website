import { useState } from "react";
import { ArrowUpRight, HelpCircle, Minus, Plus } from "lucide-react";
import { business } from "../lib/business";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "Walk-ins are welcome, but weekends and evenings fill up fast. A quick call or online request saves you the wait — we'll hold a slot and confirm by phone.",
  },
  {
    question: "How long does a wash take?",
    answer:
      "An Express Shine takes around 25–30 minutes. Signature Wash is about 45–60 minutes, and a Full Detail usually takes 3–4 hours. We'll give you a realistic time before starting.",
  },
  {
    question: "Is hand washing safe for my paint?",
    answer:
      "Yes. We use the two-bucket method, soft microfibre towels and pH-neutral snow foam. No spinning brushes and no harsh detergents — that's how we avoid swirl marks.",
  },
  {
    question: "Which oil should I choose?",
    answer:
      "It depends on your car's age, engine and manufacturer recommendation. Our team will check your manual and current oil, then suggest the right grade — mineral, semi-synthetic or full synthetic.",
  },
  {
    question: "Do you offer monthly packages?",
    answer:
      "Yes. Regular customers can choose a monthly wash plan with discounted rates and priority slots. Call or message us on WhatsApp for the current plans.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Cash, debit/credit cards, Easypaisa and JazzCash are all accepted. Payment is made at the counter after the service — no online prepayment required.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <Reveal>
            <span className="eyebrow">
              <HelpCircle size={14} />
              Good to know
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2>Questions, answered.</h2>
          </Reveal>
          <Reveal delay={110}>
            <p>
              Still not sure about something? Give us a call — we&apos;re happy to talk cars and
              recommend what&apos;s actually worth doing.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="faq-contact">
              <div>
                <small>Talk to a human</small>
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
              </div>
              <a className="faq-call" href={business.phoneHref} aria-label="Call the car wash">
                <ArrowUpRight size={19} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <Reveal className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question} delay={index * 40}>
                <h3>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">{isOpen ? <Minus size={17} /> : <Plus size={17} />}</span>
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                >
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
