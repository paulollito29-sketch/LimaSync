"use client"

import { motion } from "framer-motion"

export default function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mb-16"
    >
      <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
        <span className="size-2 bg-brand-500 rounded-full" />
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600">{description}</p>
    </motion.div>
  )
}
