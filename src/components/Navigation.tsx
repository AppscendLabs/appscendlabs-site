'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionId } from '@/types/sections'

type NavigationProps = {
  activeSection: SectionId
  onSectionChange: (section: SectionId) => void
}

const navItems: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'works', label: 'Our Works' },
  { id: 'contact', label: 'Inquire' },
]

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur"
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => onSectionChange('home')}
          className="flex items-center gap-2 rounded-md p-1 focus:outline-none focus-visible:ring"
          aria-label="Go to Home"
        >
            <div className="relative w-40 h-12"> {/* parent sets size */}
              <Image
                src="/images/Appscend Labs, LLC Logo No background.png"
                alt="Appscend Labs"
                fill
                className="object-contain"
                priority
              />
            </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="ml-6 flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onSectionChange(item.id)}
                    className={`px-3 py-2 text-sm rounded-md transition-colors focus:outline-none focus-visible:ring
                      ${isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-primary'}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="md:hidden border-t border-gray-200"
          >
            <ul className="space-y-1 px-2 py-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onSectionChange(item.id)
                        setIsMenuOpen(false)
                      }}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors
                        ${isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-primary'}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
