export default function DataCenterSection() {
  const dataFeatures = [
    {
      title: "Konektivitas Redundan",
      description: "Multi-uplink dan jalur fiber untuk uptime yang maksimal."
    },
    {
      title: "Keamanan Fisik & Jaringan",
      description: "Akses terbatas, monitoring 24/7, dan segmentasi jaringan."
    },
    {
      title: "Power & Cooling",
      description: "UPS, genset, dan pendinginan terkelola untuk stabilitas."
    },
    {
      title: "Backup & Recovery",
      description: "Sistem cadangan otomatis dan disaster recovery plan."
    },
    {
      title: "Proteksi DDoS",
      description: "Mitigasi serangan DDoS berlapis untuk menjaga layanan tetap online."
    },
    {
      title: "NOC 24/7",
      description: "Network Operation Center aktif 24/7 untuk monitoring proaktif."
    },
    {
      title: "Kepatuhan & Sertifikasi",
      description: "Standar keamanan dan kepatuhan ISO 27001, audit berkala."
    },
    {
      title: "Multi-Region Replication",
      description: "Replikasi data lintas lokasi untuk ketersediaan dan pemulihan cepat."
    }
  ];

  return (
    <section id="datacenter" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Data Center</h2>
          <p className="mt-2 text-sm text-white/60">Keandalan dan keamanan infrastruktur</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
          {dataFeatures.map((feature, index) => (
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

