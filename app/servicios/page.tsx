import type { Metadata } from "next"
import Services from "@/app/components/services"
import CtaSection from "@/app/components/cta-section"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "LimaSync ofrece páginas web, automatización de procesos, CRM y transformación digital para PYMES peruanas.",
}

export default function ServiciosPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-36 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Servicios
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Soluciones para cada etapa de tu negocio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desde que das tu primer paso digital hasta que automatizas cada proceso
            comercial — crecemos contigo.
          </p>
        </div>
      </section>
      <Services />
      <CtaSection
        title="¿No sabes por dónde empezar?"
        description="Agenda una llamada gratuita de 15 minutos y te recomendamos el plan ideal para tu negocio."
        buttonText="Quiero una asesoría gratuita"
      />
    </>
  )
}
