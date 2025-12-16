import { Fuel, Factory, Truck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
                  {/* Icon Side */}
                  <div className="w-full lg:w-2/5">
                    <div className="aspect-[4/3] bg-gray-300 rounded-2xl" />
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
