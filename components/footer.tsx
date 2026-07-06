import Link from 'next/link'
import { Mail, Phone, MapPin, AtSign, Globe, Share2, MessageCircle } from 'lucide-react'

// Topographic contour pattern echoing the logo's wave lines.
function ContourPattern({
  className = '',
  opacity = 0.06,
  flip = false,
}: {
  className?: string
  opacity?: number
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute ${className}`}
      style={{
        opacity,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <ContourPattern className="inset-0 w-full h-full text-white" opacity={0.05} flip />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Stratoview Nigeria</h3>
            <p className="text-sm opacity-90 mb-4">
              Earthwise Solutions • Sustainable Results
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+2347070126166" className="hover:opacity-80 transition">0707 012 6166</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:stratoviewnigerialimited@gmail.com" className="hover:opacity-80 transition">stratoviewnigerialimited@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">Kaduna, Nigeria</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:opacity-80 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:opacity-80 transition">Services</Link></li>
              <li><Link href="/projects" className="hover:opacity-80 transition">Projects</Link></li>
              <li><Link href="/careers" className="hover:opacity-80 transition">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/insights" className="hover:opacity-80 transition">Insights & Blog</Link></li>
              <li><Link href="/resources" className="hover:opacity-80 transition">Downloads</Link></li>
              <li><Link href="/contact" className="hover:opacity-80 transition">Contact</Link></li>
              <li><a href="#" className="hover:opacity-80 transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition" aria-label="LinkedIn">
                <AtSign className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition" aria-label="Social">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://wa.me/234707012166" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Stratoview Nigeria Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}