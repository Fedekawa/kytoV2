import type { Metadata } from 'next'
import { Poppins, Lato } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Kyto - AI Solutions',
  description: 'Transform your business with AI in days, not months',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${lato.variable}`}>
        <Header />
        <div className="pt-16"> {/* Added padding-top for fixed header */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}