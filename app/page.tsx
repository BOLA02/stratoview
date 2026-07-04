import { ArrowRight, Leaf, MapPin, Zap, Users, Shield, BookOpen } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center" style={{ background: '#1a1815' }}>
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="https://videos.pexels.com/video-files/855992/855992-720.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/855992/855992-720.webm" type="video/webm" />
        </video>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-secondary/40" style={{ zIndex: 1 }} />
        <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ zIndex: 10, position: 'relative' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                  Geoscience, Environmental & Sustainability Solutions
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in-up" delay={100}>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Helping organizations make informed decisions through innovative consulting, data-driven insights, and sustainable practices.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in-up" delay={200} className="flex gap-4 flex-wrap">
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition shadow-lg">
                  Request Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link href="/resources" className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur border border-white/30 text-white rounded-lg font-medium hover:bg-white/30 transition shadow-lg">
                  Download Profile
                </Link>
              </ScrollAnimation>
            </div>

            {/* Hero Image on Right (for larger screens) */}
            <ScrollAnimation animation="slide-in-right" delay={200} className="relative h-96 hidden lg:block">
              <div 
                className="absolute inset-0 bg-card rounded-2xl border-2 border-white/30 shadow-2xl overflow-hidden hover:shadow-2xl hover:border-white/50 transition-all duration-300 backdrop-blur-sm bg-white/10"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=600&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent flex items-end justify-center pb-6">
                  <div className="text-center text-white">
                    <p className="font-semibold text-lg">Sustainable Development</p>
                    <p className="text-sm opacity-90 mt-1">Environmental & Geoscience Expertise</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Stratoview Nigeria</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a trusted geoscience and environmental consulting firm delivering innovative, data-driven solutions for sustainable development across Africa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-xl border border-border">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Integrity & Excellence</h3>
              <p className="text-muted-foreground">Built on principles of professionalism and technical excellence in every project.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation First</h3>
              <p className="text-muted-foreground">Leveraging cutting-edge technology and methodologies for optimal outcomes.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <Leaf className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability Focus</h3>
              <p className="text-muted-foreground">Committed to environmentally responsible consulting for lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive geoscience and environmental expertise tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollAnimation key={idx} animation="scale-in" delay={idx * 100}>
                <Link href={`/services#${service.slug}`} className="group h-full">
                  <div className="overflow-hidden bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  <div 
                    className="h-40 flex items-center justify-center relative overflow-hidden"
                    style={{
                      backgroundImage: `url("${service.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                    <div className="relative">
                      <service.icon className="w-16 h-16 text-primary opacity-50" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{service.description}</p>
                    <span className="inline-flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform w-fit">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">
              Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries Served</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by organizations across key sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, idx) => (
              <ScrollAnimation key={idx} animation="fade-in" delay={idx * 50}>
                <div className="p-6 bg-background rounded-lg border border-border text-center hover:border-accent hover:shadow-md transition">
                  <h3 className="font-semibold text-foreground text-lg">{industry}</h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <ScrollAnimation animation="fade-in-up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance for your next project or initiative
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition">
              Start a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/request-proposal" className="inline-flex items-center px-8 py-3 bg-white/20 backdrop-blur border border-white/30 rounded-lg font-medium hover:bg-white/30 transition">
              Request Proposal
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </main>
  )
}

const services = [
  {
    title: 'Environmental Consulting',
    description: 'EIA, environmental audits, monitoring, and compliance services',
    icon: Leaf,
    slug: 'environmental',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop'
  },
  {
    title: 'Mineral Exploration',
    description: 'Geological mapping, resource evaluation, and mining advisory',
    icon: MapPin,
    slug: 'mineral',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop'
  },
  {
    title: 'Geotechnical Services',
    description: 'Site investigations, soil testing, and foundation assessments',
    icon: Zap,
    slug: 'geotechnical',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop'
  },
  {
    title: 'Hydrogeology',
    description: 'Groundwater exploration, borehole siting, and assessments',
    icon: Leaf,
    slug: 'hydrogeology',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop'
  },
  {
    title: 'GIS & Mapping',
    description: 'Spatial analysis, remote sensing, and environmental mapping',
    icon: MapPin,
    slug: 'gis',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=500&h=400&fit=crop'
  },
  {
    title: 'Technical Advisory',
    description: 'Feasibility studies, project monitoring, and management support',
    icon: Users,
    slug: 'technical',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop'
  }
]

const industries = [
  'Mining & Extractives',
  'Construction & Infrastructure',
  'Government & Public Sector',
  'Water & Utilities',
  'Manufacturing & Industrial',
  'NGOs & Development Agencies'
]
