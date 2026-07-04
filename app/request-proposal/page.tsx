'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Upload, Send } from 'lucide-react'

export default function RequestProposal() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceRequired: '',
    projectDescription: '',
    budgetRange: '',
    timeline: '',
  })
  const [fileName, setFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Proposal request submitted:', formData)
    setSubmitted(true)
    setFileName('')
    setFormData({
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      serviceRequired: '',
      projectDescription: '',
      budgetRange: '',
      timeline: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Request a Proposal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll prepare a customized proposal for your review
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-accent/10 border border-accent text-accent rounded-lg">
                ✓ Thank you! We have received your proposal request. Our team will review it and contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organization Section */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-4 border-b border-border">Organization Details</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Organization Name *</label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Contact Person *</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Full name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Project Section */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-4 border-b border-border">Project Details</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">Service Required *</label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a service</option>
                    <option value="environmental">Environmental Consulting</option>
                    <option value="mineral">Mineral Exploration & Mining</option>
                    <option value="geotechnical">Geotechnical Services</option>
                    <option value="hydrogeology">Hydrogeology & Groundwater</option>
                    <option value="gis">GIS & Spatial Intelligence</option>
                    <option value="technical">Technical Advisory</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">Project Description *</label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Describe your project, scope, and key requirements..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select budget range</option>
                      <option value="100k-500k">₦100k - ₦500k</option>
                      <option value="500k-1m">₦500k - ₦1M</option>
                      <option value="1m-5m">₦1M - ₦5M</option>
                      <option value="5m-10m">₦5M - ₦10M</option>
                      <option value="10m+">₦10M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (ASAP)</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Attachment */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Attach Terms of Reference / RFP
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-input"
                    accept=".pdf,.doc,.docx,.xlsx,.xls"
                  />
                  <label
                    htmlFor="file-input"
                    className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-border rounded-lg hover:border-accent cursor-pointer transition"
                  >
                    <Upload className="w-5 h-5 text-accent" />
                    <span className="text-foreground">
                      {fileName || 'Click to upload or drag and drop'}
                    </span>
                  </label>
                  <p className="text-xs text-muted-foreground mt-2">PDF, DOC, XLSX up to 10MB</p>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-border">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  Submit Proposal Request <Send className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  We&apos;ll review your request and contact you within 2-3 business days
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What to Include in Your Request</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, idx) => (
              <div key={idx} className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

const tips = [
  {
    title: 'Project Scope',
    description: 'Clear description of what you need and the expected outcomes'
  },
  {
    title: 'Timeline',
    description: 'When you need the project completed and any key milestones'
  },
  {
    title: 'Budget Information',
    description: 'Your budget range helps us tailor the proposal'
  },
  {
    title: 'Location Details',
    description: 'Geographic details of project site or area of focus'
  },
  {
    title: 'Key Requirements',
    description: 'Specific requirements or deliverables you need'
  },
  {
    title: 'Contact Information',
    description: 'Ensure all contact details are correct for follow-up'
  }
]
