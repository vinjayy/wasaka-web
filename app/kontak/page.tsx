import { MapPin, Phone, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function KontakPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      content: [
        "Jl. A. Yani Km. 10, Komplek Green Yakin",
        "Cluster Amarilis, Jalur AIII No. 225",
        "Kertak Hanyar, Kabupaten Banjar",
        "Kalimantan Selatan 70654",
      ],
    },
    {
      icon: Phone,
      title: "Telepon / WhatsApp",
      content: ["0511-5213014", "+682310532025"],
      link: "tel:05115213014",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00", "Minggu: Tutup"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="w-full bg-gradient-to-br from-[#00456e] via-[#003152] to-[#018b00] text-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Hubungi Kami</h1>
            <p className="text-lg lg:text-xl text-[#febf00] max-w-3xl text-pretty">
              Kami siap membantu kebutuhan energi dan logistik perusahaan Anda
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="w-full bg-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-2 hover:border-[#018b00] transition-all duration-300">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-[#018b00]/10 rounded-full mx-auto mb-4">
                      <info.icon className="h-7 w-7 text-[#018b00]" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                    {info.link && (
                      <a
                        href={info.link}
                        className="inline-block mt-3 text-sm text-[#018b00] hover:text-[#016700] font-medium"
                      >
                        Hubungi Sekarang
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Image Placeholder */}
            <div className="mb-16">
              <div className="aspect-[21/9] bg-gray-300 rounded-2xl" />
            </div>

            {/* WhatsApp CTA */}
            <div className="max-w-2xl mx-auto text-center">
              <Card className="border-2 border-[#018b00] bg-[#018b00]/5">
                <CardContent className="p-8 lg:p-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Hubungi via WhatsApp</h3>
                  <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                    Dapatkan respons cepat dengan menghubungi kami melalui WhatsApp
                  </p>
                  <Button asChild size="lg" className="bg-[#018b00] hover:bg-[#016700] text-white">
                    <a href="https://wa.me/682310532025" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-5 w-5" />
                      Chat via WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="w-full bg-slate-50">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Lokasi Kantor</h2>
              <p className="text-base lg:text-lg text-muted-foreground">Kunjungi kantor kami di Kalimantan Selatan</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.953407396869!2d114.82!3d-3.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjcnMDAuMCJTIDExNMKwNDknMTIuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT. Wasaka Cipta Energindo"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
