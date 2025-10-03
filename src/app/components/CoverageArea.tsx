"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import untuk menghindari SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);

export default function CoverageArea() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Koordinat untuk Kepulauan Riau
  const kepriCenter = { lat: 1.0000, lng: 104.2000 };
  
  // Area coverage points untuk seluruh Kepulauan Riau
  const coverageAreas = [
    // Batam
    {
      name: "Batam Center",
      position: { lat: 1.1043, lng: 104.0304 },
      radius: 15000,
      color: "#3b82f6",
      type: "Kota"
    },
    {
      name: "Nagoya",
      position: { lat: 1.1239, lng: 104.0187 },
      radius: 12000,
      color: "#06b6d4",
      type: "Area Bisnis"
    },
    {
      name: "Batu Aji",
      position: { lat: 1.0871, lng: 104.0436 },
      radius: 10000,
      color: "#8b5cf6",
      type: "Industri"
    },
    {
      name: "Sekupang",
      position: { lat: 1.1304, lng: 103.9951 },
      radius: 8000,
      color: "#10b981",
      type: "Pelabuhan"
    },
    // Bintan
    {
      name: "Tanjung Pinang",
      position: { lat: 0.9186, lng: 104.4461 },
      radius: 20000,
      color: "#f59e0b",
      type: "Ibu Kota"
    },
    {
      name: "Bintan Resorts",
      position: { lat: 1.1500, lng: 104.5000 },
      radius: 15000,
      color: "#ef4444",
      type: "Pariwisata"
    },
    // Karimun
    {
      name: "Tanjung Balai Karimun",
      position: { lat: 1.0667, lng: 103.4333 },
      radius: 12000,
      color: "#8b5cf6",
      type: "Kota"
    },
    // Natuna
    {
      name: "Ranai (Natuna)",
      position: { lat: 3.9667, lng: 108.3833 },
      radius: 18000,
      color: "#06b6d4",
      type: "Perbatasan"
    },
    // Lingga
    {
      name: "Daik (Lingga)",
      position: { lat: -0.2000, lng: 104.6167 },
      radius: 10000,
      color: "#10b981",
      type: "Kabupaten"
    },
    // Anambas
    {
      name: "Tarempa (Anambas)",
      position: { lat: 3.0000, lng: 106.2667 },
      radius: 8000,
      color: "#f59e0b",
      type: "Kepulauan"
    }
  ];

  const officeLocation = {
    name: "PT Sarana Akses Pratama",
    position: { lat: 1.1200, lng: 104.0500 }, // Approximate location for Sagulung area
    address: "Jl. Dapur 12 Kampung Tua, Kel. Sungai Pelunggut, Kec. Sagulung"
  };

  if (!isClient) {
    return (
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Area Coverage
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Jangkauan layanan internet kami di seluruh Kepulauan Riau
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-white/60">Loading map...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Area Coverage
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Jangkauan layanan internet kami di seluruh Kepulauan Riau. 
            Dari Batam hingga Natuna, kami melayani area strategis dengan koneksi fiber optik berkualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <MapContainer
                center={[kepriCenter.lat, kepriCenter.lng]}
                zoom={8}
                style={{ height: "500px", width: "100%" }}
                zoomControl={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/* Office Location Marker */}
                <Marker position={[officeLocation.position.lat, officeLocation.position.lng]}>
                  <Popup>
                    <div className="p-2">
                      <div className="font-semibold text-gray-800">{officeLocation.name}</div>
                      <div className="text-sm text-gray-600 mt-1">{officeLocation.address}</div>
                      <div className="text-xs text-blue-600 mt-2">Kantor Pusat</div>
                    </div>
                  </Popup>
                </Marker>

                {/* Coverage Areas */}
                {coverageAreas.map((area, index) => (
                  <Circle
                    key={index}
                    center={[area.position.lat, area.position.lng]}
                    radius={area.radius}
                    fillColor={area.color}
                    fillOpacity={0.2}
                    color={area.color}
                    weight={2}
                  >
                    <Popup>
                      <div className="p-2">
                        <div className="font-semibold text-gray-800">{area.name}</div>
                        <div className="text-sm text-gray-600">{area.type}</div>
                        <div className="text-xs text-green-600 mt-1">✓ Fiber Optik Available</div>
                        <div className="text-xs text-gray-500">Radius: ~{(area.radius / 1000).toFixed(0)}km</div>
                      </div>
                    </Popup>
                  </Circle>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* Coverage Info */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Area Layanan Kepulauan Riau</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: area.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm truncate">{area.name}</div>
                      <div className="text-white/60 text-xs">
                        {area.type} • ~{(area.radius / 1000).toFixed(0)}km
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Keunggulan Coverage</h3>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>Jaringan fiber optik hingga ke pelanggan</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>Coverage area strategis di pusat bisnis</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>Redundant network untuk reliability tinggi</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>24/7 network monitoring</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Butuh Coverage di Area Lain?</h3>
              <p className="text-white/70 text-sm mb-4">
                Kami terus mengembangkan jaringan. Hubungi kami untuk informasi ekspansi area.
              </p>
              <a 
                href="#kontak" 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                Konsultasi Gratis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}