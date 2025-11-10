import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'TensorFlow', level: 75 },
  { name: 'React', level: 85 },
  { name: 'Java', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Machine Learning', level: 78 },
  { name: 'Data Structures', level: 82 }
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.05 }}
          className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent-cyan/40 transition group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-200">{skill.name}</span>
            <span className="text-accent-cyan text-sm">{skill.level}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: skill.level + '%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
