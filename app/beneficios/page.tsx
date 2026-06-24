import type { Metadata } from "next"
import Benefits from "@/app/components/benefits"
import WhyUs from "@/app/components/why-us"
import CtaSection from "@/app/components/cta-section"

export const metadata: Metadata = {
  title: "Beneficios",
  description:
    "Descubre cómo LimaSync ayuda a PYMES peruanas a ahorrar tiempo, reducir costos, aumentar productividad y digitalizarse rápido.",
}

export default function BeneficiosPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-36 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Por qué LimaSync
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Resultados que hablan solos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No prometemos. Demostramos. Cada beneficio está respaldado por datos de
            nuestros clientes.
          </p>
        </div>
      </section>

      <Benefits />

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sin inversión inicial enorme",
                desc: "Empezamos desde S/ 499. No necesitas un presupuesto de agencia grande para tener presencia digital profesional.",
                stat: "S/ 499",
                statLabel: "desde",
              },
              {
                title: "Resultados en días, no meses",
                desc: "Tu página web lista en 5 días. Tu automatización funcionando en menos de 2 semanas. Sin esperas.",
                stat: "5 días",
                statLabel: "implementación promedio",
              },
              {
                title: "Soporte local, en tu idioma",
                desc: "Estamos en Lima. Hablamos tu mismo idioma y entendemos la realidad de las PYMES peruanas.",
                stat: "Lima, Perú",
                statLabel: "soporte local",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <div className="text-3xl font-bold text-brand-600 mb-1">
                  {item.stat}
                </div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-4">
                  {item.statLabel}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <CtaSection
        title="¿Listo para ver estos resultados en tu negocio?"
        description="Agenda una demo personalizada y te mostramos cómo lograrlo."
        buttonText="Agenda tu demo"
      />
    </>
  )
}
