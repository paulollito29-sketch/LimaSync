"use client"

import { motion } from "framer-motion"
import { FiClock, FiDollarSign, FiTrendingUp, FiZap } from "react-icons/fi"

const benefits = [
  {
    icon: FiClock,
    title: "Ahorro de tiempo",
    desc: "Automatiza tareas repetitivas y dedica tu energía a lo que importa: hacer crecer tu negocio.",
    stat: "80%",
    statLabel: "menos tiempo en tareas manuales",
  },
  {
    icon: FiDollarSign,
    title: "Reducción de costos",
    desc: "Elimina gastos innecesarios en herramientas sueltas. Una sola plataforma para todo tu negocio.",
    stat: "60%",
    statLabel: "de reducción en costos operativos",
  },
  {
    icon: FiTrendingUp,
    title: "Mayor productividad",
    desc: "Tu equipo venderá más con procesos claros y herramientas diseñadas para resultados.",
    stat: "3x",
    statLabel: "más leads convertidos en clientes",
  },
  {
    icon: FiZap,
    title: "Digitalización rápida",
    desc: "Implementamos en días, no en meses. Tu negocio digital funcionando en menos de una semana.",
    stat: "5 días",
    statLabel: "implementación promedio",
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="section-shell mesh-bg">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="brand-pill mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resultados reales para tu negocio
          </h2>
          <p className="text-lg text-gray-600">
            Esto es lo que nuestros clientes logran con LimaSync.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card lift-card rounded-3xl p-6"
            >
              <div className="size-12 bg-brand-100 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="size-6 text-brand-600" />
              </div>
              <div className="text-3xl font-bold text-brand-600 mb-1">
                {item.stat}
              </div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-4">
                {item.statLabel}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
