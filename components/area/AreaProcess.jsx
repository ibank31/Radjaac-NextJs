import WhatsappLink from "@/components/ui/WhatsappLink";

export default function AreaProcess({ item, processSteps }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            ALUR BELI AC
          </div>
          <h2 className="mb-5 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-[1.75rem]">
            Cek kebutuhan dulu, baru kunci stok dan jadwal
          </h2>
          <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
            Mulai dari area dan ukuran ruangan. Tim RADJA AC cek stok,
            cocokkan PK, jelaskan estimasi, lalu susun jadwal setelah data
            cocok.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            source={`${item.label} - Alur Beli`}
            intent={item.waIntent}
            area={item.waArea}
            pageType="area"
          >
            Cek AC untuk Area Ini
          </WhatsappLink>
        </div>

        <div className="grid gap-4">
          {processSteps.map(([title, description], index) => (
            <div
              key={title}
              className="rounded-[1.45rem] border border-slate-200 bg-white p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-300 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-950">{title}</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
