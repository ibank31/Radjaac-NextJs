"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { routes } from "@/content/routes";

const DEFAULT_TARIFF = 1444.7;

const roomConditions = {
  normal: {
    label: "Normal",
    multiplier: 1,
    note: "Ruangan cukup tertutup dan tidak terlalu panas.",
  },
  hot: {
    label: "Cukup panas",
    multiplier: 1.12,
    note: "Ada paparan matahari, plafon agak tinggi, atau ruangan mudah panas.",
  },
  veryHot: {
    label: "Sangat panas",
    multiplier: 1.25,
    note: "Banyak kaca, panas matahari kuat, plafon tinggi, atau aktivitas ramai.",
  },
};

const pkOptions = [
  { pk: "1/2 PK", maxBtu: 5000, watt: 350, href: routes.katalogAcSetengahPk },
  { pk: "3/4 PK", maxBtu: 7000, watt: 500, href: routes.katalogAcSplitRumah },
  { pk: "1 PK", maxBtu: 9000, watt: 750, href: routes.artikelAcSatuPkUntukRuanganBerapa },
  { pk: "1.5 PK", maxBtu: 12000, watt: 1100, href: routes.katalogAcSplitRumah },
  { pk: "2 PK", maxBtu: 18000, watt: 1500, href: routes.katalogAcKantorKomersial },
];

const roomTypes = ["Kamar tidur", "Ruang keluarga", "Ruang kerja", "Toko kecil", "Kantor"];

const quickTips = [
  "Jangan asal ambil 1/2 PK karena paling murah. Kalau ruangan terlalu besar, AC bekerja keras terus dan tetap susah dingin.",
  "Plafon tinggi, kaca besar, atau dinding kena matahari langsung bisa membuat kebutuhan BTU naik.",
  "Kalau AC sering menyala lama setiap hari, inverter menjadi pilihan, bukan hanya melihat harga unit awal.",
  "Daya listrik rumah dan MCB perlu dicek agar pilihan PK selaras dengan pemakaian listrik lain.",
];

function formatNumber(value, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("id-ID", { maximumFractionDigits }).format(value);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getRecommendation(btu) {
  return pkOptions.find((option) => btu <= option.maxBtu) || pkOptions[pkOptions.length - 1];
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}

function inputClassName() {
  return "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100";
}

function ResultCard({ label, value, highlight = false }) {
  return (
    <div className={`rounded-3xl border p-4 ${highlight ? "border-cyan-100 bg-cyan-50" : "border-slate-200 bg-white"}`}>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
    </div>
  );
}

export default function PkCalculator() {
  const [length, setLength] = useState(4);
  const [width, setWidth] = useState(3);
  const [height, setHeight] = useState(3);
  const [people, setPeople] = useState(2);
  const [condition, setCondition] = useState("normal");
  const [roomType, setRoomType] = useState("Kamar tidur");
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerMonth, setDaysPerMonth] = useState(30);
  const [tariff, setTariff] = useState(DEFAULT_TARIFF);

  const result = useMemo(() => {
    const area = Math.max(Number(length) || 0, 0) * Math.max(Number(width) || 0, 0);
    const safeHeight = Math.max(Number(height) || 0, 0);
    const safePeople = Math.max(Number(people) || 0, 0);
    const selectedCondition = roomConditions[condition] || roomConditions.normal;
    const heightFactor = safeHeight > 3 ? 1 + Math.min((safeHeight - 3) * 0.08, 0.24) : 1;
    const peopleExtraBtu = Math.max(safePeople - 2, 0) * 600;
    const estimatedBtu = Math.ceil(((area * 500) * selectedCondition.multiplier * heightFactor + peopleExtraBtu) / 100) * 100;
    const recommendation = getRecommendation(estimatedBtu);
    const dailyKwh = (recommendation.watt / 1000) * (Number(hoursPerDay) || 0);
    const monthlyKwh = dailyKwh * (Number(daysPerMonth) || 0);
    const monthlyCost = monthlyKwh * (Number(tariff) || DEFAULT_TARIFF);

    return { area, estimatedBtu, recommendation, dailyKwh, monthlyKwh, monthlyCost, selectedCondition };
  }, [condition, daysPerMonth, height, hoursPerDay, length, people, tariff, width]);

  const waIntent = `konsultasi hasil kalkulator PK AC: ruangan ${formatNumber(result.area)} m2, estimasi ${result.recommendation.pk}, ${formatNumber(result.estimatedBtu, 0)} BTU, tipe ruang ${roomType}`;

  return (
    <div className="rounded-[2rem] border border-cyan-100 bg-white/95 p-4 shadow-[0_28px_80px_rgba(15,39,66,0.12)] backdrop-blur sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <section className="rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 shadow-sm">
          <div className="mb-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">Isi data ruangan</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">Ukur dulu sebelum pilih PK</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Panjang (m)">
              <input className={inputClassName()} type="number" min="0" step="0.1" value={length} onChange={(event) => setLength(event.target.value)} />
            </Field>
            <Field label="Lebar (m)">
              <input className={inputClassName()} type="number" min="0" step="0.1" value={width} onChange={(event) => setWidth(event.target.value)} />
            </Field>
            <Field label="Tinggi plafon (m)">
              <input className={inputClassName()} type="number" min="0" step="0.1" value={height} onChange={(event) => setHeight(event.target.value)} />
            </Field>
            <Field label="Jumlah orang">
              <input className={inputClassName()} type="number" min="0" step="1" value={people} onChange={(event) => setPeople(event.target.value)} />
            </Field>
            <Field label="Jenis ruang">
              <select className={inputClassName()} value={roomType} onChange={(event) => setRoomType(event.target.value)}>
                {roomTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="Kondisi ruang">
              <select className={inputClassName()} value={condition} onChange={(event) => setCondition(event.target.value)}>
                {Object.entries(roomConditions).map(([key, item]) => (
                  <option key={key} value={key}>{item.label}</option>
                ))}
              </select>
            </Field>
            <Field label="Jam pakai/hari">
              <input className={inputClassName()} type="number" min="0" step="1" value={hoursPerDay} onChange={(event) => setHoursPerDay(event.target.value)} />
            </Field>
            <Field label="Hari pakai/bulan">
              <input className={inputClassName()} type="number" min="0" step="1" value={daysPerMonth} onChange={(event) => setDaysPerMonth(event.target.value)} />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Tarif listrik/kWh">
              <input className={inputClassName()} type="number" min="0" step="1" value={tariff} onChange={(event) => setTariff(event.target.value)} />
            </Field>
          </div>
        </section>

        <section className="rounded-[1.6rem] border border-cyan-200 bg-[linear-gradient(180deg,#ecfeff_0%,#f8fbff_100%)] p-5 shadow-[0_18px_50px_rgba(34,211,238,0.12)]">
          <div className="mb-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-800">Estimasi awal</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">Cek hasil PK ke admin</h2>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
            <ResultCard label="Luas" value={`${formatNumber(result.area)} m²`} />
            <ResultCard label="PK AC" value={result.recommendation.pk} highlight />
            <ResultCard label="BTU" value={`±${formatNumber(result.estimatedBtu, 0)}`} />
            <ResultCard label="Listrik/bulan" value={`±${formatCurrency(result.monthlyCost)}`} highlight />
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white p-5">
            <h3 className="text-xl font-black text-slate-950">
              Estimasi: AC {result.recommendation.pk} untuk ruangan ±{formatNumber(result.area)} m²
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Kebutuhan sekitar ±{formatNumber(result.estimatedBtu, 0)} BTU/h. Estimasi pemakaian listrik ±{formatNumber(result.dailyKwh)} kWh/hari atau ±{formatNumber(result.monthlyKwh)} kWh/bulan.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Kondisi ruang: {result.selectedCondition.note} Angka ini patokan awal. Admin tetap cek daya listrik, MCB, posisi indoor-outdoor, panjang pipa, tipe AC, dan stok.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link
              href={result.recommendation.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-50"
            >
              Lihat pilihan terkait →
            </Link>
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
              source="Calculator Result CTA"
              intent={waIntent}
            >
              Kirim Hasil & Cek Stok
            </WhatsappLink>
          </div>

          <div className="mt-5 rounded-3xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-black text-amber-950">Sudah keluar hasilnya? Jangan berhenti di sini</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              Kalkulator ini memberi gambaran awal. Kirim hasil hitung agar admin cek stok unit, harga unit, biaya pasang, daya listrik, kondisi MCB, dan posisi pemasangan.
            </p>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">Yang sering diabaikan</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950">Empat hal yang bikin orang salah pilih AC</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {quickTips.map((tip) => (
            <div key={tip} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-600">
              {tip}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
