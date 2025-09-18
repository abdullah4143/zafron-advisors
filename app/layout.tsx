import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Zafron Advisors - Empowering Businesses with Smarter Financial Management',
    template: '%s | Zafron Advisors'
  },
  description: 'Streamline projects, reports, and integrations with Zafron Advisors. Located at G11 Markaz, Islamabad Arcade, 3rd Floor T11, Islamabad, Pakistan. We specialize in project management, financial reporting, and software integration.',
  keywords: [
    'financial management',
    'project management',
    'financial reports',
    'software integration',
    'finance advisory',
    'Islamabad',
    'Pakistan',
    'business consulting'
  ],
  authors: [{ name: 'Zafron Advisors' }],
  creator: 'Zafron Advisors',
  publisher: 'Zafron Advisors',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zafronadvisors.com',
    title: 'Zafron Advisors - Empowering Businesses with Smarter Financial Management',
    description: 'Streamline projects, reports, and integrations with Zafron Advisors. Based in Islamabad, Pakistan.',
    siteName: 'Zafron Advisors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zafron Advisors - Empowering Businesses with Smarter Financial Management',
    description: 'Streamline projects, reports, and integrations with Zafron Advisors. Based in Islamabad, Pakistan.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}