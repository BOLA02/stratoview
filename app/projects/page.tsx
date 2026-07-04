import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { MapPin, Award, Users, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Projects | Stratoview Nigeria',
  description: 'Portfolio of successful geoscience and environmental consulting projects',
}

export default function Projects() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ScrollAnimation animation="fade-in-up" className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Successful deliverables demonstrating our expertise across diverse sectors
          </p>
        </ScrollAnimation>
      </section>

      {/* Project Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projectCategories.map((category, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-lg transition h-full">
                  <div 
                    className="h-40 bg-cover bg-center flex items-center justify-center relative"
                    style={{
                      backgroundImage: `url("${category.image}")`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <category.icon className="w-16 h-16 text-primary opacity-50 relative group-hover:opacity-70 transition" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.desc}</p>
                    <span className="text-sm font-medium text-accent">View Projects →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Projects */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Projects</h2>
            
            <div className="space-y-8">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div 
                      className="md:col-span-1 h-64 md:h-auto bg-cover bg-center"
                      style={{
                        backgroundImage: `url("${project.image}")`
                      }}
                    >
                      <div className="h-full bg-gradient-to-r from-primary/10 to-secondary/5" />
                    </div>
                    <div className="md:col-span-2 p-8 flex flex-col gap-6">
                      <div>
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3">
                          {project.category}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Client</p>
                            <p className="font-semibold text-foreground">{project.client}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-semibold text-foreground">{project.location}</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Key Deliverables</p>
                          <ul className="space-y-1">
                            {project.deliverables.map((item, didx) => (
                              <li key={didx} className="text-sm text-foreground flex items-start gap-2">
                                <span className="text-accent font-bold">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-secondary/5 rounded-lg p-6 flex flex-col justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-4">Project Scope</p>
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">Duration</p>
                              <p className="font-semibold text-foreground">{project.duration}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">Team Size</p>
                              <p className="font-semibold text-foreground">{project.teamSize}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">Status</p>
                              <p className="font-semibold text-accent">{project.status}</p>
                            </div>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition mt-4">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-accent to-secondary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Discuss Your Project</h2>
          <p className="text-lg mb-8 opacity-90">
            See how our expertise can support your next initiative
          </p>
          <a href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 transition">
            Schedule Consultation
          </a>
        </div>
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
