import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const timeline = [
  {
    title: 'B.Tech in Artificial Intelligence',
    place: 'Jain University',
    period: '2024 – 2028',
    icon: '🎓',
    description: 'Focused on AI, ML, Data Science fundamentals and practical projects.'
  },
  {
    title: '100 Days of Code: The Complete Python ProBootcamp',
    place: 'Udemy',
    period: '2025',
    icon: '🏅',
    description: 'Completed a multi-course program covering supervised/unsupervised learning, model evaluation, and best practices.',
    link: '/UC-0a6c5d3e-dee9-47f1-b5bb-4f44b4f7d084 (1).pdf'
  },
  {
    title: 'Pre University',
    place: 'Alvas PU College',
    period: '2022-2024',
    icon: '🎓',
    description: 'PCMC - 85%'
  },
  {
    title: 'Schooling ',
    place: 'Prarthana Central School',
    period: '2022',
    icon: '🎓',
    description: 'CBSE - 77%'
  }
]

export default function Education() {
  return (
    <div className="relative">
      <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-accent-cyan/40" />
      <ul className="space-y-10 md:space-y-14">
        {timeline.map((item, idx) => (
          <li key={item.title} className="md:flex md:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="md:w-1/2 relative pl-14 md:pl-0"
            >
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-xl shadow-glow">
                <span>{item.icon}</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                <h3 className="font-heading text-lg text-white mb-1">{item.title}</h3>
                <p className="text-accent-cyan text-sm mb-2">{item.place} • {item.period}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-accent-purple hover:underline"
                  >
                    View Certificate <FaExternalLinkAlt />
                  </a>
                )}
                {/* Inline preview if link is an image */}
                {item.link && /\.(png|jpg|jpeg|webp)$/i.test(item.link) && (
                  <img
                    src={item.link}
                    alt={`${item.title} certificate preview`}
                    loading="lazy"
                    className="mt-3 w-full max-h-64 object-contain rounded border border-white/10"
                  />
                )}
                {/* Collapsible preview for PDFs */}
                {item.link && /\.pdf$/i.test(item.link) && (
                  <details className="mt-3">
                    <summary className="cursor-pointer text-gray-300 text-sm hover:text-white">Preview certificate</summary>
                    <div className="mt-2 bg-black/30 rounded border border-white/10 overflow-hidden">
                      <iframe
                        src={item.link}
                        title={`${item.title} certificate`}
                        className="w-full h-72"
                      />
                    </div>
                  </details>
                )}
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  )
}
