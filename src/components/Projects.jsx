import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from './About'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
)

const projects = [
  {
    number: '01',
    title: 'Brijwasi Tours Website',
    category: 'Client Project',
    description:
      'A fully responsive, modern website for a local travel business. Clean layouts with intuitive navigation and tour showcase.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: 'Web',
  },
  {
    number: '02',
    title: 'Restaurant Management System',
    category: 'Systems',
    description:
      'A terminal-based management system handling orders, menu, and billing workflows with robust data handling.',
    tech: ['C Programming'],
    type: 'Systems',
  },
  {
    number: '03',
    title: 'InterviewAI',
    category: 'AI / ML',
    description:
      'An AI-powered interview preparation assistant. Generates contextual questions and provides intelligent feedback on responses.',
    tech: ['Python', 'AI/ML'],
    type: 'AI',
  },
  {
    number: '04',
    title: 'Student Image Processor v4',
    category: 'Computer Vision',
    description:
      'An image processing pipeline for student management — face detection, processing, and automated categorization.',
    tech: ['Python', 'OpenCV'],
    type: 'AI',
  },
  {
    number: '05',
    title: 'Movie Data Analysis',
    category: 'Data Science',
    description:
      'Exploratory analysis of movie datasets with visualizations uncovering trends in ratings, genres, and box office performance.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    type: 'Data',
  },
  {
    number: '06',
    title: 'B-K Neon',
    category: 'Client Project',
    description:
      'Brand website for a neon signage business. Bold visual design with product showcasing and inquiry flow.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: 'Web',
  },
]

const typeColors = {
  Web: 'text-emerald-600/70',
  Systems: 'text-blue-600/70',
  AI: 'text-gold',
  Data: 'text-purple-600/70',
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <div className="gold-line-full mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle eyebrow="Projects" title={<>Selected<br /><span className="italic">works</span></>} />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.number}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05 + i * 0.1 }}
            className="group relative p-8 border border-ink/8 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 cursor-default"
            style={{ background: 'rgba(255,255,255,0.35)' }}
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-6">
              <span className="font-serif text-3xl text-ink/10 font-light">
                {project.number}
              </span>
              <span className={`font-sans text-xs tracking-wide uppercase ${typeColors[project.type]}`}>
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif font-light text-charcoal text-xl mb-4 leading-snug group-hover:text-ink transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-sans font-light text-ink/55 text-sm leading-loose mb-6 flex-1">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-sans text-xs text-ink/40 border border-ink/10 px-2.5 py-1 tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Gold bottom bar on hover */}
            <div className="absolute bottom-0 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
