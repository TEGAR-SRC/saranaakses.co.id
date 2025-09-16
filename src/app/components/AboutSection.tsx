export default function AboutSection() {
  const aboutFeatures = [
    {
      title: "15+ Tahun Pengalaman",
      description: "Melayani kebutuhan internet dan jaringan di Batam & Kepulauan Riau sejak 2009 dengan track record yang terpercaya."
    },
    {
      title: "5000+ Pelanggan Puas",
      description: "Dari UMKM hingga perusahaan multinasional, ribuan klien mempercayakan kebutuhan konektivitas kepada kami."
    },
    {
      title: "Infrastruktur Fiber Optik",
      description: "Jaringan backbone fiber optik sendiri yang mencakup seluruh Batam dengan kecepatan hingga 10 Gbps."
    },
    {
      title: "Tim Profesional 24/7",
      description: "Teknisi bersertifikat dan customer service yang siap melayani Anda kapan saja dengan respons time terbaik."
    }
  ];

  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Tentang Kami</h2>
          <p className="mt-2 text-sm text-white/60">PT Sarana Akses Pratama - Provider internet terpercaya di Batam</p>
          <div className="mt-4 p-4 rounded-lg border border-white/10 bg-[#0f0f15]">
            <p className="text-sm text-white/80 leading-relaxed">
              PT Sarana Akses Pratama adalah penyedia layanan internet dan solusi jaringan terdepan di Batam dan Kepulauan Riau. 
              Dengan komitmen memberikan konektivitas berkualitas tinggi, kami telah menjadi partner terpercaya untuk ribuan pelanggan 
              dari berbagai segmen bisnis dan residential.
            </p>
            <div className="mt-3 flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-green-400 font-medium">Active Since 2009</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-blue-400 font-medium">ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
          {aboutFeatures.map((feature, index) => (
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

