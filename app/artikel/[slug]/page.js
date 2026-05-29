import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { articleItems, getArticleItem } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleItems.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const item = getArticleItem(params.slug);

  if (!item) {
    return {};
  }

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default function ArticleDetailPage({ params }) {
  const item = getArticleItem(params.slug);

  if (!item) {
    notFound();
  }

  const relatedArticles = articleItems.filter((article) => article.slug !== item.slug);

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
        <Link href={routes.artikel} className="text-sm font-bold text-slate-500 hover:text-slate-950">
          ← Kembali ke Artikel
        </Link>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          {item.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          {item.h1}
        </h1>
        <p className="mt-4 text-sm font-bold text-slate-500">{item.readTime}</p>
        <p className="mt-6 text-lg leading-8 text-slate-600">{item.intro}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source={`Artikel ${item.slug}`}
            intent={item.waIntent}
          >
            {item.ctaLabel}
          </WhatsappLink>
          <Link
            href={routes.kalkulatorPkAc}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Cek Kalkulator PK
          </Link>
        </div>

        <div className="mt-12 space-y-8">
          {item.sections.map((section) => (
            <section key={section.heading} className="rounded-3xl border border-slate-200 p-6">
              <h2 className="text-2xl font-black text-slate-950">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-black">Butuh dibantu pilih AC?</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Kirim ukuran ruangan, daya listrik, budget, kota, dan kebutuhan unit saja atau opsi pemasangan.
            Admin RADJA AC bantu cek pilihan yang masuk akal sebelum Anda deal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {item.relatedLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {relatedArticles.length ? (
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-950">Artikel terkait</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.path}
                  className="rounded-2xl border border-slate-200 p-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                >
                  {article.h1}
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </main>
  );
}
