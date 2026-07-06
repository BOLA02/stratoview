'use client'

import { useState } from 'react'
import { X, Search, MessageCircle, HelpCircle } from 'lucide-react'

export function SupportModal() {
  const [isOpen, setIsOpen] = useState(false)

  const helpArticles = [
    { title: 'How to Request a Consultation', icon: '📋' },
    { title: 'Our Services and Expertise', icon: '🎯' },
    { title: 'Project Portfolio', icon: '📁' },
    { title: 'Environmental Compliance Guide', icon: '✅' },
    { title: 'Contact Us and Support', icon: '📞' },
    { title: 'Frequently Asked Questions', icon: '❓' },
  ]

  const whatsappNumber = '2347070126166'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Stratoview%20Nigeria%20Limited%2C%20I%20need%20assistance.`

  return (
    <>
      {/* Help Button - Fixed position */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-accent text-accent-foreground rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Open support"
      >
        <HelpCircle className="w-6 h-6" />
        <span className="absolute bottom-full right-0 mb-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Help & Support
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-screen overflow-y-auto">
            {/* Header */}
            <div className="bg-accent text-white p-6 flex items-center justify-between sticky top-0">
              <div>
                <h2 className="text-2xl font-bold">Welcome to Support</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Got Questions Section */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Got questions?</h3>

                {/* Search Bar */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search for help..."
                    className="w-full px-4 py-2 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>

            
              
              </div>

              {/* Divider */}
              <div className="border-t border-border my-6" />

              {/* WhatsApp CTA */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
                <h3 className="font-bold text-foreground mb-3">Need immediate assistance?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our support team on WhatsApp
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  0707 012 6166 • Monday-Friday 8AM-5PM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
