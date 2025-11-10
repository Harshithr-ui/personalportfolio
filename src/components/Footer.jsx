import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-white/10 py-8 bg-midnight/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {year} Harshith R • All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          {['home','about','skills','projects','education','contact'].map((id) => (
            <ScrollLink key={id} to={id} smooth offset={-64} duration={500} className="text-gray-300 hover:text-white cursor-pointer">
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </ScrollLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
