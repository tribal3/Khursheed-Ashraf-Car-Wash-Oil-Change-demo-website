import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Reveal from "./Reveal";

const shots = [
  {
    src: "/images/gallery-4.jpg",
    alt: "A worker power-spraying a black luxury car in an indoor wash bay",
    caption: "The snow-foam bath",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Close-up of a hand polishing glossy car paint with a cloth",
    caption: "Hand-finished shine",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "A worker wiping down the paint of a black car",
    caption: "Every panel, by hand",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "A car window covered in thick white wash foam",
    caption: "Foam that lifts the dust",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "A modern SUV covered in soap suds during a wash",
    caption: "SUVs welcome",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "A luxury SUV being washed in a modern indoor car wash",
    caption: "Showroom finish",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const go = useCallback((direction: number) => {
    setActive((current) => {
      if (current === null) return current;
      return (current + direction + shots.length) % shots.length;
    });
  }, []);

  useEffect(() => {
    if (active === null) return;
    document.body.classList.add("lightbox-open");

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("lightbox-open");
    };
  }, [active, close, go]);

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Expand size={14} />
                The gallery
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2>Proof, not promises.</h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="section-head-aside">
            <p>
              A look at the foam, the finish and the little details that make the difference. Tap any
              photo to see it up close.
            </p>
          </Reveal>
        </div>

        <div className="gallery-grid">
          {shots.map((shot, index) => (
            <Reveal className="gallery-item" key={shot.caption} delay={index * 50}>
              <button
                type="button"
                className="gallery-trigger"
                onClick={() => setActive(index)}
                aria-label={`Open image: ${shot.caption}`}
              >
                <img src={shot.src} alt={shot.alt} loading="lazy" width={900} height={900} />
                <span className="gallery-overlay" aria-hidden="true">
                  <span className="gallery-caption">{shot.caption}</span>
                  <Expand size={18} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <button type="button" className="lightbox-backdrop" aria-label="Close viewer" onClick={close} />
          <div className="lightbox-content">
            <button type="button" className="lightbox-close" onClick={close} aria-label="Close viewer">
              <X size={22} />
            </button>
            <img src={shots[active].src} alt={shots[active].alt} />
            <div className="lightbox-caption">
              <span>{shots[active].caption}</span>
              <small>
                {active + 1} / {shots.length}
              </small>
            </div>
            <button
              type="button"
              className="lightbox-nav lightbox-nav--prev"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-nav--next"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
