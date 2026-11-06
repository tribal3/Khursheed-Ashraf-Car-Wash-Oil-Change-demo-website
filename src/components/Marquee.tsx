import { Star } from "lucide-react";

const words = [
  "Hand wash",
  "Snow foam bath",
  "Interior detailing",
  "Oil & filter change",
  "Polish & wax",
  "Engine bay care",
  "Tyre shine",
  "Glass treatment",
];

export default function Marquee() {
  const loop = [...words, ...words];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((word, index) => (
          <span key={`${word}-${index}`} className="marquee-item">
            {word}
            <Star size={13} fill="currentColor" />
          </span>
        ))}
      </div>
    </div>
  );
}
