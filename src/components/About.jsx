import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="relative min-h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-glow">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent-cyan/15 to-accent-purple/15 blur-2xl" />

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="font-heading text-2xl text-white">Who Am I?</h3>
          <p className="text-gray-200 leading-relaxed">
            I'm an aspiring AI Engineer passionate about building intelligent systems that make a difference. I love working with machine learning, automation, and full-stack web technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="/pic.png"
              alt="Photo of Harshith R"
              loading="eager"
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl border-2 border-accent-cyan/30 shadow-glow backdrop-blur-sm"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
