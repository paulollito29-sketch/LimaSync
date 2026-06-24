"use client"

import { motion } from "framer-motion"
import { FiStar } from "react-icons/fi"

const testimonials = [
  {
    name: "María García",
    role: "Dueña de Restaurant La Mar",
    location: "Miraflores, Lima",
    quote:
      "Antes perdía pedidos por WhatsApp todo el tiempo. Con LimaSync automatizamos las confirmaciones y las ventas subieron 40% en dos meses.",
  },
  {
    name: "Carlos Mendoza",
    role: "Gerente de Ferretería El Constructor",
    location: "Los Olivos, Lima",
    quote:
      "Teníamos clientes que se nos iban porque no respondíamos rápido. Ahora con los mensajes automáticos atendemos al toque y las ventas no paran.",
  },
  {
    name: "Andrea Paredes",
    role: "Asesora en Grupo Inmobiliario Nova",
    location: "San Isidro, Lima",
    quote:
      "El pipeline de ventas me cambió la vida. Sé exactamente en qué etapa está cada cliente y cuándo hacer seguimiento. Mi tasa de cierre se duplicó.",
  },
]

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
  return (
    <div className="size-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-semibold text-sm">
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600">
            Pymes peruanas que ya transformaron sus ventas con LimaSync.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <FiStar
                    key={j}
                    className="size-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-gray-600 leading-relaxed mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3.5">
                <Avatar name={t.name} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
