'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Smartphone,
  Globe,
  Palette,
  Database,
  Zap,
  Users,
  Shield,
  Rocket,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description:
        'Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines beautiful aesthetics with intuitive functionality.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable architecture and secure data management.',
      features: ['API Development', 'Database Design', 'Cloud Integration'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your applications with advanced optimization techniques and best practices.',
      features: ['Code Optimization', 'Caching Strategies', 'Monitoring'],
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description:
        'Comprehensive security audits and ongoing maintenance to keep your applications secure.',
      features: ['Security Audits', 'Regular Updates', '24/7 Monitoring'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl text-primary md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            From concept to deployment, we provide comprehensive development services to bring your digital
            vision to life.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
            >
              <Card className="h-full border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="pb-4 text-center">
                  <motion.div
                    className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-3"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <service.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-primary/5 px-3 py-1 text-xs text-primary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="mb-12 text-center text-2xl text-primary md:text-3xl">
            Our Development Process
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { icon: Users, title: 'Discovery', description: 'Understanding your needs and goals' },
              { icon: Palette, title: 'Design', description: 'Creating beautiful, functional designs' },
              { icon: Code, title: 'Development', description: 'Building with the latest technologies' },
              { icon: Rocket, title: 'Launch', description: 'Deploying and optimizing your solution' },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="mx-auto mb-4 w-fit rounded-full bg-primary/5 p-4"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <step.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h4 className="mb-1 text-primary">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
