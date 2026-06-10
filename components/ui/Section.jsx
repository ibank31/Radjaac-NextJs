import Link from "next/link";
import { typography } from "@/lib/typography";

/**
 * Radja AC shared design-system primitives.
 * One consistent visual language across Showroom / Procurement / Proof modes.
 */

/* Reusable class fragments ------------------------------------------------ */

// Primary CTA — red background, white text (brand accent CTA)
export const ctaPrimaryClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_38px_rgba(214,40,40,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark";

// WhatsApp CTA — stays the main conversion CTA (green)
export const ctaWhatsappClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_38px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-whatsapp-dark";

// Secondary CTA — white surface, navy outline
export const ctaOutlineClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-navy/40 hover:bg-surface-soft";

// Base card — large radius, soft border + shadow, gentle hover
export const cardBaseClass =
  "rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(14,42,71,0.07)]";

export const cardHoverClass =
  "transition hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-[0_22px_60px_rgba(14,42,71,0.12)]";

/* Eyebrow ----------------------------------------------------------------- */

export function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-1.5 ${typography.eyebrow} text-brand-red ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red" aria-hidden="true" />
      {children}
    </span>
  );
}

/* Section header ---------------------------------------------------------- */

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  children,
}) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {title ? (
        <h2 className={`text-balance ${typography.sectionTitle} text-navy`}>
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="text-pretty text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
      ) : null}
      {children}
    </div>
  );
}

/* Buttons ----------------------------------------------------------------- */

export function PrimaryLink({ href, children, className = "" }) {
  return (
    <Link href={href} className={`${ctaPrimaryClass} ${className}`}>
      {children}
    </Link>
  );
}

export function OutlineLink({ href, children, className = "" }) {
  return (
    <Link href={href} className={`${ctaOutlineClass} ${className}`}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
