import { Fuel, Factory, Truck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LayananPage() {
  const services = [
    {
      icon: Fuel,
      title: "Transportir BBM",
      description:
        "Layanan pengangkutan BBM menggunakan armada yang terawat serta mengikuti standar keselamatan dan regulasi yang berlaku.",
      features: [
        "Armada tangki modern dan terawat",
        "Pengemudi bersertifikat dan berpengalaman",
        "Sistem keselamatan sesuai standar industri",
        "Monitoring real-time perjalanan",
        "Asuransi lengkap untuk setiap pengiriman",
      ],
      image: "/trans-bbm.jpeg",
    },
    {
      icon: Factory,
      title: "Penjualan BBM Solar Industri",
      description:
        "Penyediaan BBM solar industri untuk kebutuhan pabrik, proyek, dan perusahaan dengan pasokan yang stabil dan berkualitas.",
      features: [
        "Pasokan BBM berkualitas tinggi",
        "Pengiriman tepat waktu",
        "Harga kompetitif",
        "Sistem pembayaran fleksibel",
        "Layanan konsultasi kebutuhan BBM",
      ],
      image: "/images/service-penjualan-bbm.jpg",
    },
    {
      icon: Truck,
      title: "Coal Mining Hauling",
      description:
        "Layanan hauling batubara dari area tambang ke titik tujuan dengan pengelolaan operasional yang efisien dan aman.",
      features: [
        "Armada dump truck berkapasitas besar",
        "Operator berpengalaman di area tambang",
        "Manajemen operasional yang efisien",
        "Sistem pemeliharaan berkala",
        "Kepatuhan terhadap standar K3 pertambangan",
      ],
      image: "/coalmining.jpeg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="w-full bg-gradient-to-br from-[#00456e] via-[#003152] to-[#018b00] text-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Layanan Kami</h1>
            <p className="text-lg lg:text-xl text-[#febf00] max-w-3xl text-pretty">
              Solusi lengkap untuk kebutuhan energi dan logistik industri Anda
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="w-full bg-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="space-y-16 lg:space-y-24">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 lg:gap-12 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-2/5">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-3/5">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#018b00]/10 flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#018b00]" />
                          </div>
                          <span className="text-base text-muted-foreground leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Armada Support Section */}
        <section className="w-full bg-white border-t">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Available Armada Support</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Armada lengkap untuk mendukung operasional distribusi BBM dan hauling pertambangan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Truck Tanki */}
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border-2 border-transparent hover:border-[#018b00] transition-all duration-300">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden mb-6">
                  <Image src="/armada-bbm.jpeg" alt="Truck Tanki" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00456e] rounded-lg flex items-center justify-center">
                    <Fuel className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Truck Tanki</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#febf00]/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-[#00456e]">5</span>
                    </div>
                    <span className="text-muted-foreground">Kapasitas 16.000 KL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#febf00]/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-[#00456e]">5</span>
                    </div>
                    <span className="text-muted-foreground">Kapasitas 10.000 KL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#febf00]/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-[#00456e]">6</span>
                    </div>
                    <span className="text-muted-foreground">Kapasitas 5.000 KL</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm text-[#018b00] font-semibold">Total: 16 Unit</p>
                </div>
              </div>

              {/* SPOB */}
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border-2 border-transparent hover:border-[#018b00] transition-all duration-300">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden mb-6">
                  <Image src="/spob.jpeg" alt="SPOB" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#018b00] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 20h20M4 20V10l8-6 8 6v10M12 4v2M8 20v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">SPOB</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Self-Propelled Oil Barge</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#febf00]/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-[#00456e]">1</span>
                    </div>
                    <span className="text-muted-foreground">Kapasitas 200 KL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#febf00]/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-[#00456e]">2</span>
                    </div>
                    <span className="text-muted-foreground">Kapasitas 150 KL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#febf00]/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-[#00456e]">1</span>
                    </div>
                    <span className="text-muted-foreground">Kapasitas 100 KL</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm text-[#018b00] font-semibold">Total: 4 Unit</p>
                </div>
              </div>

              {/* Armada Truck Hauling */}
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border-2 border-transparent hover:border-[#018b00] transition-all duration-300">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/truck.jpeg"
                    alt="Armada Truck Hauling"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#febf00] rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-[#00456e]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Armada Truck Hauling</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#febf00]/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-[#00456e]">10</span>
                    </div>
                    <span className="text-muted-foreground">Tronton roda 10</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#febf00]/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-[#00456e]">15</span>
                    </div>
                    <span className="text-muted-foreground">Trintin roda 12</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm text-[#018b00] font-semibold">Total: 25 Unit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-slate-50">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
            <div className="bg-gradient-to-br from-[#00456e] to-[#003152] rounded-2xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Tertarik dengan Layanan Kami?</h2>
              <p className="text-base lg:text-lg text-[#febf00] mb-8 max-w-2xl mx-auto text-pretty">
                Konsultasikan kebutuhan energi dan logistik perusahaan Anda dengan tim profesional kami
              </p>
              <Button asChild size="lg" className="bg-[#febf00] hover:bg-[#e5ab00] text-black font-semibold">
                <Link href="/kontak">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
