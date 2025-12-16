import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">PT. Wasaka</div>
                <div className="text-xs text-gray-400">Cipta Energindo</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Perusahaan yang bergerak di bidang transportasi BBM, penjualan solar industri, dan hauling pertambangan
              dengan mengutamakan keselamatan dan profesionalisme.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300 leading-relaxed">
                  <p>Jl. A. Yani Km. 10, Komplek Green Yakin</p>
                  <p>Cluster Amarilis, Jalur AIII No. 225</p>
                  <p>Kertak Hanyar, Kabupaten Banjar</p>
                  <p>Kalimantan Selatan 70654</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:05115213014" className="text-sm text-gray-300 hover:text-white transition-colors">
                  0511-5213014
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Link Cepat</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                Beranda
              </Link>
              <Link href="/tentang" className="text-sm text-gray-300 hover:text-white transition-colors">
                Tentang Kami
              </Link>
              <Link href="/layanan" className="text-sm text-gray-300 hover:text-white transition-colors">
                Layanan
              </Link>
              <Link href="/kontak" className="text-sm text-gray-300 hover:text-white transition-colors">
                Kontak
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PT. Wasaka Cipta Energindo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
