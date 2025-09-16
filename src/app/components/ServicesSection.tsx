export default function ServicesSection() {
  const services = [
    {
      title: "Internet Dedicated",
      description: "Koneksi simetris 1:1 SLA, dan dukungan prioritas untuk bisnis."
    },
    {
      title: "Broadband Kelas Enterprise", 
      description: "Koneksi berkecepatan tinggi dengan SLA dan prioritas traffic untuk kebutuhan perusahaan."
    },
    {
      title: "VPN/MPLS",
      description: "Jaringan privat antar lokasi yang aman dan handal."
    },
    {
      title: "Managed Services",
      description: "Monitoring, konfigurasi perangkat, dan dukungan terkelola."
    },
    {
      title: "Colocation",
      description: "Ruang rack server dengan power, cooling, dan konektivitas terjamin 24/7."
    },
    {
      title: "IP Transit",
      description: "Akses global internet dengan routing optimal dan redundansi tinggi."
    },
    {
      title: "Local Content IX",
      description: "Koneksi langsung ke content provider lokal untuk akses cepat dan hemat bandwidth."
    }
  ];

  return (
    <section id="layanan" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Layanan</h2>
          <p className="mt-2 text-sm text-white/60">Solusi konektivitas untuk beragam kebutuhan</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
          {services.slice(0, 6).map((service, index) => (
            <div 
              key={index}
              className="rounded-lg border border-white/10 p-4 bg-[#0f0f15] transition hover:border-white/20 hover:bg-white/5"
            >
              <div className="text-sm font-medium text-white/90">{service.title}</div>
              <p className="mt-1 text-sm text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

