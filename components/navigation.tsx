'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-foreground">
          SNL
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-accent transition">Home</Link>
          <Link href="/about" className="text-foreground hover:text-accent transition">About</Link>
          <Link href="/services" className="text-foreground hover:text-accent transition">Services</Link>
          <Link href="/projects" className="text-foreground hover:text-accent transition">Projects</Link>
          <Link href="/insights" className="text-foreground hover:text-accent transition">Insights</Link>
          <Link href="/contact" className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition">
            Contact
          </Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-foreground hover:text-accent transition py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="block text-foreground hover:text-accent transition py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="block text-foreground hover:text-accent transition py-2" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/projects" className="block text-foreground hover:text-accent transition py-2" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/insights" className="block text-foreground hover:text-accent transition py-2" onClick={() => setIsOpen(false)}>Insights</Link>
            <Link href="/contact" className="block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
