import { useState } from "react";
import { Phone, Sparkles, X } from "lucide-react";
import { business } from "../lib/business";

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="announcement">
      <div className="container announcement-inner">
        <p className="announcement-message">
          <Sparkles size={15} aria-hidden="true" />
          <span>
            Launch offer — <strong>15% off</strong> your first Signature Wash
          </span>
          <span className="announcement-code">WEB15</span>
        </p>
        <a className="announcement-phone" href={business.phoneHref}>
          <Phone size={14} aria-hidden="true" />
          {business.phoneDisplay}
        </a>
        <button
          type="button"
          className="announcement-close"
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
