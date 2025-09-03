'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionId } from '@/types/sections'

const navItems: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'works', label: 'Our Works' },
  { id: 'contact', label: 'Inquire' },
]

export default function NavigationInternal() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // On internal pages, keep the "Our Works" item styled as active
  const activeSection: SectionId = 'works'

  const go = (section: SectionId) => {
    router.push(`/#${section}`)
    // leave highlight as "works" until we land on /
    setIsMenuOpen(false)
  }

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
          onClick={() => go('home')}
          className="flex items-center gap-2 rounded-md p-1 focus:outline-none focus-visible:ring"
          aria-label="Go to Home"
        >
          <div className="relative h-12 w-40">
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
                    onClick={() => go(item.id)}
                    className={`rounded-md px-3 py-2 text-sm transition-colors focus:outline-none focus-visible:ring ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
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
            className="border-t border-gray-200 md:hidden"
          >
            <ul className="space-y-1 px-2 py-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => go(item.id)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
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
