import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Careers | Stratoview Nigeria',
  description: 'Join our team of geoscience and environmental professionals',
}

export default function Careers() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us deliver innovative geoscience and environmental solutions
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Work With Stratoview?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent transition">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Current Opportunities</h2>
            <p className="text-lg text-muted-foreground">We&apos;re currently accepting applications for the following positions</p>
          </div>
          
          <div className="space-y-4">
            {positions.map((position, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{position.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{position.description}</p>
                    <div className="flex gap-4 mt-3 flex-wrap">
                      <span className="text-xs font-medium px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                        {position.type}
                      </span>
                      <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {position.level}
                      </span>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-flex items-center px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition whitespace-nowrap">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-background border border-border rounded-xl text-center">
            <p className="text-muted-foreground">
              Don&apos;t see a perfect match? Send your CV to <a href="mailto:careers@stratoview.ng" className="text-accent font-medium hover:opacity-80 transition">careers@stratoview.ng</a>
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Development Programs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8 hover:border-accent transition">
                <h3 className="text-2xl font-bold text-foreground mb-4">{program.name}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {program.requirements.map((req, ridx) => (
                      <li key={ridx} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="inline-flex items-center text-accent font-medium hover:opacity-80 transition">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Application Process</h2>
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-accent to-secondary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join a team of dedicated professionals making a difference in geoscience and environmental consulting
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 transition">
            Submit Application
          </Link>
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
      'Bachelor&apos;s degree in Geology, Environmental Science, or related field',
      'Strong academic performance',
      'Willingness to learn and contribute to projects'
    ]
  },
  {
    name: 'Graduate Program',
    description: 'Two-year graduate development program with structured mentoring and training',
    requirements: [
      'Bachelor&apos;s or Master&apos;s degree in relevant field',
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
