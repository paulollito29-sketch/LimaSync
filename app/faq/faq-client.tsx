"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronDown } from "react-icons/fi"

export default function FaqClient({
  faqs,
}: {
  faqs: { q: string; a: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
          >
            <span className="font-semibold text-gray-900 text-sm pr-4">
              {faq.q}
            </span>
            <FiChevronDown
              className={`size-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
