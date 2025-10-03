import Image from "next/image";

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
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12">
        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 items-start mb-12">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Tentang Kami</h2>
            <p className="text-lg text-white/70 mb-6">PT Sarana Akses Pratama - Provider internet terpercaya di Batam</p>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <p className="text-white/80 leading-relaxed mb-4">
                PT Sarana Akses Pratama adalah penyedia layanan internet dan solusi jaringan terdepan di Batam dan Kepulauan Riau. 
                Dengan komitmen memberikan konektivitas berkualitas tinggi, kami telah menjadi partner terpercaya untuk ribuan pelanggan 
                dari berbagai segmen bisnis dan residential.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-green-400 font-medium">Active Since 2009</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-blue-400 font-medium">ISO 27001 Certified</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-center items-center">
            <div className="relative max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <Image 
                src="/image.png" 
                alt="PT Sarana Akses Pratama" 
                width={600}
                height={450}
                className="relative rounded-xl shadow-2xl border border-white/10 w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aboutFeatures.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl border border-white/10 p-6 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="text-lg font-semibold text-white mb-2">{feature.title}</div>
              <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

