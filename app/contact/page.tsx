'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react'

// Topographic contour pattern echoing the logo's wave lines — reused
// across the site for a consistent decorative language.
function ContourPattern({
  className = '',
  opacity = 0.06,
  color = 'currentColor',
  flip = false,
}: {
  className?: string
  opacity?: number
  color?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity, color, transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M -50 80 C 150 20, 250 140, 450 90 S 750 20, 900 80" />
        <path d="M -50 150 C 150 90, 250 210, 450 160 S 750 90, 900 150" />
        <path d="M -50 220 C 150 160, 250 280, 450 230 S 750 160, 900 220" />
        <path d="M -50 290 C 150 230, 250 350, 450 300 S 750 230, 900 290" />
        <path d="M -50 360 C 150 300, 250 420, 450 370 S 750 300, 900 360" />
        <path d="M -50 430 C 150 370, 250 490, 450 440 S 750 370, 900 430" />
        <path d="M -50 500 C 150 440, 250 560, 450 510 S 750 440, 900 500" />
        <path d="M -50 570 C 150 510, 250 630, 450 580 S 750 510, 900 570" />
      </g>
    </svg>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const fieldClass = (name: string) =>
    `w-full bg-transparent border-0 border-b-2 pb-3 pt-1 text-foreground placeholder-muted-foreground/60 focus:outline-none transition-colors ${
      focusedField === name ? 'border-accent' : 'border-border'
    }`

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
        <ContourPattern className="inset-0 w-full h-full text-primary" opacity={0.06} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Let&apos;s Talk
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-5 leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to discuss your project? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section — no cards, editorial two-column layout */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-2">Contact Information</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Reach us directly, or use the form and we&apos;ll respond within one business day.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 pb-8 border-b border-border">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Phone
                  </h3>
                  <a
                    href="tel:+2347070126166"
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  >
                    0707 012 6166
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 pb-8 border-b border-border">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Email
                  </h3>
                  <a
                    href="mailto:stratoviewnigerialimited@gmail.com"
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors break-all"
                  >
                    stratoviewnigerialimited@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 pb-8 border-b border-border">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Head Office
                  </h3>
                  <p className="text-lg font-medium text-foreground">Kaduna, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-5 pb-8 border-b border-border">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Business Hours
                  </h3>
                  <p className="text-lg font-medium text-foreground">Monday – Friday</p>
                  <p className="text-muted-foreground">8:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <MessageCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/234707012166"
                    className="inline-flex items-center gap-1.5 text-lg font-medium text-foreground hover:text-accent transition-colors"
                  >
                    0707 012 6166
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fill in the details below and our team will get back to you shortly.
            </p>

            {submitted && (
              <div className="mb-8 flex items-center gap-3 p-4 bg-accent/10 text-accent rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Thank you! Your message has been received. We&apos;ll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={fieldClass('name')}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={fieldClass('email')}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={fieldClass('phone')}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={fieldClass('company')}
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  className={`${fieldClass('service')} appearance-none cursor-pointer`}
                >
                  <option value="">Select a service</option>
                  <option value="environmental">Environmental Consulting</option>
                  <option value="mineral">Mineral Exploration</option>
                  <option value="geotechnical">Geotechnical Services</option>
                  <option value="hydrogeology">Hydrogeology</option>
                  <option value="gis">GIS & Mapping</option>
                  <option value="technical">Technical Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className={`${fieldClass('message')} resize-none`}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all shadow-sm"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}