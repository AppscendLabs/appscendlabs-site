'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function WorksSection() {
  const projects = [
    {
      title: 'LoopFit',
      description:
        'Habit loops, friendly challenges, and Apple Health integration to keep you consistent.',
      image: '/images/loopfit-cover.png',
      technologies: ['React Native', 'Expo', 'Apple Health'],
      category: 'Mobile App',
      href: '/works/loopfit',
    },
    // {
    //   title: 'FinTech Dashboard',
    //   description:
    //     'A comprehensive financial analytics platform with real-time visualization and advanced reporting.',
    //   image:
    //     'https://images.unsplash.com/photo-1575388902449-6bca946ad549?auto=format&fit=crop&w=1600&q=80',
    //   technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
    //   category: 'Web Application',
    //   href: '#',
    // },
  ] as const

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.15 } },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
  }

  return (
    <section id="works" className="bg-slate-50 py-20">
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
            Explore projects that showcase our expertise in building modern, delightful products.
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
              {/* Make the whole card clickable */}
              <div className="relative group">
                <Card className="h-full overflow-hidden border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative h-56 w-full">
                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      {...(project.image.startsWith('http') ? { unoptimized: true } : {})}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>

                    {/* Hover hint */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white/80 px-3 py-1 text-sm text-primary backdrop-blur">
                        View details →
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="mb-2 text-primary">{project.title}</h3>
                    <p className="mb-4 text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/5 px-3 py-1 text-xs text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Full-card link overlay */}
                {project.href
                //  && project.href !== '#' 
                  && (
                  <Link
                    href={project.href}
                    className="absolute inset-0"
                    aria-label={`View ${project.title}`}
                  >
                    <span className="sr-only">View {project.title}</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
