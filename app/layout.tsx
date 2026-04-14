import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Menu } from './ui/menu'
import { Footer } from './ui/footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Lucas Moreno - Desenvolvedor Fullstack | React, Node.js, NestJS',
    template: '%s | Lucas Moreno',
  },
  description:
    'Desenvolvedor Fullstack especializado em arquitetura de sistemas escaláveis. Experiência com React, Next.js, Vue.js, Node.js, NestJS e C# .NET. Fintech, GED e sistemas de alta performance.',
  keywords: [
    'Desenvolvedor Fullstack',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'NestJS Developer',
    'TypeScript Developer',
    'Software Engineer',
    'Desenvolvedor Frontend',
    'Desenvolvedor Backend',
    'Next.js Developer',
    'Vue.js Developer',
    'Fintech Developer',
    'SOLID',
    'DDD',
    'Clean Code',
    'Microsserviços',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
  ],
  authors: [{ name: 'Lucas Moreno' }],
  creator: 'Lucas Moreno',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://lucasmoreno.dev',
    siteName: 'Lucas Moreno - Portfolio',
    title: 'Lucas Moreno - Desenvolvedor Fullstack',
    description:
      'Desenvolvedor Fullstack especializado em arquitetura de sistemas escaláveis. React, Node.js, NestJS e C# .NET.',
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Lucas Moreno - Desenvolvedor Fullstack'
    //   }
    // ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Moreno - Desenvolvedor Fullstack',
    description: 'Desenvolvedor Fullstack especializado em arquitetura de sistemas escaláveis.',
    // images: ['/og-image.png']
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
