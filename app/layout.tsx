import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Dancing_Script, Great_Vibes, Montserrat, Noto_Serif_Tamil } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-dancing',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
})

const notoTamil = Noto_Serif_Tamil({
  subsets: ['tamil'],
  weight: ['400', '600'],
  variable: '--font-noto-tamil',
})

export const metadata: Metadata = {
  title: 'Dinesh & Deepa — Wedding Invitation',
  description:
    'A new chapter begins. Join Dinesh & Deepa for their Muhurtham on Sunday, 22 November 2026, 5:30 AM – 6:30 AM at URC Resorts, Perundurai.',
  generator: 'v0.app',
  openGraph: {
    title: 'Dinesh & Deepa — Wedding Invitation',
    description: 'Sunday, 22 • 11 • 2026 · Muhurtham 5:30 – 6:30 AM · URC RESORTS, Perundurai',
    images: ['/images/royal-seal.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#b9cbe3',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${dancing.variable} ${montserrat.variable} ${notoTamil.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
