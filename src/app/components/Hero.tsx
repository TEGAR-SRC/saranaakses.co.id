export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/1003.mp4" type="video/mp4" />
        </video>
        {/* Overlay untuk memastikan teks tetap terbaca */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative w-full px-6 sm:px-10 py-24 sm:py-32 min-h-screen flex items-center">
        <div className="w-full flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-3xl sm:text-6xl font-semibold leading-tight tracking-tight mb-4">
            PT Sarana Akses Pratama
          </h1>
          <h2 className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">Koneksi Internet Andal untuk Corporate & Edukasi</h2>
          <p className="mt-2 max-w-xl text-white/70">
            ISP yang berfokus pada layanan cepat, stabil, dan dukungan pelanggan yang responsif di Batam & Kepulauan Riau.
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

