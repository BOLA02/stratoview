import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Shield, Zap, Leaf, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Stratoview Nigeria',
  description: 'Learn about Stratoview Nigeria Limited - our mission, values, and leadership',
}

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section 
        className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-secondary/20" />
        <ScrollAnimation animation="fade-in-up" className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold text-primary mb-4">About Stratoview Nigeria</h1>
          <p className="text-xl text-primary/90 max-w-2xl mx-auto">
            Earthwise Solutions • Sustainable Results
          </p>
        </ScrollAnimation>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To become a leading geoscience and environmental consulting firm in Africa, recognized for delivering innovative, sustainable, and high-impact solutions that promote responsible resource management, environmental stewardship, and infrastructure development.
            </p>
          </div>
          <div className="bg-accent text-accent-foreground rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="leading-relaxed text-lg opacity-90">
              To provide high-quality geoscience, environmental, and technical consulting services through scientific excellence, innovation, integrity, and collaboration, enabling our clients to make informed decisions, achieve regulatory compliance, manage environmental risks, and deliver sustainable development outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-background p-6 rounded-xl border border-border text-center hover:border-accent transition">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{value.name}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Work With Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-muted-foreground">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-lg text-muted-foreground">
              Visionary leadership with deep technical expertise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Founder */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div 
                className="h-80 bg-cover bg-center relative"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop")'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-1">Ashafa Abdulsalam</h3>
                <p className="text-accent font-semibold mb-4">Founder & Principal Consultant</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A geoscience and sustainability professional with expertise spanning geology, mineral exploration, environmental sustainability, natural resource governance, project management, and business analysis.
                </p>
                <div className="bg-secondary/5 rounded-lg p-4 mb-4">
                  <p className="text-sm text-foreground font-semibold mb-2">Qualifications:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bachelor&apos;s Degree in Geology</li>
                    <li>• MTech in Mineral Exploration</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  With deep technical knowledge and practical experience in environmental consulting, mining, governance, and quality management, Ashafa Abdulsalam brings a multidisciplinary expertise that enables Stratoview to deliver integrated solutions bridging geoscience, environmental management, technology, and strategic advisory.
                </p>
              </div>
            </div>

            {/* Team & Vision */}
            <div className="flex flex-col gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Experienced Team</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our team consists of qualified geoscientists, environmental specialists, engineers, and technical professionals with extensive experience across multiple sectors and geographies.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We bring deep industry knowledge and proven expertise to every project, ensuring that our clients receive the highest standard of service and technical excellence.
                </p>
                <Link href="/careers" className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition">
                  Join Our Team →
                </Link>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Leadership Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Under Ashafa&apos;s leadership, Stratoview is committed to building a reputation for technical excellence, integrity, innovation, and client-focused service while contributing to Nigeria&apos;s sustainable development and the responsible management of natural resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let&apos;s discuss how we can support your organization&apos;s goals
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 transition">
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

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
