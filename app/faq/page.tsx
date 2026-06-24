import type { Metadata } from "next"
import FaqClient from "./faq-client"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respuestas a las dudas más comunes sobre LimaSync: precios, implementación, soporte y más.",
}

const faqs = [
  {
    q: "¿Cuánto tiempo toma implementar una página web?",
    a: "Nuestro plan Web Básico está listo en 5 días hábiles. El Web Profesional toma de 7 a 10 días. Trabajamos con un proceso ágil para que tengas resultados rápido.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "Para nada. Nosotros nos encargamos de todo. Tú solo nos cuentas lo que necesitas y nosotros lo construimos. Si eliges el plan Web Profesional, incluye capacitación para que puedas gestionar tu contenido.",
  },
  {
    q: "¿Ofrecen hosting y dominio?",
    a: "Sí. Todos los planes web incluyen hosting gratuito por 6 meses y dominio .pe. Pasado ese periodo, puedes renovar con nosotros o transferirlo — sin penalidades.",
  },
  {
    q: "¿Cómo funciona la automatización de procesos?",
    a: "Primero hacemos un diagnóstico gratuito de tus procesos actuales. Identificamos qué se puede automatizar, diseñamos los flujos y los implementamos. Tú solo supervisas los resultados.",
  },
  {
    q: "¿El CRM se integra con WhatsApp?",
    a: "Sí. Nuestro CRM tiene integración nativa con WhatsApp. Puedes enviar mensajes automáticos, programar recordatorios y gestionar todas tus conversaciones desde un solo panel.",
  },
  {
    q: "¿Hay contrato de permanencia?",
    a: "No. Trabajamos sin contratos de permanencia. Si no estás satisfecho, puedes cancelar cuando quieras. Nuestra prioridad es que estés contento con el servicio.",
  },
  {
    q: "¿Dan soporte después de la implementación?",
    a: "Sí. Todos los planes incluyen soporte. Los planes de automatización y CRM incluyen soporte prioritario. Estamos en Lima y respondemos en menos de 24 horas.",
  },
  {
    q: "¿Puedo ver una demo antes de contratar?",
    a: "Por supuesto. Agendamos una llamada sin compromiso donde te mostramos cómo funciona la solución que necesitas. Sin ventas agresivas, solo mostramos lo que hacemos.",
  },
]

export default function FaqPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-36 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Preguntas frecuentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Respuestas rápidas a las dudas más comunes. Si no encuentras lo que
            buscas, contáctanos directamente.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <FaqClient faqs={faqs} />
        </div>
      </section>
    </>
  )
}
