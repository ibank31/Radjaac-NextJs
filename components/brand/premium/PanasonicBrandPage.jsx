import Link from "next/link";

import { routes } from "@/content/routes";
import { typography } from "@/lib/typography";
import { panasonicPremiumContent as content } from "@/content/brand-panasonic";
import WhatsappLink from "@/components/ui/WhatsappLink";
import JsonLd from "@/components/seo/JsonLd";

// Dedicated Panasonic layout — mirrors the premium source order:
// Hero (text-only) -> Garansi -> Kapasitas & Harga -> Kenapa Panasonic
// -> Pilihan/Rekomendasi -> Checklist -> Use Case -> FAQ -> Closing CTA.
// No certificate section, no product images, no internal-links/PK-table sections.

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className={`mb-3 ${typography.eyebrow} text-blue-700`}>{eyebrow}</p> : null}
      <h2 className={`mb-4 ${typography.sectionTitle} text-slate-950`}>{title}</h2>
      {description ? <p className={`${typography.body} text-slate-600`}>{description}</p> : null}
    </div>
  );
}

export default function PanasonicBrandPage({ item, faqItems, structuredData }) {
  const { hero, warranty, price, character, recommendations, checklist, useCase, faq, closing } = content;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <JsonLd data={structuredData} />

      {/* HERO (text-only) */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_32%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className={`mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 ${typography.eyebrow} text-blue-800 shadow-sm backdrop-blur`}>
            <span className="h-2 w-2 rounded-full bg-[#4984B8]" /> {hero.badge}
          </div>

          <div className="mb-5 text-sm text-slate-500">
            <Link href={routes.home} className="transition hover:text-blue-700">Beranda</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{hero.breadcrumbLabel}</span>
          </div>

          <h1 className={`mb-5 max-w-3xl ${typography.heroTitle} text-slate-950`}>
            {hero.titleLead}
            <span className="block text-blue-700">{hero.titleHighlight}</span>
          </h1>

          <p className={`mb-7 max-w-3xl ${typography.body} text-slate-600`}>{hero.paragraph}</p>

          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-extrabold text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
              source="Brand Panasonic - Hero"
              intent={item.waIntent}
              brand={item.waBrand}
              pageType="brand"
            >
              {hero.primaryCtaLabel}
            </WhatsappLink>
            <a href={hero.secondaryCtaHref} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
              {hero.secondaryCtaLabel}
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            {hero.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-1 font-bold text-slate-700 shadow-sm">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GARANSI */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading eyebrow={warranty.eyebrow} title={warranty.title} description={warranty.description} />
        <div className="grid gap-5 md:grid-cols-3">
          {warranty.cards.map((card) => (
            <div key={card.title} className="rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">✓</div>
              <h3 className={`mb-3 text-base ${typography.button} text-slate-950`}>{card.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KAPASITAS & HARGA */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className={`mb-3 ${typography.eyebrow} text-blue-700`}>{price.capacity.eyebrow}</div>
            <h2 className={`mb-4 ${typography.sectionTitle} text-slate-950`}>{price.capacity.title}</h2>
            <p className={`mb-5 ${typography.body} text-slate-600`}>{price.capacity.description}</p>
            <div className="grid gap-3">
              {price.capacity.options.map((option) => (
                <div key={option} className="flex gap-3 rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-extrabold text-white">✓</span>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className={`mb-3 ${typography.eyebrow} text-blue-700`}>{price.eyebrow}</div>
            <h2 className={`mb-4 ${typography.sectionTitle} text-slate-950`}>{price.title}</h2>
            <p className={`mb-5 ${typography.body} text-slate-600`}>{price.description}</p>
            <div className="grid gap-3">
              {price.tiers.map(([label, value, note]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4">
                  <div className="mb-1 text-sm font-semibold text-blue-700">{label}</div>
                  <div className="mb-1 text-2xl font-extrabold text-slate-950">{value}</div>
                  <p className="text-sm leading-6 text-slate-600">{note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-500">{price.footnote}</p>
          </div>
        </div>
      </section>

      {/* KENAPA PANASONIC */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading title={character.title} description={character.description} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {character.items.map((benefit) => (
            <div key={benefit} className="rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200">
              <p className="text-sm leading-7 text-slate-600">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PILIHAN / REKOMENDASI */}
      <section id={recommendations.anchorId} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading title={recommendations.title} description={recommendations.description} />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {recommendations.cards.map((card) => (
            <article key={card.title} className="flex flex-col rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,39,66,0.10)]">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className={`${typography.cardTitle} text-slate-950`}>{card.title}</h3>
                <span className="shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{card.badge}</span>
              </div>
              <p className="mb-5 text-sm leading-7 text-slate-600">{card.description}</p>
              <WhatsappLink
                className="mt-auto inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source={`Brand Panasonic - ${card.title}`}
                intent={item.waIntent}
                brand={item.waBrand}
                pageType="brand"
              >
                {recommendations.ctaLabel}
              </WhatsappLink>
            </article>
          ))}
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading eyebrow={checklist.eyebrow} title={checklist.title} description={checklist.description} />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {checklist.items.map((point) => (
            <div key={point} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
              <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-extrabold text-white">✓</span>
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* USE CASE */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading title={useCase.title} />
        <div className="grid gap-5 md:grid-cols-2">
          {useCase.items.map((useCaseItem) => (
            <div key={useCaseItem.title} className="rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className={`mb-3 ${typography.cardTitle} text-blue-700`}>{useCaseItem.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{useCaseItem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqItems.map(([question, answer]) => (
            <article key={question} className="rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-extrabold text-slate-950">{question}</h3>
              <p className="text-sm leading-7 text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-10">
          <h2 className={`mx-auto mb-5 max-w-3xl ${typography.sectionTitle} text-slate-950`}>{closing.title}</h2>
          <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-700">{closing.description}</p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-extrabold text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
            source="Brand Panasonic - Closing CTA"
            intent={item.waIntent}
            brand={item.waBrand}
            pageType="brand"
          >
            {closing.buttonLabel}
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
