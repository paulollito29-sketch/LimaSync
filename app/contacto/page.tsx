import type { Metadata } from "next"
import ContactForm from "@/app/components/contact-form"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para una demo gratuita. LimaSync — Transformación digital para PYMES peruanas.",
}

export default function ContactoPage() {
  return (
    <>
      <section className="pt-32 pb-4 lg:pt-36 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-900/50 text-brand-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Contacto
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Hagamos crecer tu negocio
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Cuéntanos sobre tu negocio y te mostraremos cómo LimaSync puede
            ayudarte a digitalizarte y vender más.
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
