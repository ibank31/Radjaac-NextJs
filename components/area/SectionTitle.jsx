import { typography } from "@/lib/typography";
export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className={`mb-3 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 ${typography.eyebrow} text-blue-700`}>
        {eyebrow}
      </p>
      <h2 className={`${typography.sectionTitle} text-slate-950`}>
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
