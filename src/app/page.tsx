'use client'

import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { Toaster } from '@/components/ui/sonner'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WorksSection from '@/components/WorksSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import type { SectionId } from '@/types/sections'


const SECTIONS: SectionId[] = ['home', 'about', 'services', 'works', 'contact']

export default function Page() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  // Keep DOM refs for each section
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    home: null,
    about: null,
    services: null,
    works: null,
    contact: null,
  })

  // Keep current active in a ref to avoid stale closure inside observer callback
  const activeRef = useRef<SectionId>('home')
  useEffect(() => {
    activeRef.current = activeSection
  }, [activeSection])

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const handleSectionChange = useCallback((section: SectionId) => {
    if (activeRef.current !== section) setActiveSection(section)
    const el = sectionRefs.current[section]
    if (!el) return
    el.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [prefersReducedMotion])

  // IntersectionObserver scroll spy — set up once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        const id = visible?.target.getAttribute('id') as SectionId | undefined
        if (id && id !== activeRef.current) {
          setActiveSection(id)
        }
      },
      {
        root: null,
        // Negative top margin to account for fixed/sticky navbar height,
        // and a large bottom negative margin so the next section can take over while scrolling.
        rootMargin: '-96px 0px -55% 0px',
        threshold: [0.15, 0.3, 0.5, 0.7, 0.9],
      }
    )

    // Observe all sections that exist
    SECTIONS.forEach((id) => {
      const el = sectionRefs.current[id]
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Common props for sections (note the refSetter returns void)
  const sectionCommon = useMemo(
    () => ({
      className: 'scroll-mt-24', // ~96px offset for sticky nav; adjust if your nav height changes
      refSetter: (id: SectionId) => (el: HTMLElement | null): void => {
        sectionRefs.current[id] = el
      },
    }),
    []
  )

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main>
        <section id="home" className={sectionCommon.className} ref={sectionCommon.refSetter('home')}>
          <HeroSection onSectionChange={handleSectionChange} />
        </section>

        <section id="about" className={sectionCommon.className} ref={sectionCommon.refSetter('about')}>
          <AboutSection />
        </section>

        <section id="services" className={sectionCommon.className} ref={sectionCommon.refSetter('services')}>
          <ServicesSection />
        </section>

        <section id="works" className={sectionCommon.className} ref={sectionCommon.refSetter('works')}>
          <WorksSection />
        </section>

        <section id="contact" className={sectionCommon.className} ref={sectionCommon.refSetter('contact')}>
          <ContactSection />
        </section>
      </main>

      <Footer onSectionChange={handleSectionChange} />

      <Toaster position="top-right" richColors closeButton />
    </div>
  )
}
