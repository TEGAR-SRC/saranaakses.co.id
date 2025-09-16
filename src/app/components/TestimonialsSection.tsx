export default function TestimonialsSection() {
  const testimonials = [
    {
      title: "Koneksi Internet Stabil",
      description: "Sejak menggunakan layanan PT Sarana Akses Pratama, produktivitas kantor kami meningkat drastis dengan internet yang stabil dan cepat.",
      client: "CEO PT. Maju Bersama"
    },
    {
      title: "Uptime 99.9% Terpercaya",
      description: "Layanan yang luar biasa! Uptime 99.9% bukan hanya janji kosong. Tamu-tamu hotel kami selalu puas dengan kecepatan internetnya.",
      client: "IT Manager Hotel Batam Premium"
    },
    {
      title: "Ping Rendah untuk Gaming",
      description: "Sebagai pemilik gaming center, internet yang lag adalah musuh utama. Dengan PT Sarana Akses Pratama, ping rendah dan speed konsisten!",
      client: "Owner Warnet & Gaming Center"
    },
    {
      title: "Reliable untuk Digital Agency",
      description: "Video conference lancar, upload file besar cepat, download asset tidak ada masalah. Sangat cocok untuk digital agency seperti kami.",
      client: "Marketing Director Digital Agency"
    },
    {
      title: "Perfect untuk Work From Home",
      description: "Work from home jadi lebih nyaman. Keluarga bisa streaming Netflix 4K sambil anak-anak main game online tanpa lag!",
      client: "Resident Perumahan Botania"
    },
    {
      title: "Mendukung Layanan Medis",
      description: "Untuk layanan telemedicine, kecepatan dan stabilitas internet sangat krusial. PT Sarana Akses Pratama memberikan solusi yang tepat.",
      client: "Direktur Klinik Sehat Bersama"
    }
  ];

  return (
    <section id="testimonials" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Apa Kata Klien Kami</h2>
          <p className="mt-2 text-sm text-white/60">Testimoni kepuasan pelanggan</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div 
              key={index}
              className="rounded-lg border border-white/10 p-4 bg-[#0f0f15] transition hover:border-white/20 hover:bg-white/5"
            >
              <div className="text-sm font-medium text-white/90">{testimonial.title}</div>
              <p className="mt-1 text-sm text-white/60">{testimonial.description}</p>
              <div className="mt-2 text-xs text-blue-400 font-medium">— {testimonial.client}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}