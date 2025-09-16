export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_-20%,#1b1b26_0%,#0b0b0f_65%)]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 bg-[conic-gradient(from_180deg_at_50%_50%,#6e7bff_0%,#6e7bff33_40%,transparent_70%)]" />
      </div>
      <div className="relative w-full px-6 sm:px-10 py-24 sm:py-32 min-h-screen flex items-center">
        <div className="w-full text-center">
          <h1 className="text-3xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Koneksi Internet Andal untuk
            <br className="hidden sm:block" />
            Bisnis dan Pemerintah / Pendidikan
          </h1>
          <p className="mt-4 mx-auto max-w-3xl text-white/70">
            PT Sarana Akses Pratama adalah ISP yang berfokus pada layanan cepat, stabil,
            dan dukungan pelanggan yang responsif di Batam & Kepulauan Riau.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#kontak" className="btn-primary inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium hover:opacity-95">
              Hubungi Kami
            </a>
            <a href="#layanan" className="btn-secondary inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium hover:bg-white/5">
              Lihat Layanan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

