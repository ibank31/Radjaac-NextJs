import SectionTitle from "@/components/area/SectionTitle";

export default function AreaFaq({ areaName, faqItems }) {
  return (
    <div className="mt-10">
      <SectionTitle eyebrow="FAQ" title={`Pertanyaan umum jual AC ${areaName}`} />
      <div className="grid gap-5 md:grid-cols-2">
        {faqItems.map(([question, answer]) => (
          <div
            key={question}
            className="rounded-[1.45rem] border border-slate-200 bg-white p-6"
          >
            <h3 className="mb-3 font-bold text-slate-950">{question}</h3>
            <p className="text-sm leading-7 text-slate-600">{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
