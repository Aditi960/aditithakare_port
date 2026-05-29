import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from './About'

const skillCategories = [
  {
    category: 'AI & ML',
    skills: ['Python', 'TensorFlow', 'scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'NLP'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Backend',
    skills: ['Python', 'Node.js', 'REST APIs', 'C Programming', 'SQL', 'Database Design'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'Framer Motion', 'Figma', 'Vercel', 'Netlify'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <div className="gold-line-full mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle eyebrow="Expertise" title={<>Craft &<br /><span className="italic">capability</span></>} />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map(({ category, skills }, catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + catIdx * 0.12 }}
            className="group relative p-8 border border-ink/8 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.4)' }}
          >
            {/* Gold accent top bar */}
            <div
              className="absolute top-0 left-0 h-px bg-gold transition-all duration-500 group-hover:w-full"
              style={{ width: '30%' }}
            />

            <h3 className="font-sans text-xs tracking-luxury text-gold uppercase mb-6">
              {category}
            </h3>

            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
                  <span className="font-sans font-light text-ink/70 text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
