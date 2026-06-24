"use client"

import { motion } from "framer-motion"
import { FiArrowRight, FiCheck } from "react-icons/fi"

export default function CtaSection({
  title,
  description,
  buttonText = "Agenda tu demo gratuita",
  buttonHref = "/contacto",
  benefits = ["Sin compromiso", "Demo personalizada", "Soporte en implementación"],
}: {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  benefits?: string[]
}) {
  return (
    <section className="py-24 lg:py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#45adad14_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#59c3c30f_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-gray-400 text-sm"
              >
                <FiCheck className="size-4 text-brand-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>

          <a
            href={buttonHref}
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.97]"
          >
            {buttonText}
            <FiArrowRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
