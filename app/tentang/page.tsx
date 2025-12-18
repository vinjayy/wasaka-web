import Image from "next/image"
import { Target, Eye, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TentangPage() {
  const missions = [
    "Memberikan layanan transportasi energi yang aman dan andal",
    "Mendukung operasional industri dan pertambangan secara berkelanjutan",
    "Menjaga kualitas armada, sistem kerja, dan sumber daya manusia",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="w-full bg-gradient-to-br from-[#00456e] via-[#003152] to-[#018b00] text-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Tentang Kami</h1>
            <p className="text-lg lg:text-xl text-[#febf00] max-w-3xl text-pretty">
              Mengenal lebih dekat PT. Wasaka Cipta Energindo
            </p>
          </div>
        </section>

        {/* Company Profile */}
        <section className="w-full bg-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Profil Perusahaan</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
                    PT. Wasaka Cipta Energindo merupakan perusahaan yang bergerak di bidang energi dan logistik, dengan
                    fokus pada layanan transportasi BBM, penjualan solar industri, serta hauling pertambangan batubara.
                  </p>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Kami berkomitmen memberikan layanan yang efisien, aman, dan sesuai standar operasional industri.
                    Dengan pengalaman dan dedikasi tinggi, kami hadir sebagai mitra terpercaya dalam mendukung kebutuhan
                    energi dan logistik industri Anda.
                  </p>
                </div>
              </div>
              <div>
                <div className="aspect-[3/2] relative rounded-2xl overflow-hidden">
                  <Image src="/tentang.jpg" alt="Profil Perusahaan" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="w-full bg-slate-50">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision */}
              <Card className="border-2">
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#018b00]/10 rounded-full mb-6">
                    <Eye className="h-8 w-8 text-[#018b00]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Visi</h3>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Menjadi perusahaan energi dan logistik yang terpercaya, profesional, dan berdaya saing tinggi di
                    Indonesia.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="border-2">
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#00456e]/10 rounded-full mb-6">
                    <Target className="h-8 w-8 text-[#00456e]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Misi</h3>
                  <ul className="space-y-3">
                    {missions.map((mission, index) => (
                      <li key={index} className="flex gap-3">
                        <CheckCircle2 className="h-6 w-6 text-[#018b00] flex-shrink-0 mt-0.5" />
                        <span className="text-base lg:text-lg text-muted-foreground leading-relaxed">{mission}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full bg-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image src="/komitmen.jpeg" alt="Komitmen Kami" fill className="object-cover" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Komitmen Kami</h2>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Kami berkomitmen untuk terus meningkatkan kualitas layanan dan profesionalisme dalam setiap aspek
                  operasional. Keselamatan, ketepatan waktu, dan kepuasan pelanggan adalah prioritas utama kami dalam
                  menjalankan bisnis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
