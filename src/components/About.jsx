import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  { label: 'Role', value: 'AI & Full-Stack Developer' },
  { label: 'Location', value: 'Pune, India' },
  { label: 'Education', value: 'BCA @ HV Desai College' },
  { label: 'Status', value: 'Freelance Web Developer' },
]

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-5">
        <div className="gold-line" />
        <span className="font-sans text-xs tracking-luxury text-gold uppercase">{eyebrow}</span>
      </div>
      <h2
        className="font-serif font-light text-charcoal leading-tight"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        {title}
      </h2>
    </div>
  )
}

export { SectionTitle }

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <div className="gold-line-full mb-20" />

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <SectionTitle eyebrow="About Me" title={<>The mind<br /><span className="italic">behind the work</span></>} />
          <p className="font-sans font-light text-ink/70 leading-loose text-base mb-6">
            I'm Aditi Thakare, an AI & Full-Stack Developer based in Pune, India. I build intelligent systems and elegant web applications — focused on clean architecture, usability, and modern engineering.
          </p>
          <p className="font-sans font-light text-ink/60 leading-loose text-sm">
            My work sits at the intersection of machine intelligence and thoughtful design. I believe the best software is invisible — it simply works, beautifully.
          </p>
        </motion.div>

        {/* Right — highlights */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="space-y-0"
        >
          {highlights.map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-6 py-5 border-b border-ink/8"
            >
              <span className="font-sans text-xs tracking-luxury text-gold/80 uppercase w-28 flex-shrink-0 pt-0.5">
                {label}
              </span>
              <span className="font-sans font-light text-ink/80 text-sm leading-relaxed">
                {value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
