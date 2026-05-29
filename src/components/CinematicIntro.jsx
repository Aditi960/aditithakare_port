import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CinematicIntro({ onComplete }) {
  const [phase, setPhase] = useState('name') // name | sweep | done

  useEffect(() => {
    // Phase 1: name animates in over ~2.5s
    // Phase 2: name animates out + gold sweep at ~3.2s
    // Phase 3: main site fades in at ~4.2s
    const t1 = setTimeout(() => setPhase('sweep'), 3200)
    const t2 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 4600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#000' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Gold sweep overlay */}
          <AnimatePresence>
            {phase === 'sweep' && (
              <motion.div
                className="absolute inset-0 z-10"
                style={{ background: '#D4AF37' }}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              />
            )}
          </AnimatePresence>

          {/* Name container */}
          <motion.div
            className="relative z-20 text-center select-none"
            animate={
              phase === 'sweep'
                ? {
                    y: -40,
                    x: -20,
                    scale: 0.85,
                    rotate: -2,
                    opacity: 0,
                  }
                : {}
            }
            transition={
              phase === 'sweep'
                ? { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
                : {}
            }
          >
            {/* ADITI */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                letterSpacing: '0.18em',
                lineHeight: 1,
                display: 'block',
              }}
            >
              Aditi
            </motion.div>

            {/* THAKARE — slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.9 }}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                letterSpacing: '0.18em',
                lineHeight: 1,
                display: 'block',
              }}
            >
              Thakare
            </motion.div>

            {/* Gold underline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.7 }}
              style={{
                height: '1.5px',
                background: '#D4AF37',
                transformOrigin: 'left center',
                marginTop: '12px',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
