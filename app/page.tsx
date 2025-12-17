import Link from "next/link"
import { Fuel, Factory, Truck, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      icon: Fuel,
      title: "Transportir BBM",
      description: "Layanan pengangkutan BBM dengan armada terawat dan mengikuti standar keselamatan yang berlaku.",
    },
    {
      icon: Factory,
      title: "Penjualan BBM Solar Industri",
      description: "Penyediaan BBM solar industri untuk kebutuhan pabrik dan perusahaan dengan pasokan yang stabil.",
    },
    {
      icon: Truck,
      title: "Coal Mining Hauling",
      description: "Layanan hauling batubara dengan pengelolaan operasional yang efisien dan aman.",
    },
  ]

  const advantages = [
    {
      icon: Award,
      title: "Berpengalaman",
      description: "Pengalaman luas di sektor energi & pertambangan",
    },
    {
      icon: Truck,
      title: "Armada Terawat",
      description: "Armada modern yang terawat dan siap operasi",
    },
    {
      icon: Shield,
      title: "Standar K3",
      description: "Tim profesional dengan standar keselamatan kerja",
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Pelayanan yang aman dan tepat waktu",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-[#00456e] via-[#003152] to-[#018b00] text-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
                  PT. Wasaka Cipta Energindo
                </h1>
                <p className="text-xl lg:text-2xl text-[#febf00] mb-4">Solusi Energi & Logistik Terpercaya</p>
                <p className="text-base lg:text-lg text-gray-200 leading-relaxed mb-8 text-pretty">
                  Perusahaan yang bergerak di bidang transportasi BBM, penjualan solar industri, dan hauling
                  pertambangan dengan mengutamakan keselamatan, ketepatan waktu, dan profesionalisme.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-[#febf00] hover:bg-[#e5ab00] text-black font-semibold">
                    <Link href="/kontak">Hubungi Kami</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Link href="/layanan">Layanan Kami</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/hero.jpeg"
                    alt="PT Wasaka Cipta Energindo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full bg-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/about.jpeg"
                    alt="PT Wasaka Cipta Energindo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 text-balance">
                  Tentang PT. Wasaka Cipta Energindo
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                  PT. Wasaka Cipta Energindo hadir untuk mendukung kebutuhan distribusi energi dan logistik industri,
                  khususnya sektor pertambangan dan industri di Kalimantan Selatan dan sekitarnya.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full bg-slate-50">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Layanan Utama</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Kami menyediakan berbagai layanan di bidang energi dan logistik untuk mendukung operasional industri
                Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-[#018b00] transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center justify-center w-14 h-14 bg-[#018b00]/10 rounded-lg mb-4">
                      <service.icon className="h-7 w-7 text-[#018b00]" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-[#00456e] hover:bg-[#003152]">
                <Link href="/layanan">Lihat Semua Layanan</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="w-full bg-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Keunggulan Perusahaan</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Komitmen kami untuk memberikan layanan terbaik dengan standar tertinggi
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#febf00]/20 rounded-full mx-auto mb-4">
                    <advantage.icon className="h-8 w-8 text-[#00456e]" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#00456e] text-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Siap Bekerja Sama dengan Kami?</h2>
              <p className="text-base lg:text-lg text-[#febf00] mb-8 text-pretty">
                Hubungi kami untuk mendiskusikan kebutuhan energi dan logistik perusahaan Anda
              </p>
              <Button asChild size="lg" className="bg-[#febf00] text-black hover:bg-[#e5ab00] font-semibold">
                <Link href="/kontak">Hubungi Kami Sekarang</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
