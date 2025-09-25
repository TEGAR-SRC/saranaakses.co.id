export default function VSATSection() {
  const vsatFeatures = [
    {
      title: "Coverage Nasional",
      description: "Jangkauan internet satelit ke seluruh wilayah Indonesia, termasuk area terpencil dan remote."
    },
    {
      title: "Uptime Tinggi",
      description: "Koneksi stabil dengan uptime 99.7% untuk kebutuhan bisnis dan pemerintahan."
    },
    {
      title: "Support 24/7",
      description: "Tim teknis siap membantu instalasi, troubleshooting, dan maintenance kapan saja."
    },
    {
      title: "Instalasi Cepat",
      description: "Proses pemasangan VSAT yang efisien dan minim downtime."
    },
    {
      title: "Bandwidth Fleksibel",
      description: "Pilihan bandwidth sesuai kebutuhan."
    },
    {
      title: "Monitoring Real-Time",
      description: "Sistem monitoring koneksi VSAT secara real-time untuk deteksi gangguan lebih cepat."
    }
  ];

  return (
    <section id="vsat" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Layanan VSAT</h2>
          <p className="mt-2 text-sm text-white/60">Solusi internet satelit untuk area tanpa akses fiber atau wireless, cocok untuk bisnis, pemerintahan, dan pendidikan di seluruh Indonesia.</p>
          <div className="mt-4 p-4 rounded-lg border border-white/10 bg-[#0f0f15]">
            <div className="text-sm text-white/80 leading-relaxed">
              <div className="font-medium text-white/90 mb-2">Keunggulan VSAT:</div>
              <ul className="space-y-1 text-xs">
                <li>• Jangkauan nasional & remote</li>
                <li>• Uptime tinggi</li>
                <li>• Support teknis 24/7</li>
                <li>• Instalasi cepat & mudah</li>
                <li>• Monitoring real-time</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
          {vsatFeatures.map((feature, index) => (
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
