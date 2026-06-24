"use client"

import { motion } from "framer-motion"
import { FiGlobe, FiCode, FiSettings, FiUsers } from "react-icons/fi"

const services = [
  {
    icon: FiGlobe,
    title: "Web Básico",
    price: "S/ 499",
    desc: "Landing page profesional lista en 5 días. Ideal para negocios que quieren presencia digital inmediata.",
    features: [
      "Diseño responsive",
      "Formulario de contacto",
      "Hosting 6 meses gratis",
      "Dominio .pe incluido",
    ],
  },
  {
    icon: FiCode,
    title: "Web Profesional",
    price: "S/ 1,299",
    desc: "Web corporativa completa con panel administrativo. Perfecta para empresas que quieren vender online.",
    features: [
      "Hasta 10 páginas",
      "Panel administrador",
      "Blog integrado",
      "Galería de imágenes",
      "SEO optimizado",
    ],
    popular: true,
  },
  {
    icon: FiSettings,
    title: "Automatización Empresarial",
    price: "Desde S/ 2,499",
    desc: "Automatiza procesos repetitivos de tu negocio: facturación, inventarios, reportes y más.",
    features: [
      "Diagnóstico gratuito",
      "Flujos personalizados",
      "Integración con sistemas",
      "Soporte 3 meses",
    ],
  },
  {
    icon: FiUsers,
    title: "CRM y Gestión Comercial",
    price: "Desde S/ 99/mes",
    desc: "Gestiona clientes, ventas y seguimiento desde un solo lugar. Recupera leads y cierra más negocios.",
    features: [
      "Pipeline de ventas",
      "Automatización WhatsApp",
      "Reportes en tiempo real",
      "Soporte prioritario",
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Soluciones para cada etapa
          </h2>
          <p className="text-lg text-gray-600">
            Desde tu primera página web hasta la automatización completa de tu negocio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                service.popular
                  ? "border-brand-500 bg-brand-50/30 shadow-md shadow-brand-500/10"
                  : "border-gray-100 bg-white hover:border-brand-200 hover:shadow-brand-500/5"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 inset-x-0 flex justify-center">
                  <span className="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Más popular
                  </span>
                </div>
              )}
              <div
                className={`size-12 rounded-xl flex items-center justify-center mb-4 ${
                  service.popular ? "bg-brand-600" : "bg-brand-100"
                }`}
              >
                <service.icon
                  className={`size-6 ${
                    service.popular ? "text-white" : "text-brand-600"
                  }`}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-2xl font-bold text-brand-600 mb-3">
                {service.price}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {service.desc}
              </p>
              <ul className="space-y-2.5">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="size-4 text-brand-500 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
