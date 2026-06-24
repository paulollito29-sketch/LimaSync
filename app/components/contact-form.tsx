"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiSend, FiCheckCircle, FiMail, FiMapPin } from "react-icons/fi"
import { validateForm } from "@/lib/utils"

const contactInfo = [
  { icon: FiMail, label: "Email", value: "hola@limasync.pe" },
  { icon: FiMapPin, label: "Ubicación", value: "Lima, Perú" },
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validation = validateForm(form)
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#45adad14_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#59c3c30f_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-brand-900/50 text-brand-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Empieza a transformar tu negocio hoy
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Déjanos tus datos y uno de nuestros asesores te contactará para
              mostrarte cómo LimaSync puede ayudarte a crecer.
            </p>

            <div className="space-y-4 hidden lg:block">
              {[
                "Sin compromiso",
                "Demo personalizada para tu negocio",
                "Soporte en la implementación",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="size-5 text-brand-400 shrink-0" />
                  <span className="text-gray-400">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="size-9 bg-white/10 rounded-lg flex items-center justify-center">
                    <item.icon className="size-4 text-brand-400" />
                  </div>
                  <span className="text-gray-400 text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="size-16 bg-brand-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle className="size-8 text-brand-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ¡Gracias por contactarnos!
                </h3>
                <p className="text-gray-400">
                  Hemos recibido tu solicitud. Te contactaremos en las próximas 24
                  horas para coordinar una demo personalizada.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-5"
              >
                {(["name", "email", "company"] as const).map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      {field === "name"
                        ? "Nombre completo"
                        : field === "email"
                          ? "Correo electrónico"
                          : "Empresa"}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                        errors[field]
                          ? "border-red-400"
                          : "border-white/10 focus:border-brand-500/50"
                      }`}
                      placeholder={
                        field === "name"
                          ? "Tu nombre"
                          : field === "email"
                            ? "correo@ejemplo.com"
                            : "Nombre de tu negocio"
                      }
                    />
                    {errors[field] && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none ${
                      errors.message
                        ? "border-red-400"
                        : "border-white/10 focus:border-brand-500/50"
                    }`}
                    placeholder="Cuéntanos sobre tu negocio..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-600 text-white py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <FiSend className="size-4" />
                  Solicitar demo gratuita
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
