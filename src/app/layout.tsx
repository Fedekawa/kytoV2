import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/header'
import { PageTransition } from '@/components/layout/page-transition'
import { BackgroundDecoration } from '@/components/layout/background-decoration'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kyto | AI Implementation in Days, Not Months',
  description: 'Transform your business with AI solutions that are 10x faster and more affordable. Enterprise-grade AI for SMBs.',
  keywords: 'AI implementation, business automation, SMB solutions, artificial intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} prevent-horizontal-scroll antialiased`}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <PageTransition>
              <BackgroundDecoration />
              <main className="flex-grow">
                {children}
              </main>
            </PageTransition>
          </div>
        </Providers>
      </body>
    </html>
  )
}