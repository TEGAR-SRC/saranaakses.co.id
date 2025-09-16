export default function SupportSection() {
    const supportChannels = [
        {
            title: "Hotline 24/7",
            description: "Tim support siap membantu kapan saja melalui telepon darurat.",
            contact: "+62 778 5522601",
            availability: "24 Jam Setiap Hari"
        },
        {
            title: "Email Support",
            description: "Kirim tiket support melalui email untuk masalah non-urgent.",
            contact: "cse@sanak.co.id",
            availability: "Response < 2 Jam"
        },
    {
      title: "Live Chat",
      description: "Chat real-time dengan teknisi ahli melalui website.",
      contact: "Website Chat",
      availability: "Senin-Sabtu 08:00-22:00"
    },
    {
      title: "Kunjungan Teknisi",
      description: "Tim teknisi siap datang ke lokasi untuk troubleshooting langsung.",
      contact: "Schedule Visit",
      availability: "Senin-Sabtu 08:00-17:00"
    }
  ];

  const guarantees = [
    {
      title: "Konektivitas Global",
      description: "Terhubung langsung ke IXP lokal dan global untuk performa optimal.",
      highlight: "99.982% uptime"
    },
    {
      title: "Lokasi Strategis",
      description: "Data center di Batam, dekat jalur kabel internasional. Latency rendah ke Singapura dan Asia Pasifik.",
      highlight: "3ms ke Singapura"
    },
    {
      title: "Biaya Kompetitif",
      description: "Harga 30-40% lebih rendah dibanding provider internasional dengan kualitas yang sama.",
      highlight: "40% lebih hemat"
    },
    {
      title: "Garansi Uptime 99.9%",
      description: "Jaminan ketersediaan layanan dengan kompensasi otomatis jika uptime < 99.9%."
    },
    {
      title: "Response Time < 2 Jam",
      description: "Tim support akan merespon setiap keluhan dalam waktu maksimal 2 jam, prioritas tinggi < 30 menit."
    },
    {
      title: "Keamanan Data Terjamin",
      description: "Perlindungan data dengan enkripsi tingkat enterprise dan sertifikasi ISO 27001 compliance."
    },
    {
      title: "Teknisi On-Site 24/7",
      description: "Tim teknisi siap datang ke lokasi kapan saja untuk mengatasi masalah teknis darurat."
    },
    {
      title: "Bandwidth Guarantee",
      description: "Jaminan bandwidth sesuai paket berlangganan dengan monitoring real-time dan laporan berkala."
    }
  ];

  return (
    <>
      {/* Jaminan Layanan Section */}
      <section id="support-guarantee" className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Jaminan Layanan Kami</h2>
            <p className="mt-2 text-sm text-white/60">Komitmen kualitas dan kepuasan pelanggan</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
            {guarantees.slice(0, 6).map((guarantee, index) => (
              <div 
                key={index}
                className="rounded-lg border border-white/10 p-4 bg-[#0f0f15] transition hover:border-white/20 hover:bg-white/5"
              >
                <div className="text-sm font-medium text-white/90">{guarantee.title}</div>
                <p className="mt-1 text-sm text-white/60">{guarantee.description}</p>
                {guarantee.highlight && (
                  <div className="mt-2 text-xs text-blue-400 font-medium">{guarantee.highlight}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Support & Bantuan</h2>
            <p className="mt-2 text-sm text-white/60">Channel dukungan pelanggan 24/7</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
            {supportChannels.map((channel, index) => (
              <div 
                key={index}
                className="rounded-lg border border-white/10 p-4 bg-[#0f0f15] transition hover:border-white/20 hover:bg-white/5"
              >
                <div className="text-sm font-medium text-white/90">{channel.title}</div>
                <p className="mt-1 text-sm text-white/60">{channel.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-xs text-blue-400 font-medium">{channel.contact}</div>
                  <div className="text-xs text-white/50">{channel.availability}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}