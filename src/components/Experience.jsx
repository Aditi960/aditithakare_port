import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from './About'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <div className="gold-line-full mb-20" />

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle eyebrow="Experience" title={<>Professional<br /><span className="italic">journey</span></>} />

          <div className="relative pl-6 border-l border-ink/10">
            <div
              className="absolute -left-1 top-2 w-2 h-2 rounded-full border border-gold"
              style={{ background: '#D4AF37' }}
            />
            <div className="mb-3">
              <span className="font-sans text-xs tracking-luxury text-gold/80 uppercase">
                2025 — Present
              </span>
            </div>
            <h3 className="font-serif font-light text-charcoal text-xl mb-2">
              Freelance Web Developer
            </h3>
            <p className="font-sans font-light text-ink/60 text-sm leading-loose">
              Building responsive business websites and modern frontend solutions for local brands and clients. Delivering clean, performant, and visually refined digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SectionTitle eyebrow="Education" title={<>Academic<br /><span className="italic">foundation</span></>} />

          <div className="relative pl-6 border-l border-ink/10">
            <div
              className="absolute -left-1 top-2 w-2 h-2 rounded-full border border-gold"
              style={{ background: '#D4AF37' }}
            />
            <div className="mb-3">
              <span className="font-sans text-xs tracking-luxury text-gold/80 uppercase">
                2023 — 2026
              </span>
            </div>
            <h3 className="font-serif font-light text-charcoal text-xl mb-2">
              Bachelor of Computer Applications
            </h3>
            <p className="font-sans font-light text-ink/60 text-sm leading-loose">
              HV Desai College, Pune, Maharashtra. Developing a strong foundation in computer science, software engineering, and emerging technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
