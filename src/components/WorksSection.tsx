'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function WorksSection() {
  const projects = [
    {
      title: 'FinTech Dashboard',
      description:
        'A comprehensive financial analytics platform with real-time data visualization and advanced reporting capabilities.',
      image:
        'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
      category: 'Web Application',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Modern e-commerce solution with seamless shopping experience, payment integration, and inventory management.',
      image:
        'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'MongoDB'],
      category: 'E-Commerce',
    },
    {
      title: 'Fitness Mobile App',
      description:
        'Cross-platform fitness tracking app with workout plans, progress monitoring, and social features.',
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'Mobile App',
    },
    {
      title: 'Corporate Website',
      description:
        'Professional corporate website with content management system, SEO optimization, and responsive design.',
      image:
        'https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Gatsby', 'GraphQL', 'Contentful', 'GSAP'],
      category: 'Website',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl text-primary md:text-4xl">Our Latest Works</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Explore our portfolio of successful projects that showcase our expertise in creating innovative digital
            solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item} whileHover={{ y: -5 }}>
              <Card className="h-full overflow-hidden border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative">

                    {/* Hover overlay actions */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <div className="flex gap-4">
                        <Button size="sm" variant="secondary">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">{project.category}</Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="mb-2 text-primary">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-primary/5 px-3 py-1 text-xs text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}