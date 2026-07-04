
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Lora } from 'next/font/google'
import { SupportModal } from '@/components/support-modal'
import './globals.css'

const lora = Lora({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Stratoview Nigeria Limited | Geoscience & Environmental Consulting',
  description: 'Earthwise Solutions • Sustainable Results. Environmental consulting, mineral exploration, geotechnical services, hydrogeology, GIS, and sustainability advisory.',
  generator: 'v0.app',
  keywords: 'environmental consulting, mineral exploration, geotechnical investigations, hydrogeology, GIS, sustainability, Nigeria',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfbf7' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${geistMono.variable} bg-background light`}>
      <body className="font-sans antialiased text-foreground">
        {children}
         <SupportModal />
        {process.env.NODE_ENV === 'production'}
      </body>
    </html>
  )
}
