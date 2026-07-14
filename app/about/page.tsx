import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Shield, Zap, Leaf, Users, Quote, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Stratoview Nigeria',
  description: 'Learn about Stratoview Nigeria Limited - our mission, values, and leadership',
}

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

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'url("/images/IMG_3602.JPG")',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(15,22,19,0.82) 0%, rgba(15,22,19,0.62) 55%, rgba(15,22,19,0.35) 100%)',
          }}
        />
        <ContourPattern className="inset-0 w-full h-full text-white" opacity={0.08} />

        <ScrollAnimation
          animation="fade-in-up"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Who We Are
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight">
            About Stratoview Nigeria
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            Earthwise Solutions • Sustainable Results
          </p>
        </ScrollAnimation>

        {/* Quick stats strip */}
        <ScrollAnimation
          animation="fade-in-up"
          delay={150}
          className="relative z-10 max-w-4xl mx-auto mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </ScrollAnimation>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="relative h-full bg-card border border-border rounded-2xl p-10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <ContourPattern className="-inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] text-primary" opacity={0.04} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To become a leading geoscience and environmental consulting firm in Africa, recognized for delivering innovative, sustainable, and high-impact solutions that promote responsible resource management, environmental stewardship, and infrastructure development.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={100}>
            <div className="relative h-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-2xl p-10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <ContourPattern className="-inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] text-white" opacity={0.1} flip />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="leading-relaxed text-lg opacity-90">
                  To provide high-quality geoscience, environmental, and technical consulting services through scientific excellence, innovation, integrity, and collaboration, enabling our clients to make informed decisions, achieve regulatory compliance, manage environmental risks, and deliver sustainable development outcomes.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-primary" opacity={0.05} />
        <div className="relative max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              What Drives Us
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              These principles guide everything we do
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <ScrollAnimation key={idx} animation="scale-in" delay={idx * 80}>
                <div className="group h-full bg-background p-7 rounded-xl border border-border text-center hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{value.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              Our Edge
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Work With Us</h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {reasons.map((reason, idx) => (
              <ScrollAnimation key={idx} animation="fade-in-up" delay={idx * 60}>
                <div className="group flex gap-4 p-4 rounded-xl hover:bg-secondary/5 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 group-hover:bg-accent transition-colors duration-300">
                      <reason.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Leadership */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-secondary" opacity={0.05} flip />
        <div className="relative max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              Leadership
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-lg text-muted-foreground">
              Visionary leadership with deep technical expertise
            </p>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Founder */}
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div
                  className="h-80 bg-cover bg-center relative"
                  style={{
                    // backgroundImage:
                    //   'url("/images/WhatsApp Image 2026-07-194 at 3.00.24 PM.jpeg")',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                  <Quote className="absolute top-5 right-5 w-8 h-8 text-white/40" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-0.5">Ashafa Abdulsalam</h3>
                    <p className="text-accent font-semibold text-sm">Founder & Principal Consultant</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A geoscience and sustainability professional with expertise spanning geology, mineral exploration, environmental sustainability, natural resource governance, project management, and business analysis.
                  </p>
                  <div className="bg-secondary/5 rounded-lg p-4 mb-4 border border-border/50">
                    <p className="text-sm text-foreground font-semibold mb-2">Qualifications:</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        Bachelor&apos;s Degree in Geology
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        MTech in Mineral Exploration
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With deep technical knowledge and practical experience in environmental consulting, mining, governance, and quality management, Ashafa Abdulsalam brings a multidisciplinary expertise that enables Stratoview to deliver integrated solutions bridging geoscience, environmental management, technology, and strategic advisory.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Team & Vision */}
            <div className="flex flex-col gap-8">
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Experienced Team</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our team consists of qualified geoscientists, environmental specialists, engineers, and technical professionals with extensive experience across multiple sectors and geographies.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We bring deep industry knowledge and proven expertise to every project, ensuring that our clients receive the highest standard of service and technical excellence.
                  </p>
                  <Link
                    href="/careers"
                    className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all"
                  >
                    Join Our Team →
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in-up" delay={280}>
                <div className="relative overflow-hidden bg-accent/10 border border-accent/20 rounded-2xl p-8">
                  <Quote className="absolute -top-2 -right-2 w-20 h-20 text-accent/10" />
                  <h3 className="relative text-lg font-bold text-foreground mb-3">Leadership Philosophy</h3>
                  <p className="relative text-muted-foreground leading-relaxed">
                    Under Ashafa&apos;s leadership, Stratoview is committed to building a reputation for technical excellence, integrity, innovation, and client-focused service while contributing to Nigeria&apos;s sustainable development and the responsible management of natural resources.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ScrollAnimation
          animation="fade-in-up"
          className="relative max-w-2xl mx-auto overflow-hidden bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center"
        >
          <ContourPattern className="inset-0 w-full h-full text-white" opacity={0.08} />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let&apos;s discuss how we can support your organization&apos;s goals
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </main>
  )
}

const stats = [
  { value: '10+', label: 'Years Combined Expertise' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '6', label: 'Core Service Areas' },
  { value: '100%', label: 'Client-Focused' },
]

const values = [
  {
    name: 'Integrity',
    desc: 'We conduct our business with honesty, transparency, professionalism, and ethical responsibility.',
    icon: Shield
  },
  {
    name: 'Excellence',
    desc: 'We are committed to delivering high-quality, technically sound, and value-driven consulting services.',
    icon: Zap
  },
  {
    name: 'Sustainability',
    desc: 'We promote responsible environmental management and sustainable use of natural resources.',
    icon: Leaf
  },
  {
    name: 'Innovation',
    desc: 'We embrace technology, research, and continuous improvement to provide forward-thinking solutions.',
    icon: Zap
  },
  {
    name: 'Collaboration',
    desc: 'We work closely with clients, communities, regulators, and stakeholders for successful outcomes.',
    icon: Users
  },
  {
    name: 'Accountability',
    desc: 'We take ownership of our work, maintain high standards, and deliver on our commitments.',
    icon: Shield
  },
  {
    name: 'Safety',
    desc: 'We prioritize the health, safety, and well-being of our people, clients, and communities.',
    icon: Leaf
  }
]

const reasons = [
  {
    title: 'Technical Expertise',
    desc: 'Deep knowledge across geoscience, environmental, and engineering disciplines',
    icon: Zap
  },
  {
    title: 'Proven Track Record',
    desc: 'Successful project delivery across diverse sectors and regions',
    icon: Shield
  },
  {
    title: 'Innovation',
    desc: 'Adoption of latest technologies and methodologies',
    icon: Leaf
  },
  {
    title: 'Client Focus',
    desc: 'Tailored solutions aligned with your specific needs',
    icon: Users
  },
  {
    title: 'Sustainability',
    desc: 'Commitment to environmentally responsible practices',
    icon: Leaf
  },
  {
    title: 'Professional Team',
    desc: 'Certified specialists with extensive industry experience',
    icon: Shield
  }
]