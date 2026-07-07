import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Download, FileText, BookOpen, FileCheck, ShieldCheck, Layers } from 'lucide-react'

export const metadata = {
  title: 'Resources & Downloads | Stratoview Nigeria',
  description: 'Download company profile, brochures, and technical resources',
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

// Shared list-row for a downloadable document — replaces the old card grid.
function DocumentRow({
  icon: Icon,
  title,
  description,
  accent = 'accent',
}: {
  icon: React.ElementType
  title: string
  description: string
  accent?: 'accent' | 'secondary'
}) {
  const iconWrap =
    accent === 'accent'
      ? 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground'
      : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white'
  const linkColor = accent === 'accent' ? 'text-accent' : 'text-secondary'

  return (
    <div className="group flex flex-col sm:flex-row sm:items-center gap-4 py-6">
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${iconWrap}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-xl">{description}</p>
      </div>
      <button
        className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border font-medium text-sm ${linkColor} hover:border-accent hover:bg-accent/5 transition-colors shrink-0`}
      >
        <Download className="w-4 h-4" />
        Download
      </button>
    </div>
  )
}

export default function Resources() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <ContourPattern className="inset-0 w-full h-full text-primary" opacity={0.06} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Downloads
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-5 leading-tight">
            Resources & Downloads
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access our company information, service brochures, and technical resources
          </p>
        </div>
      </section>

      {/* Resources — list layout, no cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Company Documents */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold text-foreground">Company Documents</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Corporate profile, governance, and quality assurance documentation
            </p>
            <div className="divide-y divide-border border-t border-b border-border">
              {companyDocuments.map((doc, idx) => (
                <DocumentRow key={idx} icon={FileText} title={doc.title} description={doc.description} />
              ))}
            </div>
          </div>

          {/* Service Brochures */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold text-foreground">Service Brochures</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              In-depth guides to each of our core service lines
            </p>
            <div className="divide-y divide-border border-t border-b border-border">
              {serviceBrochures.map((brochure, idx) => (
                <DocumentRow key={idx} icon={FileCheck} title={brochure.title} description={brochure.description} />
              ))}
            </div>
          </div>

          {/* Technical Resources */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-6 h-6 text-secondary" />
              <h2 className="text-3xl font-bold text-foreground">Technical Resources</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Standards, regulations, and methodology references for practitioners
            </p>
            <div className="divide-y divide-border border-t border-b border-border">
              {technicalResources.map((resource, idx) => (
                <DocumentRow
                  key={idx}
                  icon={FileText}
                  title={resource.title}
                  description={resource.description}
                  accent="secondary"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="relative max-w-2xl mx-auto overflow-hidden bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center">
          <ContourPattern className="inset-0 w-full h-full text-white" opacity={0.08} />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">Need Customized Information?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us for tailored documentation or additional resources
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all"
            >
              Get In Touch
            </a>
          </div>
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