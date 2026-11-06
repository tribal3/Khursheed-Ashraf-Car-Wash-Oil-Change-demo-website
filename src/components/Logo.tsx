import { CarWashMark } from "./BrandIcons";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export default function Logo({ variant = "light", compact = false }: LogoProps) {
  return (
    <a
      href="#top"
      className={`logo logo--${variant} ${compact ? "logo--compact" : ""}`}
      aria-label="Khursheed Ashraf Car Wash and Oil Change — back to top"
    >
      <span className="logo-mark">
        <CarWashMark size={24} />
      </span>
      <span className="logo-text">
        <strong>Khursheed Ashraf</strong>
        <small>Car Wash &amp; Oil Change</small>
      </span>
    </a>
  );
}
