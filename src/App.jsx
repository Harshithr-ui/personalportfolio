import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import AnimatedBackground from './components/AnimatedBackground'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

function useActiveSection(sectionIds, offset = 0) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const observers = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: `${-offset}px 0px ${-(window.innerHeight * 0.6)}px 0px`, threshold: 0.2 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds, offset])

  return active
}

export default function App() {
  const [dark, setDark] = useState(true)
  const [showTop, setShowTop] = useState(false)
  const [loading, setLoading] = useState(true)
  const sectionIds = useMemo(() => sections.map((s) => s.id), [])
  const active = useActiveSection(sectionIds, 80)

  // Dark mode preference
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
  }, [])
  useEffect(() => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  // Scroll-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <Preloader onFinish={() => setLoading(false)} />
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen bg-navy bg-gradient-futuristic/40"
          >
            <AnimatedBackground />
            <div className="relative z-[100]">
              <Navbar
                sections={sections}
                active={active}
                dark={dark}
                onToggleDark={() => setDark((d) => !d)}
              />

              <main className="max-w-7xl mx-auto px-4 sm:px-6">
                <section id="home" className="pt-28">
                  <Hero />
                </section>
                <SectionWrapper id="about" title="About">
                  <About />
                </SectionWrapper>
                <SectionWrapper id="education" title="Education / Experience">
                  <Education />
                </SectionWrapper>
                <SectionWrapper id="projects" title="Projects">
                  <Projects />
                </SectionWrapper>
                <SectionWrapper id="skills" title="Skills">
                  <Skills />
                </SectionWrapper>
                <SectionWrapper id="contact" title="Contact">
                  <Contact />
                </SectionWrapper>
              </main>

              <Footer />
            </div>

            <AnimatePresence>
              {showTop && (
                <motion.button
                  key="to-top"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleTop}
                  className="fixed bottom-6 right-6 p-3 rounded-full bg-accent-cyan/20 hover:bg-accent-cyan/30 text-accent-cyan shadow-glow backdrop-blur-md"
                  aria-label="Scroll to top"
                >
                  <FaArrowUp />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function SectionWrapper({ id, title, children }) {
  // Title underline animation on in-view
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) return
    const ob = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [id])

  return (
    <section id={id} className="py-20 md:py-24">
      <motion.h2
        className={`section-title ${inView ? 'animate-underline' : ''}`}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h2>
      <div className="mt-8">{children}</div>
    </section>
  )
}
