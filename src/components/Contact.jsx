import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from './About'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const mailtoLink = `mailto:aditithakare02@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <div className="gold-line-full mb-20" />

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle eyebrow="Contact" title={<>Let's<br /><span className="italic">connect</span></>} />

          <p className="font-sans font-light text-ink/60 text-sm leading-loose mb-10">
            Whether you have a project in mind, a question, or simply want to connect — I'd love to hear from you.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:aditithakare02@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-ink/10 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/40 group-hover:text-gold transition-colors duration-300">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-sans text-xs text-ink/30 tracking-wide mb-0.5">Email</div>
                <div className="font-sans font-light text-ink/70 text-sm group-hover:text-gold transition-colors duration-300">
                  aditithakare02@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Aditi960"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-ink/10 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <span className="text-ink/40 group-hover:text-gold transition-colors duration-300">
                  <GithubIcon />
                </span>
              </div>
              <div>
                <div className="font-sans text-xs text-ink/30 tracking-wide mb-0.5">GitHub</div>
                <div className="font-sans font-light text-ink/70 text-sm group-hover:text-gold transition-colors duration-300">
                  github.com/Aditi960
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/aditi-thakare-9aa5831b0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-ink/10 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <span className="text-ink/40 group-hover:text-gold transition-colors duration-300">
                  <LinkedInIcon />
                </span>
              </div>
              <div>
                <div className="font-sans text-xs text-ink/30 tracking-wide mb-0.5">LinkedIn</div>
                <div className="font-sans font-light text-ink/70 text-sm group-hover:text-gold transition-colors duration-300">
                  Aditi Thakare
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-ink/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="font-sans text-xs text-ink/30 tracking-wide mb-0.5">Location</div>
                <div className="font-sans font-light text-ink/60 text-sm">Pune, Maharashtra, India</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sent ? (
            <div className="flex flex-col items-start justify-center h-full py-16">
              <div className="gold-line mb-6" />
              <h3 className="font-serif font-light text-charcoal text-2xl mb-3">
                Message sent
              </h3>
              <p className="font-sans font-light text-ink/60 text-sm">
                Your email client has been opened. Thank you for reaching out.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-sans text-xs tracking-luxury text-ink/40 uppercase block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-ink/15 py-3 font-sans font-light text-ink/80 text-sm focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-ink/20"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="font-sans text-xs tracking-luxury text-ink/40 uppercase block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-ink/15 py-3 font-sans font-light text-ink/80 text-sm focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-ink/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-sans text-xs tracking-luxury text-ink/40 uppercase block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-ink/15 py-3 font-sans font-light text-ink/80 text-sm focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-ink/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="font-sans text-xs tracking-luxury uppercase px-10 py-4 bg-charcoal text-cream hover:bg-gold transition-all duration-400 mt-2"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
