import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar({ sections, active, dark, onToggleDark }) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-midnight/50 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-heading text-xl gradient-text">Harshith R</a>

        <ul className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <li key={s.id}>
              <ScrollLink
                to={s.id}
                spy
                smooth
                offset={-64}
                duration={500}
                className={`cursor-pointer transition-colors ${
                  active === s.id ? 'text-accent-cyan' : 'text-gray-300 hover:text-white'
                }`}
              >
                {s.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleDark}
            className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-accent-cyan"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
