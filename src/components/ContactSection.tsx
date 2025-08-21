'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, Clock, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Anti-spam
  const [hp, setHp] = useState('')                 // honeypot (hidden)
  const startedAtRef = useRef<number>(Date.now())  // time-to-submit

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // minimal validation (Selects can’t use native `required`)
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      toast.error('Please fill in Name, Email, Project Type, and Project Description.')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          hp, // honeypot
          startedAt: startedAtRef.current,
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Failed to send')
      }

      toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.")
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      })
      setHp('')
      startedAtRef.current = Date.now()
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'appscendlabs@gmail.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (501) 288-3309',
      description: 'Mon–Fri from 8am to 5pm',
    },
  ]

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl text-primary md:text-4xl">Ready to Start Your Project?</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Let&apos;s discuss your project requirements and how we can help bring your vision to
            life. Get a free consultation and project estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Project Inquiry Form
                </CardTitle>
                <CardDescription>
                  Tell us about your project and we&apos;ll provide a customized solution
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                  {/* Honeypot (hidden field) */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Project Type *</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(v) => handleSelectChange('projectType', v)}
                      // If your Select was locking scroll, ensure global CSS has scrollbar-gutter,
                      // or use a non-modal dropdown component. (Radix Select itself doesn't lock body.)
                    >
                      <SelectTrigger disabled={isSubmitting}>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        sideOffset={8}
                        className="z-[60] bg-white dark:bg-slate-900"
                      >
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="mobile">Mobile App Development</SelectItem>
                        <SelectItem value="ecommerce">E-Commerce Platform</SelectItem>
                        <SelectItem value="custom">Custom Software Solution</SelectItem>
                        <SelectItem value="redesign">Website Redesign</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Budget Range</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(v) => handleSelectChange('budget', v)}
                      >
                        <SelectTrigger disabled={isSubmitting}>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          sideOffset={8}
                          className="z-[60] bg-white dark:bg-slate-900"
                        >
                          <SelectItem value="discuss">Let&apos;s Discuss</SelectItem>
                          <SelectItem value="100-1k">$100 – $1000</SelectItem>
                          <SelectItem value="1k-2k">$1,000 – $2,000</SelectItem>
                          <SelectItem value="2k-5k">$2,000 – $5,000</SelectItem>
                          <SelectItem value="5kplus">$5,000+ </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Project Timeline</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(v) => handleSelectChange('timeline', v)}
                      >
                        <SelectTrigger disabled={isSubmitting}>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          sideOffset={8}
                          className="z-[60] bg-white dark:bg-slate-900"
                        >
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-3months">1–3 Months</SelectItem>
                          <SelectItem value="3-6months">3–6 Months</SelectItem>
                          <SelectItem value="6months+">6+ Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="min-h-[120px]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl text-primary">Get in Touch</h3>
              <p className="mb-8 text-muted-foreground">
                We&apos;re here to help you turn your ideas into reality. Reach out to us through
                any of the following channels, and we&apos;ll respond promptly.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <Card className="border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <motion.div
                      className="rounded-full bg-primary/10 p-3"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <info.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h4 className="mb-1 text-primary">{info.title}</h4>
                      <p className="mb-1 text-muted-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="flex items-center space-x-4 p-6">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="mb-1 text-primary">Quick Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
