import type { Metadata } from "next"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: "%s | LimaSync",
    default: "LimaSync — Transformación Digital para PYMES en Perú",
  },
  description:
    "LimaSync ayuda a PYMES peruanas a digitalizarse con páginas web, automatización de procesos, CRM y soluciones accesibles.",
  openGraph: {
    title: "LimaSync — Transformación Digital para PYMES",
    description:
      "Soluciones tecnológicas accesibles para PYMES en Perú. Web, automatización, CRM.",
    locale: "es_PE",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
