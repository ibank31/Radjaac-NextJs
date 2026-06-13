import Image from "next/image";
import Link from "next/link";

import { routes } from "@/content/routes";
import { typography } from "@/lib/typography";
import { daikinPremiumContent } from "@/content/brand-daikin";
import WhatsappLink from "@/components/ui/WhatsappLink";
import JsonLd from "@/components/seo/JsonLd";

const content = daikinPremiumContent;

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const wrapper = align === "center" ? "mx-auto mb-9 max-w-3xl text-center" : "mb-8 max-w-3xl";

  return (
    <div className={wrapper}>
      <p className={`mb-3 ${typography.eyebrow} text-blue-700`}>{eyebrow}</p>
      <h2 className={`mb-4 ${typography.sectionTitle} text-slate-950`}>{title}</h2>
      {description ? (
        <p className={`${align === "center" ? "mx-auto max-w-2xl " : ""}${typography.body} text-slate-600`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function DaikinBrandPage({ item, faqItems, structuredData }) {
  const { hero, urgentCta, warranty, warrantyTrust, priceSection, priceTiers, authorizedDealer } = content;
  const { brandCharacterSection, brandCharacter, productsSection, products } = content;
  const { checklistSection, buyingChecklist, pkSection, pkGuide, pkCta } = content;
  const { internalLinksSection, internalLinks, closingCta } = content;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <JsonLd data={structuredData} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <div className={`mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 ${typography.eyebrow} text-blue-800 shadow-sm backdrop-blur`}>
              <span className="h-2 w-2 rounded-full bg-[#4984B8]" /> {hero.badge}
            </div>

            <div className="mb-5 text-sm text-slate-500">
              <Link href={routes.home} className="transition hover:text-blue-700">
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{hero.breadcrumbLabel}</span>
            </div>

            <h1 className={`mb-4 max-w-3xl ${typography.heroTitle} text-slate-950`}>
              {hero.titleLead}
              <span className="block text-blue-700">{hero.titleHighlight}</span>
            </h1>

            <p className={`mb-6 max-w-2xl ${typography.body} text-slate-600`}>{hero.description}</p>

            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-extrabold text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20BA5A] hover:shadow-[0_22px_50px_rgba(37,211,102,0.26)]"
                source="Brand Daikin - Hero"
                intent={item.waIntent}
                brand={item.waBrand}
                pageType="brand"
              >
                {hero.primaryCtaLabel}
              </WhatsappLink>

              <a href={hero.secondaryCtaHref} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow">
                {hero.secondaryCtaLabel}
              </a>

              <Link href={routes.buktiPengirimanProyek} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow">
                Foto Showroom & Stok
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              {hero.chips.map((chip) => (
                <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-1 font-bold text-slate-700 shadow-sm">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px] lg:mr-0">
            <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-3 shadow-[0_22px_60px_rgba(15,39,66,0.10)]">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                width={900}
                height={1100}
                className="h-[390px] w-full rounded-[1.35rem] object-cover object-center sm:h-[520px] lg:h-[600px]"
                sizes="(min-width: 1024px) 500px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. URGENT CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="rounded-[1.7rem] border border-[#25D366]/25 bg-[#25D366]/10 p-6 shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className={`mb-2 ${typography.eyebrow} text-emerald-700`}>{urgentCta.eyebrow}</p>
              <h2 className={`mb-3 ${typography.sectionTitle} text-slate-950`}>{urgentCta.title}</h2>
              <p className={`max-w-3xl ${typography.body} text-slate-600`}>{urgentCta.body}</p>
            </div>
            <WhatsappLink
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-extrabold text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:w-auto"
              source="Brand Daikin - Urgent CTA"
              intent={item.waIntent}
              brand={item.waBrand}
              pageType="brand"
            >
              {urgentCta.buttonLabel}
            </WhatsappLink>
          </div>
        </div>
      </section>

      {/* 3. GARANSI & WARRANTY */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading eyebrow={warranty.eyebrow} title={warranty.title} description={warranty.description} />

        <div className="grid gap-5 md:grid-cols-3">
          {warrantyTrust.map((card) => (
            <div key={card.title} className="rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">✓</div>
              <h3 className={`mb-3 ${typography.cardTitle} text-slate-950`}>{card.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. KAPASITAS & HARGA */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className={`mb-3 ${typography.eyebrow} text-blue-700`}>{priceSection.eyebrow}</div>
          <h2 className={`mb-4 ${typography.sectionTitle} text-slate-950`}>{priceSection.title}</h2>
          <p className={`mb-5 ${typography.body} text-slate-600`}>{priceSection.description}</p>

          <div className="grid gap-3">
            {priceTiers.map(([label, price, note]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4">
                <div className="mb-1 text-sm font-semibold text-blue-700">{label}</div>
                <div className="mb-1 text-2xl font-extrabold text-slate-950">{price}</div>
                <p className="text-sm leading-6 text-slate-600">{note}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-500">{priceSection.footnote}</p>
        </div>
      </section>

      {/* 5. AUTHORIZED DEALER */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
              {authorizedDealer.badge}
            </div>

            <h2 className={`mb-5 ${typography.sectionTitle} text-slate-950`}>{authorizedDealer.title}</h2>

            <p className={`mb-6 ${typography.body} text-slate-600`}>{authorizedDealer.description}</p>

            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-slate-800 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-extrabold text-white">✓</span>
              <span className="font-bold">{authorizedDealer.badgeLabel}</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-3 shadow-[0_22px_60px_rgba(15,39,66,0.10)]">
            <Image
              src={authorizedDealer.certificateImage}
              alt={authorizedDealer.certificateAlt}
              width={900}
              height={640}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="w-full rounded-[1.35rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. KARAKTER DAIKIN */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading
          eyebrow={brandCharacterSection.eyebrow}
          title={brandCharacterSection.title}
          description={brandCharacterSection.description}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {brandCharacter.map((card) => (
            <div key={card.title} className="rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,39,66,0.10)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">✓</div>
              <h3 className={`mb-3 ${typography.cardTitle} text-slate-950`}>{card.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRODUK */}
      <section id="produk-daikin" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading eyebrow={productsSection.eyebrow} title={productsSection.title} description={productsSection.description} />

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="flex flex-col overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,39,66,0.10)]">
              <div className="relative overflow-hidden border-b border-slate-100 bg-[#f8fbff] p-3">
                <Image
                  src={product.image}
                  alt={`${product.title} di Radja AC`}
                  width={600}
                  height={400}
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="h-[180px] w-full rounded-[1.1rem] object-cover object-center"
                />
                <span className="absolute left-5 top-5 inline-flex rounded-full border border-blue-100 bg-white/90 px-3 py-1 text-xs font-bold text-blue-700 shadow-sm backdrop-blur">
                  {product.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className={`mb-3 ${typography.cardTitle} text-slate-950`}>{product.title}</h3>
                <p className="mb-4 text-sm leading-7 text-slate-600">{product.description}</p>

                <div className="mb-5 space-y-3 rounded-2xl border border-slate-200 bg-[#f8fbff] p-4">
                  <div>
                    <p className={`${typography.eyebrow} text-blue-700`}>Cocok untuk</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">{product.fit}</p>
                  </div>
                  <div>
                    <p className={`${typography.eyebrow} text-blue-700`}>Fokus utama</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">{product.priority}</p>
                  </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {product.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm">
                      {highlight}
                    </span>
                  ))}
                </div>

                <WhatsappLink
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                  source={`Brand Daikin - ${product.title}`}
                  intent={`cek stok ${product.title}`}
                  brand={item.waBrand}
                  pageType="brand"
                >
                  {product.cta}
                </WhatsappLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. CHECKLIST */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading eyebrow={checklistSection.eyebrow} title={checklistSection.title} description={checklistSection.description} />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {buyingChecklist.map((point) => (
            <div key={point} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
              <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-extrabold text-white">✓</span>
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* 9. PANDUAN PK */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading eyebrow={pkSection.eyebrow} title={pkSection.title} description={pkSection.description} />

        <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-sm">
          <div className={`hidden grid-cols-[0.8fr_1fr_1.4fr] border-b border-slate-100 bg-blue-50 px-5 py-3 ${typography.eyebrow} text-blue-700 sm:grid`}>
            <span>Kapasitas</span>
            <span>Estimasi Ruangan</span>
            <span>Cocok Untuk</span>
          </div>

          <div className="divide-y divide-slate-100">
            {pkGuide.map(([pk, area, note]) => (
              <div key={pk} className="grid gap-2 px-5 py-4 sm:grid-cols-[0.8fr_1fr_1.4fr] sm:items-start sm:gap-4">
                <div className="text-lg font-bold text-blue-700">{pk}</div>
                <div className="text-sm font-bold text-slate-950">{area}</div>
                <div className="text-sm leading-6 text-slate-600">{note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[1.55rem] border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
          <h3 className={`mb-2 ${typography.cardTitle} text-slate-950`}>{pkCta.title}</h3>
          <p className={`mb-5 max-w-2xl ${typography.body} text-slate-600`}>{pkCta.description}</p>
          <WhatsappLink
            className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-extrabold text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:w-auto"
            source="Brand Daikin - Panduan PK"
            intent={item.waIntent}
            brand={item.waBrand}
            pageType="brand"
          >
            {pkCta.buttonLabel}
          </WhatsappLink>
        </div>
      </section>

      {/* 10. BACA JUGA */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeading eyebrow={internalLinksSection.eyebrow} title={internalLinksSection.title} description={internalLinksSection.description} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {internalLinks.map((link) => (
            <Link
              key={`${link.title}-${link.href}`}
              href={link.href}
              className="group rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
            >
              <h3 className={`mb-2 ${typography.cardTitle} text-slate-950`}>{link.title}</h3>
              <p className="mb-4 text-sm leading-6 text-slate-600">{link.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 group-hover:text-blue-800">
                Lihat panduan <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 11. CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-10">
          <h2 className={`mx-auto mb-5 max-w-3xl ${typography.sectionTitle} text-slate-950`}>{closingCta.title}</h2>
          <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-700">{closingCta.description}</p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-extrabold text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
            source="Brand Daikin - Closing CTA"
            intent={item.waIntent}
            brand={item.waBrand}
            pageType="brand"
          >
            {closingCta.buttonLabel}
          </WhatsappLink>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <SectionHeading eyebrow="FAQ" title={`Pertanyaan umum ${item.label}`} />
        <div className="grid gap-5 md:grid-cols-2">
          {faqItems.map(([question, answer]) => (
            <div key={question} className="rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className={`mb-3 ${typography.cardTitle} text-slate-950`}>{question}</h3>
              <p className="text-sm leading-7 text-slate-600">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
