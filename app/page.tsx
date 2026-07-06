'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowRight, Leaf, MapPin, Zap, Users, Shield, BookOpen, ChevronDown } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import Link from 'next/link'

// NOTE: place the uploaded video file in /public/videos/hero.mp4
// and a still frame at /public/images/hero-poster.jpg (used while loading
// and as the static fallback for prefers-reduced-motion).
const HERO_VIDEO_SRC = '/videos/hero.mp4'
const HERO_POSTER_SRC = '/images/hero-poster.png'

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

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Respect prefers-reduced-motion: pause video, show poster only
  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReducedMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!videoRef.current) return
    if (reducedMotion) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(() => {})
    }
  }, [reducedMotion])

  // Subtle parallax: background video shifts slower than scroll
  useEffect(() => {
    if (reducedMotion) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (!parallaxRef.current) return
        const y = window.scrollY
        const offset = Math.min(y * 0.15, 80)
        parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [reducedMotion])

  return (
    <section
      className="relative w-full h-screen min-h-[640px] flex items-center overflow-hidden"
      style={{ background: '#0F1613' }}
      aria-label="Hero"
    >
      {/* Background layer (video or poster, slow cinematic zoom) */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'scale(1.06)' }}
      >
        {reducedMotion ? (
          <img
            src={HERO_POSTER_SRC}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover hero-video-zoom"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HERO_POSTER_SRC}
            aria-hidden="true"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Cinematic gradient overlay: left readable, right showcases landscape */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(15,22,19,0.72) 0%, rgba(15,22,19,0.45) 50%, rgba(15,22,19,0.10) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div
            className={`max-w-[650px] transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1
              className="font-bold text-white mb-6"
              style={{
                fontFamily: "'Manrope', 'Inter', sans-serif",
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Understanding the Earth.
              <br />
              Enabling Sustainable Development.
            </h1>

            <p
              className={`text-white/85 mb-10 max-w-[600px] transition-all duration-700 ease-out delay-150 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                fontFamily: "'Manrope', 'Inter', sans-serif",
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                lineHeight: 1.7,
              }}
            >
              Stratoview Nigeria Limited delivers geoscience, environmental, hydrogeological,
              GIS, and technical consulting services that help governments, industries, and
              communities make confident, science-driven decisions.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ backgroundColor: '#556B4F' }}
              >
                Request Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-medium border border-white/40 text-white bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0F1613] hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Download Company Profile
              </Link>
            </div>
          </div>

          {/* Right column intentionally kept empty to showcase the landscape */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}
        >
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 scroll-indicator-bounce" />
      </div>

      <style jsx>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.02);
          }
        }
        .hero-video-zoom {
          animation: heroZoom 24s ease-in-out infinite alternate;
        }
        @keyframes scrollBounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
        .scroll-indicator-bounce {
          animation: scrollBounce 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-video-zoom,
          .scroll-indicator-bounce {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <HeroSection />

      {/* About Section */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-primary" opacity={0.05} />
        <div className="relative max-w-6xl mx-auto">
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
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <ContourPattern className="inset-0 w-full h-full text-secondary" opacity={0.05} flip />
        <div className="relative max-w-6xl mx-auto">
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
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <ContourPattern className="inset-0 w-full h-full text-white" opacity={0.08} />
        <ScrollAnimation animation="fade-in-up" className="relative max-w-4xl mx-auto text-center">
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