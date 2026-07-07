import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Briefcase, Users, TrendingUp, Heart, ArrowRight, MapPin as PinIcon, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Careers | Stratoview Nigeria',
  description: 'Join our team of geoscience and environmental professionals',
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

export default function Careers() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-primary" opacity={0.06} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            We&apos;re Hiring
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-5 leading-tight">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us deliver innovative geoscience and environmental solutions
          </p>
        </div>
      </section>

      {/* Why Work With Us — discarded cards, horizontal rhythm with dividers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              Culture
            </span>
            <h2 className="text-4xl font-bold text-foreground">Why Work With Stratoview?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`text-center px-4 ${
                  idx > 0 ? 'md:border-l md:border-border' : ''
                }`}
              >
                <benefit.icon className="w-8 h-8 text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-bold text-foreground mb-2 text-lg">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities — list rows, no cards */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-secondary" opacity={0.05} flip />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              Open Roles
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Current Opportunities</h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re currently accepting applications for the following positions
            </p>
          </div>

          <div className="divide-y divide-border border-t border-b border-border">
            {positions.map((position, idx) => (
              <div
                key={idx}
                className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {position.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1.5 max-w-xl">
                    {position.description}
                  </p>
                  <div className="flex gap-4 mt-3 flex-wrap text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {position.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" /> {position.level}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all whitespace-nowrap shrink-0"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10">
            Don&apos;t see a perfect match? Send your CV to{' '}
            <a
              href="mailto:careers@stratoview.ng"
              className="text-accent font-medium hover:opacity-80 transition-opacity"
            >
              careers@stratoview.ng
            </a>
          </p>
        </div>
      </section>

      {/* Programs — no cards, side-by-side columns with a divider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              Grow With Us
            </span>
            <h2 className="text-4xl font-bold text-foreground">Development Programs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className={idx > 0 ? 'md:pl-16 md:border-l md:border-border' : ''}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{program.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                    Requirements
                  </h4>
                  <ul className="space-y-2.5">
                    {program.requirements.map((req, ridx) => (
                      <li key={ridx} className="text-sm text-foreground flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 text-accent font-medium hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process — vertical timeline, no cards */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-primary" opacity={0.05} />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              How It Works
            </span>
            <h2 className="text-4xl font-bold text-foreground">Application Process</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-border hidden sm:block" />
            <div className="space-y-10">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex gap-6">
                  <div className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg shrink-0">
                    {idx + 1}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-2xl mx-auto overflow-hidden bg-gradient-to-r from-accent to-secondary text-white rounded-2xl p-12 text-center">
          <ContourPattern className="inset-0 w-full h-full text-white" opacity={0.08} />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join a team of dedicated professionals making a difference in geoscience and environmental consulting
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all"
            >
              Submit Application
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

const benefits = [
  {
    title: 'Professional Growth',
    description: 'Continuous learning and skill development opportunities',
    icon: TrendingUp
  },
  {
    title: 'Collaborative Team',
    description: 'Work with experienced and passionate professionals',
    icon: Users
  },
  {
    title: 'Meaningful Work',
    description: 'Contribute to sustainable development and impact',
    icon: Heart
  },
  {
    title: 'Career Development',
    description: 'Clear career progression and advancement opportunities',
    icon: Briefcase
  }
]

const positions = [
  {
    title: 'Senior Geoscientist',
    description: 'Lead geological and mineral exploration projects with 8+ years experience',
    type: 'Full-time',
    level: 'Senior'
  },
  {
    title: 'Environmental Consultant',
    description: 'Conduct EIAs and environmental compliance assessments',
    type: 'Full-time',
    level: 'Mid-level'
  },
  {
    title: 'GIS Specialist',
    description: 'Develop spatial analysis solutions and mapping services',
    type: 'Full-time',
    level: 'Mid-level'
  },
  {
    title: 'Graduate Geologist',
    description: 'Support geotechnical and hydrogeological investigations',
    type: 'Full-time',
    level: 'Entry-level'
  }
]

const programs = [
  {
    name: 'Internship Program',
    description: 'One-year structured internship for recent graduates to gain practical experience',
    requirements: [
      "Bachelor's degree in Geology, Environmental Science, or related field",
      'Strong academic performance',
      'Willingness to learn and contribute to projects'
    ]
  },
  {
    name: 'Graduate Program',
    description: 'Two-year graduate development program with structured mentoring and training',
    requirements: [
      "Bachelor's or Master's degree in relevant field",
      'Interest in professional development',
      'Commitment to career in geoscience/environmental consulting'
    ]
  }
]

const steps = [
  {
    title: 'Submit Application',
    description: 'Send your CV and cover letter addressing the specific position'
  },
  {
    title: 'Initial Review',
    description: 'Our HR team reviews applications and shortlists qualified candidates'
  },
  {
    title: 'Technical Interview',
    description: 'Discussion of relevant experience and technical competencies'
  },
  {
    title: 'Final Interview',
    description: 'Meeting with senior management and team members'
  },
  {
    title: 'Offer & Onboarding',
    description: 'Upon approval, formal offer and comprehensive onboarding process'
  }
]