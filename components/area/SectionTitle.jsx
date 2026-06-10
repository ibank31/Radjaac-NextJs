export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl lg:text-[1.75rem]">
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
