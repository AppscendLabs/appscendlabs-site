'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Users, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutSection() {
  const stats = [
    { icon: Users, value: 'Growing Number', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Projects Completed' },
    { icon: Clock, value: '3+', label: 'Years Experience' },
    { icon: Lightbulb, value: '24/7', label: 'Support Available' },
  ]

  const values = [
    {
      title: 'Innovation',
      description:
        'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
    },
    {
      title: 'Quality',
      description:
        'Every line of code is crafted with precision, ensuring robust, scalable, and maintainable applications.',
    },
    {
      title: 'Partnership',
      description:
        'We work closely with our clients as true partners, understanding your business goals and challenges.',
    },
    {
      title: 'Excellence',
      description:
        "We're committed to delivering exceptional results that exceed expectations and drive business success.",
    },
  ]

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
          <h2 className="mb-4 text-3xl text-primary md:text-4xl">About Appscend Labs</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            We’re a passionate team of developers and designers dedicated to creating exceptional digital experiences
            that help businesses thrive in the digital age.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-primary md:text-3xl">Building the Future, One Project at a Time</h3>
            <p className="text-muted-foreground">
              Founded with a vision to bridge the gap between innovative ideas and digital reality, Appscend Labs has
              grown into a trusted partner for businesses looking to establish a strong digital presence.
            </p>
            <p className="text-muted-foreground">
              Our team combines technical expertise with creative vision to deliver solutions that not only meet your
              current needs but also scale with your future growth. From startups to enterprises, we’ve helped
              organizations across various industries achieve their digital transformation goals.
            </p>
            <p className="text-muted-foreground">
              We believe in the power of technology to transform businesses and create meaningful connections with
              users. Every project we undertake is an opportunity to push boundaries and deliver exceptional value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              {/* plain <img> to avoid next/image remote config for now */}
              <img
                src="/images/office-job.jpg"
                alt="Team workspace"
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats (now Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-semibold text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Values (Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-12 text-center text-2xl text-primary md:text-3xl">Our Core Values</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full shadow-sm transition hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}