export default function AddressSection() {
  return (
    <section id="tentang" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold">Alamat Perusahaan</h2>
          <p className="mt-2 text-sm text-white/60">PT Sarana Akses Pratama</p>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-white/90 mb-1">Head Office</p>
              <p className="text-base leading-relaxed text-white/80">
                Cyber 2 Tower<br />
                Jl. H.R. Rasuna Said Blok X-5 No.13<br />
                Rasuna Said, Jakarta Selatan<br />
                Jakarta
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm font-semibold text-white/90 mb-1">Branch Office</p>
              <p className="text-base leading-relaxed text-white/80">
                jalan Raja Alikelana MB2 Blok B28 No. 01-04 Belian, Batam Kota,
                Provinsi Kepulauan Riau, kode pos 29431.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

