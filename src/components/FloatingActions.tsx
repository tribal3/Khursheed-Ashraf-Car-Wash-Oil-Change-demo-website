import { ArrowRight, Phone } from "lucide-react";
import { business, whatsappLink } from "../lib/business";
import { WhatsAppIcon } from "./BrandIcons";

type FloatingActionsProps = {
  onBook: () => void;
};

export default function FloatingActions({ onBook }: FloatingActionsProps) {
  return (
    <>
      <a
        className="whatsapp-fab"
        href={whatsappLink("Assalam-o-Alaikum! I'd like to book a car wash.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon size={27} />
        <span className="whatsapp-fab-tooltip">Chat on WhatsApp</span>
      </a>

      <div className="mobile-action-bar">
        <a className="mobile-action mobile-action--call" href={business.phoneHref}>
          <Phone size={18} />
          <span>Call</span>
        </a>
        <a
          className="mobile-action mobile-action--green mobile-action--whatsapp"
          href={whatsappLink("Assalam-o-Alaikum! I'd like to book a car wash.")}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon size={18} />
          <span>WhatsApp</span>
        </a>
        <button type="button" className="mobile-action mobile-action--primary" onClick={onBook}>
          <span>Book a wash</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </>
  );
}
