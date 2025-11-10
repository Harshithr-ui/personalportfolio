import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    // Mock submit
    setTimeout(() => setSent(true), 400)
  }

  return (
    <div className="relative">
      <div className="absolute inset-x-0 -top-24 -bottom-24 bg-gradient-futuristic/40 blur-3xl -z-10" />
      <div className="grid md:grid-cols-2 gap-8">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6"
        >
          <div className="mb-4">
            <label className="block text-sm mb-1">Name</label>
            <input
              className="w-full px-3 py-2 rounded bg-midnight/70 border border-white/10 focus:outline-none focus:border-accent-cyan text-gray-100"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded bg-midnight/70 border border-white/10 focus:outline-none focus:border-accent-cyan text-gray-100"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full px-3 py-2 rounded bg-midnight/70 border border-white/10 focus:outline-none focus:border-accent-cyan text-gray-100"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="px-5 py-2 rounded bg-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/30 shadow-glow"
          >
            Send Message
          </button>

          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-3 text-accent-cyan"
              >
                Message Sent ✓ (mock)
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6"
        >
          <h4 className="font-heading text-xl mb-3">Connect</h4>
          <p className="text-gray-300 mb-4">I’m open to collaborations, internships, and freelance opportunities.</p>
          <div className="flex gap-4 text-2xl">
            <a
              className="text-accent-cyan hover:scale-110 transition"
              href="https://www.linkedin.com/in/harshith-r-a2b18921a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-white hover:text-accent-purple hover:scale-110 transition"
              href="https://github.com/Harshithr-ui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-accent-cyan hover:scale-110 transition"
              href="mailto:rharshith576@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
