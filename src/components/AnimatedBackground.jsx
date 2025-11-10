import React from 'react'

// Global animated background with Spline scene
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {/* Spline 3D scene - Full visibility and interactive */}
      <iframe
        src="https://my.spline.design/particles-rMDD6W7ifiTePnGz6ePOeVZP/"
        frameBorder="0"
        width="100%"
        height="100%"
        title="Interactive 3D Particles Background"
        loading="eager"
        className="absolute inset-0 w-full h-full pointer-events-auto"
        allow="autoplay; fullscreen; gyroscope; accelerometer"
        style={{ 
          pointerEvents: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: 1000
        }}
      />
    </div>
  )
}
