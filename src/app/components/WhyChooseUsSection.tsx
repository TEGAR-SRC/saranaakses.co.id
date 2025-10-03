export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Koneksi Super Cepat",
      description: "Internet fiber optik dengan kecepatan 1 Gbps hingga 20 Gbps dengan teknologi terdepan untuk kebutuhan bisnis dan personal Anda."
    },
    {
      title: "Keamanan Terjamin",
      description: "Sistem keamanan berlapis dengan firewall enterprise dan monitoring 24/7 untuk melindungi data Anda."
    },
    {
      title: "Uptime 99.9%",
      description: "Jaminan ketersediaan layanan dengan infrastruktur redundan dan sistem backup otomatis."
    },
    {
      title: "Support 24/7",
      description: "Tim technical support berpengalaman siap membantu Anda kapan saja melalui berbagai channel komunikasi."
    },
    {
      title: "Harga Kompetitif",
      description: "Paket layanan terjangkau dengan kualitas premium, tanpa biaya tersembunyi dan kontrak yang fleksibel."
    },
    {
      title: "Pengalaman Terpercaya",
      description: "Melayani ribuan pelanggan di Batam & Kepulauan Riau dengan track record kepuasan customer yang tinggi."
    }
  ];

  return (
    <section id="why-choose-us" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Mengapa Memilih Kami</h2>
          <p className="mt-2 text-sm text-white/60">Keunggulan layanan internet terbaik</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-lg border border-white/10 p-4 bg-[#0f0f15] transition hover:border-white/20 hover:bg-white/5"
            >
              <div className="text-sm font-medium text-white/90">{feature.title}</div>
              <p className="mt-1 text-sm text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}