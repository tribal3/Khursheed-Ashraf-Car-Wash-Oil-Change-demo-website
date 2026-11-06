import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import { GoogleGIcon } from "./BrandIcons";

const reviews = [
  {
    quote:
      "Got the Signature Wash before a wedding and the car looked better than the day I bought it. Finished in under an hour, no fuss at all.",
    name: "Ahmed R.",
    area: "P.E.C.H.S.",
    initials: "AR",
  },
  {
    quote:
      "Honest pricing and no upsell drama. They showed me the old oil filter and explained exactly what my car needed. That kind of trust is rare.",
    name: "Sana K.",
    area: "Bahadurabad",
    initials: "SK",
  },
  {
    quote:
      "I'm a regular for the monthly wash now. Hand wash only, no swirl marks, and the team actually remembers my car. Highly recommended.",
    name: "Bilal H.",
    area: "Tariq Road",
    initials: "BH",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonial-head">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Star size={14} />
                Reviews
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2>Neighbours talk. We listen.</h2>
            </Reveal>
          </div>

          <Reveal delay={120} className="rating-summary">
            <span className="rating-summary-icon">
              <GoogleGIcon size={22} />
            </span>
            <div>
              <strong>4.9</strong>
              <span className="stars" aria-label="Rated 4.9 out of 5">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={13} fill="currentColor" />
                ))}
              </span>
              <small>Based on 180+ local reviews</small>
            </div>
          </Reveal>
        </div>

        <div className="testimonial-grid">
          {reviews.map((review, index) => (
            <Reveal as="article" className="testimonial-card" key={review.name} delay={index * 80}>
              <Quote className="testimonial-quote-icon" size={28} aria-hidden="true" />
              <span className="stars testimonial-stars" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={14} fill="currentColor" />
                ))}
              </span>
              <p className="testimonial-text">{review.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar">{review.initials}</span>
                <div>
                  <strong>{review.name}</strong>
                  <small>{review.area}, Karachi</small>
                </div>
                <span className="testimonial-verified">
                  <GoogleGIcon size={14} />
                  Reviewed
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
