import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Preloader: full-viewport animated intro for "Harshith R – AI Engineer"
// - Fades the background in
// - Scales logo text and transitions color into neon cyan
// - Shows 3-dot loading with staggered loop
// - Auto hides after delay (default ~2.2s) and calls onFinish
export default function Preloader({ onFinish, delay = 2200 }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      onFinish && onFinish()
    }, delay)
    return () => clearTimeout(t)
  }, [delay, onFinish])

  const dotVariants = {
    initial: { opacity: 0.2, y: 0 },
    animate: (i) => ({
      opacity: [0.2, 1, 0.2],
      y: [0, -6, 0],
      transition: { duration: 0.8, repeat: Infinity, delay: i * 0.15 }
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0a192f]"
          aria-label="Loading"
        >
          {/* soft glow background pulse */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vmin] h-[40vmin] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-accent-cyan/40 to-accent-purple/40" />
          </div>

          <div className="relative text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18, duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl tracking-wide text-white/90 drop-shadow"
            >
              My Portfolio
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-3 text-base md:text-lg text-cyan-300 font-medium"
            >
              Crafted by <span className="gradient-text font-heading">Harshith R</span>
            </motion.p>

            {/* 3-dot loader */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={dotVariants}
                  initial="initial"
                  animate="animate"
                  className="block w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,255,255,0.6)]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
