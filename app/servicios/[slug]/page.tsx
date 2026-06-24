import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FiCheck, FiArrowLeft, FiArrowRight } from "react-icons/fi"
import CtaSection from "@/app/components/cta-section"

const services = {
  "web-basico": {
    title: "Web Básico",
    subtitle: "Tu primer paso digital",
    price: "S/ 499",
    desc: "Landing page profesional lista en 5 días. Ideal para negocios que quieren presencia digital inmediata sin complicaciones.",
    features: [
      "Diseño responsive (se ve bien en celular y computadora)",
      "Formulario de contacto integrado",
      "Hosting y dominio .pe incluidos por 6 meses",
      "Optimización básica SEO",
      "Integración con WhatsApp",
      "1 ronda de revisiones",
    ],
    ideal: "Emprendedores, restaurantes, talleres, profesionales independientes.",
    color: "bg-brand-100 text-brand-700",
  },
  "web-profesional": {
    title: "Web Profesional",
    subtitle: "Tu negocio en línea 24/7",
    price: "S/ 1,299",
    desc: "Web corporativa completa con panel administrativo. Perfecta para empresas que quieren vender online y gestionar su contenido.",
    features: [
      "Hasta 10 páginas",
      "Panel administrador (edita contenido sin programar)",
      "Blog integrado para atraer clientes",
      "Galería de imágenes y portafolio",
      "SEO optimizado para Google",
      "Integración con redes sociales",
      "Formularios inteligentes",
      "2 rondas de revisiones",
      "Capacitación del equipo",
    ],
    ideal: "Empresas en crecimiento, clínicas, colegios, tiendas online.",
    color: "bg-brand-600 text-white",
  },
  automatizacion: {
    title: "Automatización Empresarial",
    subtitle: "Deja que la tecnología haga el trabajo pesado",
    price: "Desde S/ 2,499",
    desc: "Automatiza procesos repetitivos de tu negocio: facturación, inventarios, reportes, cobranzas y más.",
    features: [
      "Diagnóstico gratuito de procesos",
      "Flujos de trabajo personalizados",
      "Integración con tus sistemas actuales",
      "Automatización de cobranzas y facturación",
      "Reportes automáticos",
      "Notificaciones y alertas inteligentes",
      "Soporte y mantenimiento 3 meses",
    ],
    ideal: "Empresas con procesos manuales que quieren escalar sin contratar más personal.",
    color: "bg-brand-100 text-brand-700",
  },
  crm: {
    title: "CRM y Gestión Comercial",
    subtitle: "Vende más, organiza mejor",
    price: "Desde S/ 99/mes",
    desc: "Gestiona clientes, ventas y seguimiento desde un solo lugar. Recupera leads perdidos y cierra más negocios.",
    features: [
      "Pipeline de ventas visual",
      "Automatización de WhatsApp",
      "Historial completo de clientes",
      "Recordatorios inteligentes de seguimiento",
      "Reportes y dashboards en tiempo real",
      "Importación de contactos desde Excel",
      "Soporte prioritario 24/7",
    ],
    ideal: "Equipos de ventas, asesores inmobiliarios, consultores, distribuidoras.",
    color: "bg-brand-100 text-brand-700",
  },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const service = services[slug as keyof typeof services]
  if (!service) return { title: "Servicio no encontrado" }
  return {
    title: `${service.title} — ${service.subtitle}`,
    description: service.desc,
  }
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export default async function ServicePage({ params }: Props) {
  const slug = (await params).slug
  const service = services[slug as keyof typeof services]
  if (!service) notFound()

  const slugs = Object.keys(services)
  const index = slugs.indexOf(slug)
  const prev = index > 0 ? slugs[index - 1] : null
  const next = index < slugs.length - 1 ? slugs[index + 1] : null

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-36 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-600 transition-colors mb-8"
          >
            <FiArrowLeft className="size-4" />
            Volver a servicios
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 ${service.color}`}
              >
                {service.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                {service.title}
              </h1>
              <p className="text-3xl font-bold text-brand-600 mb-4">
                {service.price}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <p className="text-sm text-gray-500 mb-8">
                <strong className="text-gray-700">Ideal para:</strong>{" "}
                {service.ideal}
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-brand-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.97]"
              >
                Quiero este servicio <FiArrowRight className="size-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-5">
                Incluye
              </h3>
              <ul className="space-y-3.5">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <FiCheck className="size-5 text-brand-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex justify-between items-center">
            {prev ? (
              <Link
                href={`/servicios/${prev}`}
                className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors"
              >
                <FiArrowLeft className="size-4" />
                <span className="text-sm font-medium">
                  {services[prev as keyof typeof services].title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/servicios/${next}`}
                className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors"
              >
                <span className="text-sm font-medium">
                  {services[next as keyof typeof services].title}
                </span>
                <FiArrowRight className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CtaSection
        title={`¿Listo para tu ${service.title.toLowerCase()}?`}
        description="Agenda una demo sin compromiso y descubre cómo podemos ayudarte."
        buttonText="Agenda tu demo"
      />
    </>
  )
}
