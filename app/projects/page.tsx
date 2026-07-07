import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { MapPin, Award, Users, TrendingUp, ArrowRight, Clock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Projects | Stratoview Nigeria',
  description: 'Portfolio of successful geoscience and environmental consulting projects',
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

export default function Projects() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-primary" opacity={0.06} />
        <ScrollAnimation animation="fade-in-up" className="relative max-w-6xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Our Portfolio
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-5 leading-tight">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Successful deliverables demonstrating our expertise across diverse sectors
          </p>
        </ScrollAnimation>
      </section>

      {/* Project Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Browse by Category</h2>
            <p className="text-muted-foreground">Explore our work across key practice areas</p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6 mb-24">
            {projectCategories.map((category, idx) => (
              <ScrollAnimation key={idx} animation="scale-in" delay={idx * 80}>
                <div className="group cursor-pointer h-full">
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-300 h-full">
                    <div
                      className="h-44 bg-cover bg-center flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundImage: `url("${category.image}")` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/30 group-hover:from-primary/40 transition-colors duration-300" />
                      <ContourPattern className="inset-0 w-full h-full text-white" opacity={0.12} flip={idx % 2 === 1} />
                      <category.icon className="w-14 h-14 text-white opacity-80 relative group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{category.desc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                        View Projects <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Recent Projects */}
          <div className="mb-12">
            <ScrollAnimation animation="fade-in-up" className="mb-10">
              <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
                Case Studies
              </span>
              <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
            </ScrollAnimation>

            <div className="space-y-8">
              {projects.map((project, idx) => (
                <ScrollAnimation key={idx} animation="fade-in-up" delay={idx * 60}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div
                        className="md:col-span-1 h-56 md:h-auto bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url("${project.image}")` }}
                      >
                        <div className="h-full bg-gradient-to-t md:bg-gradient-to-r from-primary/60 via-primary/10 to-transparent" />
                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-primary rounded-full text-xs font-semibold">
                          {project.status}
                        </span>
                      </div>
                      <div className="md:col-span-2 p-8 grid sm:grid-cols-3 gap-6">
                        <div className="sm:col-span-2">
                          <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3">
                            {project.category}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>

                          <div className="grid grid-cols-2 gap-4 mb-5">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">Client</p>
                              <p className="font-semibold text-foreground">{project.client}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                              <p className="font-semibold text-foreground">{project.location}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground mb-2">Key Deliverables</p>
                            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                              {project.deliverables.map((item, didx) => (
                                <li key={didx} className="text-sm text-foreground flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-secondary/5 rounded-xl p-6 flex flex-col justify-between border border-border/50">
                          <div className="space-y-4">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" /> Duration
                              </p>
                              <p className="font-semibold text-foreground mt-1">{project.duration}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5" /> Team Size
                              </p>
                              <p className="font-semibold text-foreground mt-1">{project.teamSize}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">Status</p>
                              <p className="font-semibold text-accent mt-1">{project.status}</p>
                            </div>
                          </div>
                          <button className="px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all mt-5">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-secondary" opacity={0.05} flip />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <ScrollAnimation key={idx} animation="scale-in" delay={idx * 80}>
              <div className="group text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </ScrollAnimation>
          ))}
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
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Discuss Your Project</h2>
            <p className="text-lg mb-8 opacity-90">
              See how our expertise can support your next initiative
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </main>
  )
}

const projectCategories = [
  {
    name: 'Environmental Projects',
    desc: 'Environmental impact assessments, audits, and compliance',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
  },
  {
    name: 'Mining Projects',
    desc: 'Mineral exploration and mining feasibility studies',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop'
  },
  {
    name: 'Infrastructure',
    desc: 'Geotechnical investigations and site assessments',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop'
  },
  {
    name: 'Water Resources',
    desc: 'Hydrogeological surveys and groundwater assessments',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop'
  }
]

const projects = [
  {
    title: 'Environmental Impact Assessment',
    category: 'Environmental',
    description: 'Comprehensive EIA for a major infrastructure development project spanning multiple phases',
    client: 'Development Authority',
    location: 'Lagos State',
    duration: '8 months',
    teamSize: '5 specialists',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    deliverables: [
      'EIA Report with baseline surveys',
      'Environmental Management Plan',
      'Stakeholder engagement documentation',
      'Regulatory submissions'
    ]
  },
  {
    title: 'Mineral Exploration Program',
    category: 'Mining',
    description: 'Multi-phase exploration program identifying mineral deposits and reserves',
    client: 'Mining Corporation',
    location: 'Northern Nigeria',
    duration: '12 months',
    teamSize: '8 specialists',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    deliverables: [
      'Geological mapping',
      'Resource estimation',
      'Feasibility analysis',
      'Investment memorandum'
    ]
  },
  {
    title: 'Geotechnical Investigation',
    category: 'Engineering',
    description: 'Detailed site investigation for foundation design of high-rise development',
    client: 'Construction Developer',
    location: 'Lagos',
    duration: '4 months',
    teamSize: '4 specialists',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    deliverables: [
      'Borehole logs',
      'Laboratory test results',
      'Foundation recommendations',
      'Engineering report'
    ]
  },
  {
    title: 'Groundwater Resource Assessment',
    category: 'Water Resources',
    description: 'Hydrogeological assessment for water supply development project',
    client: 'Water Authority',
    location: 'South-West Nigeria',
    duration: '6 months',
    teamSize: '5 specialists',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    deliverables: [
      'Hydrogeological report',
      'Borehole test data',
      'Groundwater model',
      'Development recommendations'
    ]
  }
]

const stats = [
  { value: '50+', label: 'Projects Completed', icon: Award },
  { value: '15+', label: 'Years Experience', icon: TrendingUp },
  { value: '100%', label: 'Client Satisfaction', icon: Users },
  { value: '6+', label: 'Sectors Served', icon: MapPin }
]