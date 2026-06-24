import type { Metadata } from "next"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce LimaSync. Nuestra misión es democratizar la tecnología para PYMES peruanas con soluciones accesibles y efectivas.",
}

export default function NosotrosPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-36 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Nosotros
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Hacemos que la tecnología funcione para tu negocio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LimaSync nació con una misión clara: llevar la transformación digital a
            las PYMES peruanas sin el costo ni la complejidad de las grandes
            consultoras.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
                Nuestra historia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  LimaSync comenzó cuando nos dimos cuenta de que las PYMES peruanas
                  estaban siendo ignoradas por la industria tecnológica. Las
                  soluciones disponibles eran demasiado caras, demasiado complejas o
                  simplemente no estaban diseñadas para la realidad del mercado
                  peruano.
                </p>
                <p>
                  Decidimos cambiar eso. Creamos LimaSync con un enfoque simple:
                  soluciones tecnológicas accesibles, implementación rápida y
                  resultados reales. Sin contratos de permanencia, sin costos ocultos,
                  sin necesidad de conocimientos técnicos.
                </p>
                <p>
                  Hoy, más de 50 PYMES peruanas confían en nosotros para su
                  transformación digital. Desde restaurantes en Miraflores hasta
                  talleres mecánicos en Los Olivos, estamos ayudando a negocios de
                  todo tipo a crecer con tecnología.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="/images/Professionals_working_in_office_202606232142.jpeg"
                alt="Equipo LimaSync trabajando"
                className="w-full rounded-2xl object-cover"
              />
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-6 text-center">
                  En números
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "+50", label: "PYMES clientes" },
                    { value: "+120", label: "Proyectos entregados" },
                    { value: "4.9/5", label: "Satisfacción" },
                    { value: "5 días", label: "Implementación promedio" },
                    { value: "100%", label: "Soporte local" },
                    { value: "0", label: "Contratos de permanencia" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl font-bold text-brand-600">
                        {s.value}
                      </div>
                      <div className="text-sm text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Nuestros valores
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-10 text-left">
              {[
                {
                  title: "Accesibilidad",
                  desc: "Tecnología de calidad al alcance de todas las PYMES, no solo de las grandes empresas.",
                },
                {
                  title: "Simpleza",
                  desc: "Soluciones fáciles de usar, sin curvas de aprendizaje ni complicaciones técnicas.",
                },
                {
                  title: "Resultados",
                  desc: "No medimos nuestro éxito en líneas de código, sino en el crecimiento de tus ventas.",
                },
              ].map((v) => (
                <div key={v.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#45adad14_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            ¿Listo para ser parte de nuestra historia?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Únete a las +50 PYMES que ya confían en LimaSync para su
            transformación digital.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.97]"
          >
            Agenda tu demo gratuita <FiArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
