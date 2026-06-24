"use client"

import { motion } from "framer-motion"
import { FiDollarSign, FiZap, FiEdit3 } from "react-icons/fi"

const reasons = [
  {
    icon: FiDollarSign,
    title: "Precio accesible",
    desc: "Soluciones desde S/ 499. Tecnología de calidad al alcance de tu pyme, sin inversiones imposibles.",
  },
  {
    icon: FiZap,
    title: "Implementación rápida",
    desc: "Tu proyecto funcionando en 5 días hábiles. Olvídate de esperas interminables con otras agencias.",
  },
  {
    icon: FiEdit3,
    title: "Soluciones personalizadas",
    desc: "No vendemos plantillas. Cada solución se adapta a tu negocio, tus procesos y tus metas.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            ¿Por qué LimaSync?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            La mejor decisión para tu negocio
          </h2>
          <p className="text-lg text-gray-600">
            Nos diferenciamos por nuestra obsesión en hacer que la tecnología trabaje
            para ti.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="size-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="size-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
