export default function EducationSection() {
  const educationServices = [
    {
      title: "Paket Internet EDUKASI",
      description: "Bandwidth 50 Mbps - 1 Gbps  1:1   dengan manajemen bandwidth per kelas dan akses portal edukasi premium."
    },
    {
      title: "Content Filtering & Monitoring",
      description: "Sistem keamanan internet dengan filtering konten negatif dan monitoring aktivitas online siswa real-time."
    },
    {
      title: "Bandwidth Management",
      description: "Alokasi bandwidth per ruang kelas, prioritas traffic edukatif, dan QoS untuk aplikasi pembelajaran."
    },
    {
      title: "E-Learning Infrastructure (Bonus)",
      description: "Bonus: Infrastruktur cloud untuk platform LMS, video conference, dan digital classroom dengan uptime 99.9%."
    },
  ];

  return (
    <section id="internet-sekolah" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Layanan Internet Sekolah</h2>
          <p className="mt-2 text-sm text-white/60">Solusi konektivitas khusus untuk institusi pendidikan dengan keamanan dan kontrol yang optimal</p>
          <div className="mt-4 p-4 rounded-lg border border-white/10 bg-[#0f0f15]">
            <div className="text-sm text-white/80 leading-relaxed">
              <div className="font-medium text-white/90 mb-2">🎓 Keunggulan Khusus:</div>
              <ul className="space-y-1 text-xs">
                <li>• Harga khusus untuk institusi pendidikan</li>
                <li>• Content filtering otomatis</li>
                <li>• Support teknis prioritas</li>
                <li>• Bandwidth management per kelas</li>
                <li>• Portal monitoring untuk admin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
          {educationServices.map((service, index) => (
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