import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Download, FileText, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Resources & Downloads | Stratoview Nigeria',
  description: 'Download company profile, brochures, and technical resources',
}

export default function Resources() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Resources & Downloads</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access our company information, service brochures, and technical resources
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Company Documents */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Company Documents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyDocuments.map((doc, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-accent transition group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                  <button className="inline-flex items-center gap-2 text-accent font-medium hover:opacity-70 transition">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Service Brochures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Service Brochures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceBrochures.map((brochure, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-accent transition group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{brochure.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{brochure.description}</p>
                  <button className="inline-flex items-center gap-2 text-accent font-medium hover:opacity-70 transition">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Resources */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Technical Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalResources.map((resource, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-accent transition group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <button className="inline-flex items-center gap-2 text-secondary font-medium hover:opacity-70 transition">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Customized Information?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us for tailored documentation or additional resources
          </p>
          <a href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 transition">
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

const companyDocuments = [
  {
    title: 'Corporate Profile',
    description: 'Comprehensive overview of Stratoview Nigeria Limited, our mission, vision, and core competencies',
    file: 'corporate-profile.pdf'
  },
  {
    title: 'Capability Statement',
    description: 'Summary of our technical capabilities and service offerings',
    file: 'capability-statement.pdf'
  },
  {
    title: 'Organizational Structure',
    description: 'Details on our team, leadership, and organizational hierarchy',
    file: 'org-structure.pdf'
  },
  {
    title: 'Quality Management',
    description: 'Our quality assurance and management system documentation',
    file: 'quality-management.pdf'
  },
  {
    title: 'Corporate Governance',
    description: 'Governance policies and compliance framework',
    file: 'governance.pdf'
  },
  {
    title: 'Safety & Compliance',
    description: 'Health, safety, and environmental compliance procedures',
    file: 'hse-compliance.pdf'
  }
]

const serviceBrochures = [
  {
    title: 'Environmental Consulting Services',
    description: 'Detailed overview of our environmental consulting and sustainability advisory services',
    file: 'environmental-brochure.pdf'
  },
  {
    title: 'Mineral Exploration & Mining Advisory',
    description: 'Comprehensive guide to our mineral exploration and mining consultancy services',
    file: 'mining-brochure.pdf'
  },
  {
    title: 'Geotechnical & Engineering Services',
    description: 'Information on our geotechnical investigations and engineering services',
    file: 'geotechnical-brochure.pdf'
  },
  {
    title: 'GIS & Spatial Intelligence',
    description: 'Details on our GIS mapping and spatial analysis capabilities',
    file: 'gis-brochure.pdf'
  }
]

const technicalResources = [
  {
    title: 'Industry Standards & Best Practices',
    description: 'Guidelines on industry standards we follow in our consulting work',
    file: 'industry-standards.pdf'
  },
  {
    title: 'Environmental Regulations Summary',
    description: 'Overview of key environmental and mining regulations in Nigeria',
    file: 'regulations-summary.pdf'
  },
  {
    title: 'Geoscience Methodology Guide',
    description: 'Technical documentation on our geoscience investigation methodologies',
    file: 'methodology-guide.pdf'
  },
  {
    title: 'Project Management Framework',
    description: 'Our project delivery and management framework documentation',
    file: 'pm-framework.pdf'
  }
]
