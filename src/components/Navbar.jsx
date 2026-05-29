import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-gold/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-padding flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="font-serif text-charcoal text-xl tracking-luxury font-light hover:text-gold transition-colors duration-300"
        >
          AT
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNav(link)}
                className="font-sans text-xs tracking-luxury text-ink/70 hover:text-gold transition-colors duration-300 uppercase"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-charcoal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-cream/98 backdrop-blur-md border-t border-gold/20 py-6 px-8"
        >
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleNav(link)}
                  className="font-sans text-xs tracking-luxury text-ink/70 hover:text-gold transition-colors duration-300 uppercase"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
