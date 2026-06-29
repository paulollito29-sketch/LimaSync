"use client"

import { motion } from "framer-motion"
import {
  FiXCircle,
  FiClock,
  FiFileText,
  FiUsers,
  FiMessageCircle,
  FiLayers,
  FiTrendingUp,
  FiMonitor,
  FiCheck,
} from "react-icons/fi"

const problems = [
  {
    icon: FiXCircle,
    title: "Pierdes ventas por WhatsApp",
    desc: "Los clientes escriben y nadie responde a tiempo. Las oportunidades se enfrían.",
  },
  {
    icon: FiClock,
    title: "No haces seguimiento",
    desc: "Se te olvida llamar o escribir. Los clientes se van con la competencia.",
  },
  {
    icon: FiFileText,
    title: "Usas Excel para todo",
    desc: "Apuntas pedidos en hojas sueltas, pierdes información y no tienes control.",
  },
  {
    icon: FiUsers,
    title: "Desorden en tus ventas",
    desc: "No sabes quién compró, qué compró ni cuándo volverá a comprar.",
  },
]

const solutions = [
  {
    icon: FiMessageCircle,
    title: "Automatización de WhatsApp",
    desc: "Responde al instante con mensajes automáticos. Programa recordatorios y campañas.",
  },
  {
    icon: FiLayers,
    title: "CRM simple y poderoso",
    desc: "Todo tu negocio en un panel: clientes, ventas, productos. Sin complicaciones.",
  },
  {
    icon: FiTrendingUp,
    title: "Seguimiento inteligente",
    desc: "El sistema te avisa cuándo contactar a cada cliente. No pierdas oportunidades.",
  },
  {
    icon: FiMonitor,
    title: "Panel en tiempo real",
    desc: "Gráficos y métricas claras para tomar decisiones informadas al instante.",
  },
]

export default function ProblemSolution() {
  return (
    <section className="section-shell mesh-bg">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="brand-pill mb-4">
            <span className="size-2 bg-brand-500 rounded-full" />
            Problema → Solución
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-lg text-gray-600">
            Las pymes peruanas pierden miles de soles al mes por no tener un sistema
            de ventas ordenado. Te mostramos el antes y el después.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center gap-2">
              <span className="size-5 rounded-full bg-red-100 flex items-center justify-center">
                <FiXCircle className="size-3 text-red-500" />
              </span>
              El problema
            </h3>
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card flex gap-4 rounded-2xl p-5 transition-all hover:border-red-200"
              >
                <div className="shrink-0 size-11 bg-red-50 rounded-lg flex items-center justify-center">
                  <item.icon className="size-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-600 mb-6 flex items-center gap-2">
              <span className="size-5 rounded-full bg-brand-100 flex items-center justify-center">
                <FiCheck className="size-3 text-brand-500" />
              </span>
              Nuestra solución
            </h3>
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card flex gap-4 rounded-2xl p-5 transition-all hover:border-brand-200"
              >
                <div className="shrink-0 size-11 bg-brand-50 rounded-lg flex items-center justify-center">
                  <item.icon className="size-5 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
