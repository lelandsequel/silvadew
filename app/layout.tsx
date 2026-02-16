import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Silvadew | Custom Software Development & IT Training',
  description: 'Silvadew develops scalable, reliable custom software solutions for businesses. Also offering IT training, web development, digital marketing, and career development programs.',
  keywords: ['software development', 'IT training', 'web development', 'digital marketing', 'custom software', 'tech career'],
  openGraph: {
    title: 'Silvadew | Custom Software Development & IT Training',
    description: 'Scalable software solutions and IT training programs. Join 550+ businesses trusting Silvadew.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Silvadew',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silvadew | Custom Software Development & IT Training',
    description: 'Scalable software solutions and IT training programs.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body>{children}</body>
    </html>
  )
}
