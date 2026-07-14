'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from './ui/logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/insights', label: 'Insights' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href)

  return (
<header
  className={`fixed top-0 w-full z-50 h-16 transition-all duration-300 ${
    scrolled
      ? 'bg-background/95 backdrop-blur border-b border-border shadow-sm'
      : 'bg-background/70 backdrop-blur-sm border-b border-transparent'
  }`}
>
  <nav className="h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-foreground shrink-0 py-2">
          <Logo className="h-11 w-auto transition-transform duration-300 hover:scale-105" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
                  active ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-[2px] bg-accent rounded-full origin-left transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 hover:scale-105 transition-all shadow-sm"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="relative block w-6 h-6">
            <Menu
              className={`w-6 h-6 absolute inset-0 transition-all duration-200 ${
                isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`w-6 h-6 absolute inset-0 transition-all duration-200 ${
                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border bg-background ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2.5 px-3 rounded-lg font-medium transition ${
                  active
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground hover:text-accent hover:bg-secondary/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="block text-center mt-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}