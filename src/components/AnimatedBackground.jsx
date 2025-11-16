import React, { useEffect, useRef } from 'react'

// Parallax layered background using local Pexels images
export default function AnimatedBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const c = containerRef.current
    if (!c) return

    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      // store numeric values; append units in CSS
      c.style.setProperty('--mx', `${x}`)
      c.style.setProperty('--my', `${y}`)
    }

    const handleScroll = () => {
      const t = window.scrollY
      // store pixel offset as number
      c.style.setProperty('--scroll', `${t * 0.3}`)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 will-change-transform">
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500"
          style={{
            backgroundImage: "url('/pexels-dreamypixel-547115.jpg')",
            transform: 'translateX(calc(var(--scroll, 0) * 1px))'
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-80 transform scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "url('/pexels-philippedonn-1169754.jpg')",
            transform: 'translateX(calc(var(--scroll, 0) * 0.6px)) rotateX(calc(var(--my, 0) * 1deg)) rotateY(calc(var(--mx, 0) * 1deg))'
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 transform scale-110 transition-transform duration-900"
          style={{
            backgroundImage: "url('/pexels-felix-mittermeier-956981.jpg')",
            transform: 'translateX(calc(var(--scroll, 0) * 0.3px)) rotateX(calc(var(--my, 0) * 0.5deg)) rotateY(calc(var(--mx, 0) * 0.5deg))'
          }}
        />
      </div>
    </div>
  )
}
