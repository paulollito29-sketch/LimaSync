import Link from "next/link"
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi"

const social = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
]

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Planes", href: "/planes" },
  { label: "Beneficios", href: "/beneficios" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Contacto", href: "/contacto" },
  { label: "FAQ", href: "/faq" },
  { label: "Nosotros", href: "/nosotros" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-xl text-white">LimaSync</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Soluciones tecnológicas para PYMES en Perú. Transformamos tu negocio
              con herramientas digitales accesibles, rápidas y efectivas. Más de 50
              empresas peruanas confían en nosotros.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2.5">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Más</h4>
            <ul className="space-y-2.5">
              {footerLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-white mb-4 mt-6">Síguenos</h4>
            <div className="flex gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="size-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all"
                >
                  <item.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} LimaSync. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
