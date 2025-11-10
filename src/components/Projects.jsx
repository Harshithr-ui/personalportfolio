import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'AI Chatbot',
    description: 'A conversational agent leveraging NLP techniques for contextual responses.',
    stack: ['Python', 'Transformers', 'FastAPI'],
    code: '#',
    demo: '#'
  },
  {
    title: 'Portfolio Site',
    description: 'Futuristic, animated personal portfolio built with React and Tailwind.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    code: '#',
    demo: '#'
  },
  {
    title: 'ML Pipeline',
    description: 'Automated training & evaluation pipeline for tabular data.',
    stack: ['TensorFlow', 'Pandas', 'Docker'],
    code: '#',
    demo: '#'
  }
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="relative p-5 rounded-xl bg-midnight/50 border border-white/10 overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 pointer-events-none" />
          <h3 className="font-heading text-lg mb-2 text-white">{p.title}</h3>
          <p className="text-gray-300 text-sm mb-3">{p.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {p.stack.map((s) => (
              <span key={s} className="px-2 py-1 text-xs rounded bg-white/10 text-gray-200">
                {s}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={p.code}
              className="flex items-center gap-1 text-accent-cyan text-sm hover:underline"
            >
              <FaGithub /> Code
            </a>
            <a
              href={p.demo}
              className="flex items-center gap-1 text-accent-purple text-sm hover:underline"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
