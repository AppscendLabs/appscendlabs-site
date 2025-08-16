'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { SectionId } from '@/types/sections'

type FooterProps = {
  onSectionChange: (section: SectionId) => void
}

export default function Footer({ onSectionChange }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const navigationLinks: { label: string; section: SectionId }[] = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Services', section: 'services' },
    { label: 'Our Works', section: 'works' },
    { label: 'Contact', section: 'contact' },
  ]

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-Commerce Solutions',
    'Backend Development',
    'Consulting',
  ] as const

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ] as const

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
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
            <p className="text-sm text-primary-foreground/80">
              Creating exceptional digital experiences that help businesses thrive in the digital age.
              Your trusted partner for web and mobile development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-base font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.section}>
                  <motion.button
                    onClick={() => onSectionChange(link.section)}
                    className="text-left text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-base font-medium">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-base font-medium">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">hello@appscendlabs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">123 Innovation Drive, Tech City</span>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => onSectionChange('contact')}
              >
                Get a Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"
        >
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Appscend Labs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
