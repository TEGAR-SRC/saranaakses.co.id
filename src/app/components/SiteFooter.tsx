export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-xl font-bold text-white mb-4">PT Sarana Akses Pratama</div>
            <p className="text-sm text-white/60 leading-relaxed max-w-md mb-6">
              Managed Service Digital Ecosystem yang menjamin konektivitas digital performa tinggi yang saling terhubung dan terkenda. Solusi teknologi terpercaya untuk kebutuhan bisnis Anda.
            </p>
            {/* Social media links removed as requested */}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Colocation Server</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bandwidth Options</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support 24/7</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
            <div className="space-y-2 text-sm text-white/60">
              <div>Jl. Ali Kelana MB2 Blok B28 No. 01,</div>
              <div>Belian, Batam Kota, Kepulauan Riau</div>
              <div className="mt-3">
                <a href="tel:+627785522601" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                  </svg>
                  +62 778 5522601
                </a>
              </div>
              <div>
                <a href="mailto:cs@saranaakses.co.id" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  cs@saranaakses.co.id
                </a>
              </div>
              <div>
                <a href="https://saranaakses.co.id" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118C6.004 2.42 4.751 1.718 4.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118C13.996 2.42 15.249 1.718 15.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946c-.668 6.282-1.921 6.984-2.783 4.118zm-6.268 0C6.004 17.58 4.751 16.882 4.083 15h1.946c.089 1.546.383 2.97.837 4.118z" clipRule="evenodd" />
                  </svg>
                  saranaakses.co.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-8">
        <div className="mx-auto w-full max-w-6xl px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <div>© {new Date().getFullYear()} PT Sarana Akses Pratama. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

