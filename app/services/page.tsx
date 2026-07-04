import { ArrowRight, Leaf, MapPin, Zap, Users } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import Link from 'next/link'

export const metadata = {
  title: 'Services | Stratoview Nigeria',
  description: 'Comprehensive geoscience and environmental consulting services',
}

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ScrollAnimation animation="fade-in-up" className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive geoscience and environmental expertise tailored to your organization&apos;s unique needs
          </p>
        </ScrollAnimation>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {servicesDetail.map((service, idx) => (
            <ScrollAnimation key={idx} animation="fade-in-up" delay={idx * 100}>
              <div id={service.slug} className="scroll-mt-24">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-8 h-8 text-accent" />
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">{service.category}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-4">Key Services:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <span className="text-accent font-bold">•</span>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition">
                    Inquire Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                
                <div 
                  className="bg-card rounded-xl border border-accent/20 overflow-hidden h-96 shadow-lg relative"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-primary">
                      <service.icon className="w-24 h-24 opacity-30 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Stratoview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <ScrollAnimation key={idx} animation="fade-in" delay={idx * 50}>
                <div className="p-6 bg-background rounded-lg border border-border hover:border-accent transition">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <adv.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-accent to-secondary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let&apos;s discuss how our services can support your goals
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 transition">
            Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
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
