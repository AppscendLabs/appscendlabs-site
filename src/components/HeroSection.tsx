'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

type SectionId = 'home' | 'about' | 'services' | 'works' | 'contact'

export default function HeroSection({
  onSectionChange,
}: {
  onSectionChange: (section: SectionId) => void
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const floatingIcons = [
    { Icon: Code, delay: 0, x: -20, y: -10 },
    { Icon: Smartphone, delay: 1, x: 20, y: 15 },
    { Icon: Globe, delay: 2, x: -10, y: 20 },
  ]

  return (
    <section className="relative flex min-h-[90dvh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/10"
            style={{ left: `${20 + index * 30}%`, top: `${30 + index * 20}%` }}
            animate={{ x: [0, x, 0], y: [0, y, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon className="h-16 w-16 md:h-24 md:w-24" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.h1 variants={itemVariants} className="text-4xl text-primary md:text-6xl lg:text-7xl">
            We Make Ideas
            <motion.span
              className="block text-primary/80"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Come to Life
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Appscend Labs specializes in creating stunning websites and mobile applications that elevate your business
            and deliver exceptional user experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary */}
            <Button
              size="lg"
              onClick={() => onSectionChange('contact')}
              className="group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              aria-label="Start your project"
            >
              <span className="mr-2">Start Your Project</span>
              <ArrowRight className="h-4 w-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Button>
              
            {/* Outline */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => onSectionChange('works')}
              className="transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              aria-label="View our work"
            >
              View Our Work
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 pt-16">
            {[
              { Icon: Globe, text: 'Web Development' },
              { Icon: Smartphone, text: 'Mobile Apps' },
              { Icon: Code, text: 'Custom Solutions' },
            ].map(({ Icon, text }) => (
              <motion.div
                key={text}
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="rounded-full bg-primary/5 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </span>
                <span className="text-sm text-muted-foreground">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
