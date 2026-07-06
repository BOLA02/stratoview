import { ArrowRight, Leaf, MapPin, Zap, Users, CheckCircle2 } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import Link from 'next/link'

export const metadata = {
  title: 'Services | Stratoview Nigeria',
  description: 'Comprehensive geoscience and environmental consulting services',
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

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-primary" opacity={0.06} />
        <ScrollAnimation animation="fade-in-up" className="relative max-w-6xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            What We Do
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-5 leading-tight">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive geoscience and environmental expertise tailored to your organization&apos;s unique needs
          </p>
        </ScrollAnimation>

        {/* Quick-jump service chips */}
        <ScrollAnimation
          animation="fade-in-up"
          delay={150}
          className="relative max-w-4xl mx-auto mt-10 flex flex-wrap justify-center gap-3"
        >
      {servicesDetail.map((service, idx) => (
  <a
    key={idx}
    href={`#${service.slug}`}
    className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
  >
    <service.icon className="w-3.5 h-3.5" />
    {service.category}
  </a>
))}
        </ScrollAnimation>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-24">
          {servicesDetail.map((service, idx) => (
            <ScrollAnimation key={idx} animation="fade-in-up" delay={idx * 60}>
              <div id={service.slug} className="scroll-mt-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="font-semibold text-foreground mb-4">Key Services:</h3>
                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                        {service.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="group inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all"
                    >
                      Inquire Now
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div
                    className={`relative rounded-2xl border border-border overflow-hidden h-96 shadow-lg group ${
                      idx % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                    style={{
                      backgroundImage: `url("${service.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent transition-opacity duration-300 group-hover:from-primary/60" />
                    <ContourPattern className="inset-0 w-full h-full text-white" opacity={0.12} flip={idx % 2 === 1} />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <service.icon className="w-8 h-8 mb-2 opacity-90" />
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-secondary" opacity={0.05} flip />
        <div className="relative max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              Our Edge
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Stratoview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with proven results
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <ScrollAnimation key={idx} animation="scale-in" delay={idx * 80}>
                <div className="group h-full p-7 bg-background rounded-xl border border-border hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <adv.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ScrollAnimation
          animation="fade-in-up"
          className="relative max-w-2xl mx-auto overflow-hidden bg-gradient-to-r from-accent to-secondary text-white rounded-2xl p-12 text-center"
        >
          <ContourPattern className="inset-0 w-full h-full text-white" opacity={0.08} />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let&apos;s discuss how our services can support your goals
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all"
            >
              Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </main>
  )
}

const servicesDetail = [
  {
    title: 'Environmental Sustainability & Consulting',
    category: 'Environmental Services',
    description: 'Comprehensive environmental solutions to support your organization&apos;s sustainability goals and regulatory compliance.',
    icon: Leaf,
    slug: 'environmental',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    features: [
      'Environmental Impact Assessment (EIA)',
      'Environmental Audits & Compliance Reviews',
      'Environmental Monitoring Programs',
      'ESG Advisory & Reporting',
      'Sustainability Strategy Development',
      'Environmental Compliance Management'
    ]
  },
  {
    title: 'Mineral Exploration & Mining Consultancy',
    category: 'Mining Services',
    description: 'Expert guidance for exploration, assessment, and responsible mining operations across the continent.',
    icon: MapPin,
    slug: 'mineral',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    features: [
      'Mineral Exploration Planning & Execution',
      'Geological Mapping & Analysis',
      'Resource Evaluation & Estimation',
      'Mining Feasibility Studies',
      'Due Diligence Reviews',
      'Mining Advisory & Compliance'
    ]
  },
  {
    title: 'Geotechnical Investigations',
    category: 'Engineering Services',
    description: 'Detailed geotechnical assessments to ensure safe and effective infrastructure development.',
    icon: Zap,
    slug: 'geotechnical',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    features: [
      'Site Investigation & Characterization',
      'Soil Testing Coordination',
      'Foundation Assessment',
      'Infrastructure Support Studies',
      'Slope Stability Analysis',
      'Geotechnical Reports & Recommendations'
    ]
  },
  {
    title: 'Groundwater & Hydrogeology',
    category: 'Water Resources',
    description: 'Professional hydrogeological services for groundwater exploration, management, and protection.',
    icon: Leaf,
    slug: 'hydrogeology',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    features: [
      'Groundwater Exploration Surveys',
      'Borehole Siting & Design',
      'Hydrogeological Assessments',
      'Water Resource Evaluation',
      'Aquifer Characterization',
      'Groundwater Quality Monitoring'
    ]
  },
  {
    title: 'GIS & Spatial Intelligence',
    category: 'Technology & Mapping',
    description: 'Advanced spatial analysis and mapping solutions for informed decision-making.',
    icon: MapPin,
    slug: 'gis',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=600&fit=crop',
    features: [
      'GIS Mapping & Analysis',
      'Remote Sensing Applications',
      'Spatial Data Management',
      'Environmental Mapping',
      'Thematic Map Development',
      'Spatial Database Development'
    ]
  },
  {
    title: 'Technical Consultancy & Project Advisory',
    category: 'Advisory Services',
    description: 'Strategic guidance and technical expertise to optimize your projects and operations.',
    icon: Users,
    slug: 'technical',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    features: [
      'Feasibility Studies',
      'Technical Due Diligence',
      'Project Management Support',
      'Technical Reviews & Audits',
      'Capacity Building & Training',
      'Strategic Advisory Services'
    ]
  }
]

const advantages = [
  {
    title: 'Proven Expertise',
    desc: 'Years of experience across diverse sectors and geographies',
    icon: Users
  },
  {
    title: 'Technical Excellence',
    desc: 'Cutting-edge methodologies and best practices',
    icon: Zap
  },
  {
    title: 'Sustainable Focus',
    desc: 'Environmentally responsible solutions',
    icon: Leaf
  },
  {
    title: 'Professional Team',
    desc: 'Qualified specialists and certified professionals',
    icon: MapPin
  }
]