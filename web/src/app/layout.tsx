import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Talent Scale — Helping Disruptors Hire Incredible Talent',
  description:
    '20+ years of precision headhunting across Marketing, Product, Sales & Technology. Jeff Hardie finds the leaders who transform your business.',
  openGraph: {
    title: 'Talent Scale — Executive Recruitment',
    description: '20+ years of precision headhunting. I find the leaders who transform your business.',
    url: 'https://talentscale.io',
    siteName: 'Talent Scale',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} dark`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
