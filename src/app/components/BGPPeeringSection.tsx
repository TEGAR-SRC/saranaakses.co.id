export default function BGPPeeringSection() {
  const bgpPeers = [
    {
      name: "Google",
      status: "Active",
      asn: "AS15169",
      routes: "1,234,567",
      uptime: "99.99%",
      color: "text-green-400"
    },
    {
      name: "Facebook",
      status: "Active", 
      asn: "AS32934",
      routes: "987,654",
      uptime: "99.98%",
      color: "text-green-400"
    },
    {
      name: "Cloudflare",
      status: "Active",
      asn: "AS13335", 
      routes: "2,345,678",
      uptime: "99.99%",
      color: "text-green-400"
    },
    {
      name: "Microsoft",
      status: "Active",
      asn: "AS8075",
      routes: "1,876,543", 
      uptime: "99.97%",
      color: "text-green-400"
    }
  ];

  const ixpConnections = [
    {
      name: "IIX (Indonesia Internet Exchange)",
      status: "Active",
      location: "Jakarta",
      bandwidth: "100 Gbps",
      peers: "150+",
      color: "text-green-400"
    },
    {
      name: "OIXP (Open IXP)",
      status: "Active",
      location: "Jakarta", 
      bandwidth: "100 Gbps",
      peers: "80+",
      color: "text-green-400"
    },
    {
      name: "JKT-IX (Jakarta Internet Exchange)",
      status: "Active",
      location: "Jakarta",
      bandwidth: "100 Gbps", 
      peers: "200+",
      color: "text-green-400"
    },
    {
      name: "BatamIX",
      status: "Active",
      location: "Batam",
      bandwidth: "100 Gbps",
      peers: "30+",
      color: "text-green-400"
    }
  ];

  return (
    <>
      {/* BGP Peering Section */}
      <section id="bgp-peering" className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">BGP Peering & Network Partners</h2>
            <p className="mt-2 text-sm text-white/60">Koneksi BGP langsung dengan penyedia layanan global terkemuka untuk performa jaringan yang optimal</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
            {bgpPeers.map((peer, index) => (
              <div 
                key={index}
                className="rounded-lg border border-white/10 p-4 bg-[#0f0f15] transition hover:border-white/20 hover:bg-white/5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-white/90">{peer.name}</div>
                  <div className={`text-xs px-2 py-1 rounded-full bg-blue-500/20 ${peer.color} font-medium`}>
                    {peer.status}
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/50">ASN:</span>
                    <span className="text-white/80 font-mono">{peer.asn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Routes:</span>
                    <span className="text-white/80 font-mono">{peer.routes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Uptime:</span>
                    <span className="text-green-400 font-medium">{peer.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internet Exchange Points Section */}
      <section className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Internet Exchange Points (IXP)</h2>
            <p className="mt-2 text-sm text-white/60">Koneksi langsung ke Internet Exchange Points di seluruh Indonesia untuk latensi terendah</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
            {ixpConnections.map((ixp, index) => (
              <div 
                key={index}
                className="rounded-lg border border-white/10 p-4 bg-[#0f0f15] transition hover:border-white/20 hover:bg-white/5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-white/90">{ixp.name}</div>
                  <div className={`text-xs px-2 py-1 rounded-full bg-green-500/20 ${ixp.color} font-medium`}>
                    {ixp.status}
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/50">Location:</span>
                    <span className="text-white/80">{ixp.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Bandwidth:</span>
                    <span className="text-green-400 font-medium">{ixp.bandwidth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Peers:</span>
                    <span className="text-white/80 font-medium">{ixp.peers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}