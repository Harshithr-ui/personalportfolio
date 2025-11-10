import React from 'react'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Link as ScrollLink } from 'react-scroll'

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-midnight/60 border border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial" />
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            color: { value: ['#00eaff', '#a855f7'] },
            links: { enable: true, color: '#00eaff', distance: 120, opacity: 0.3 },
            move: { enable: true, speed: 1.2 },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } }
          },
          detectRetina: true
        }}
      />

      <div className="relative z-10 px-6 py-20 md:py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="gradient-text">Harshith R</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-300"
        >
          <span className="text-white">AI Engineer</span> •{' '}
          <span className="text-accent-cyan">
            <Typewriter
              words={["AI Engineer", "Web Developer", "Tech Innovator"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-4 max-w-2xl mx-auto text-gray-400"
        >
          Building intelligent, data-driven solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <ScrollLink
            to="contact"
            smooth
            offset={-64}
            duration={500}
            className="px-6 py-3 rounded-md bg-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/30 shadow-glow cursor-pointer"
          >
            Hire Me
          </ScrollLink>
          <a
            href="#"
            className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/15 text-white border border-white/10"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  )
}
