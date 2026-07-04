import Link from 'next/link'
import { Mail, Phone, MapPin, AtSign, Globe, Share2, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
