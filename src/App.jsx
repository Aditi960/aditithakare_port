import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CinematicIntro from './components/CinematicIntro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <CinematicIntro onComplete={() => setIntroComplete(true)} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ background: '#FAF9F6' }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
