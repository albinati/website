import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Caça-Plantão | Encontre oportunidades de plantão em tempo real',
    template: '%s | Caça-Plantão'
  },
  description: 'Milhares de oportunidades de plantões médicos filtradas dos grupos de WhatsApp. Economize tempo e encontre plantões que se encaixam no seu perfil.',
  keywords: ['plantão médico', 'escala médica', 'oportunidades médicas', 'whatsapp médico', 'plantão extra'],
  authors: [{ name: 'Caça-Plantão' }],
  creator: 'Caça-Plantão',
  publisher: 'Caça-Plantão',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://cacaplantao.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cacaplantao.com.br',
    title: 'Caça-Plantão | Encontre oportunidades de plantão em tempo real',
    description: 'Milhares de oportunidades de plantões médicos filtradas dos grupos de WhatsApp. Economize tempo e encontre plantões que se encaixam no seu perfil.',
    siteName: 'Caça-Plantão',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Caça-Plantão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caça-Plantão | Encontre oportunidades de plantão em tempo real',
    description: 'Milhares de oportunidades de plantões médicos filtradas dos grupos de WhatsApp. Economize tempo e encontre plantões que se encaixam no seu perfil.',
    images: ['/images/og-image.jpg'],
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
