export default function HoursSection() {
  return (
    <section id="jam" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Jam Operasional</h2>
          <p className="mt-2 text-sm text-white/60">Waktu layanan kantor</p>
        </div>
        <div className="md:col-span-2">
          <ul className="grid sm:grid-cols-2 gap-4">
            <li className="rounded-lg border border-white/10 p-5 bg-[#0f0f15] flex items-center justify-between">
              <span className="text-white/90">Senin - Jumat</span>
              <span className="font-medium">08:00 - 17:00</span>
            </li>
            <li className="rounded-lg border border-white/10 p-5 bg-[#0f0f15] flex items-center justify-between">
              <span className="text-white/90">Sabtu</span>
              <span className="font-medium">08:00 - 15:00</span>
            </li>
            <li className="rounded-lg border border-white/10 p-5 bg-[#0f0f15] flex items-center justify-between sm:col-span-2">
              <span className="text-white/90">Minggu</span>
              <span className="font-medium">Libur</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

