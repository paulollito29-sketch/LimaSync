import type { Metadata } from "next"
import Testimonials from "@/app/components/testimonials"
import CtaSection from "@/app/components/cta-section"

export const metadata: Metadata = {
  title: "Testimonios",
  description:
    "PYMES peruanas que ya transformaron sus ventas con LimaSync. Historias reales de clientes reales.",
}

export default function TestimoniosPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-36 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Lo que dicen nuestros clientes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dueños de PYMES peruanas que confiaron en LimaSync y transformaron su
            forma de vender.
          </p>
        </div>
      </section>

      <Testimonials />

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                initials: "RL",
                name: "Raúl López",
                role: "Dueño de Taller Mecánico El Rápido",
                quote:
                  "Tenía una hoja de Excel con 300 clientes y no sabía cómo organizarlos. Con el CRM de LimaSync ahora les envío mensajes automáticos y las visitas al taller subieron 25%.",
              },
              {
                initials: "CP",
                name: "Carmen Pizarro",
                role: "Directora de Colegio San Patricio",
                quote:
                  "Necesitábamos una web institucional urgente para las matrículas. En 4 días teníamos el sitio funcionando. Recibimos más de 200 solicitudes de matrícula online esa semana.",
              },
              {
                initials: "JV",
                name: "Jorge Villanueva",
                role: "Gerente de Distribuidora Nova",
                quote:
                  "Automatizamos el proceso de pedidos con LimaSync. Lo que antes tomaba 3 horas diarias ahora se hace solo. Mi equipo se dedica a vender, no a llenar formatos.",
              },
              {
                initials: "LG",
                name: "Lucía Gutiérrez",
                role: "CEO de Clínica Dental Care",
                quote:
                  "La página web que nos hicieron es impecable. Mis pacientes pueden agendar citas online y tenemos un sistema de recordatorio automático. Las cancelaciones bajaron 60%.",
              },
              {
                initials: "PR",
                name: "Pedro Rojas",
                role: "Fundador de Café de Altura",
                quote:
                  "Pasamos de vender por llamada telefónica a tener pedidos online 24/7. La implementación fue rapidísima y el soporte siempre responde al toque.",
              },
              {
                initials: "SM",
                name: "Sofía Mendoza",
                role: "Consultora de Recursos Humanos",
                quote:
                  "LimaSync me ayudó a automatizar todo mi proceso de facturación y seguimiento de clientes. Ahora facturo el doble trabajando las mismas horas.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      className="size-4 fill-yellow-400 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 leading-relaxed mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3.5">
                  <div className="size-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-semibold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Únete a las +50 PYMES que ya confían en nosotros"
        description="Agenda una demo y descubre cómo podemos ayudarte a crecer."
      />
    </>
  )
}
