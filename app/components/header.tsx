"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Planes", href: "/planes" },
  { label: "Beneficios", href: "/beneficios" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "FAQ", href: "/faq" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/85 backdrop-blur-2xl border-b border-white/70 shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="group flex items-center gap-2.5">
          <img
            src="/images/Logo.png"
            alt="LimaSync"
            className="size-9 rounded-xl shadow-sm transition-transform group-hover:scale-105"
          />
          <span
            className={`font-bold text-xl tracking-tight ${
              scrolled || !isHome ? "text-gray-900" : "text-white"
            }`}
          >
            LimaSync
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/60 bg-white/50 p-1.5 shadow-sm backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all whitespace-nowrap ${
                pathname === link.href
                  ? scrolled || !isHome
                    ? "bg-brand-50 text-brand-700 shadow-sm"
                    : "bg-white/10 text-white shadow-sm"
                  : scrolled || !isHome
                    ? "text-gray-600 hover:bg-white hover:text-brand-700"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-brand-600 to-secondary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/20 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Agenda una demo
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled || !isHome ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
          aria-label="Menú"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 font-medium transition-colors ${
                    pathname === link.href
                      ? "text-brand-600"
                      : "text-gray-700 hover:text-brand-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="block text-center bg-brand-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-brand-700 transition-colors mt-2"
              >
                Agenda una demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
