import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Menu } from './shared/ui/menu'
import { Footer } from './shared/ui/footer'
import Script from 'next/script'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lucasmorenodev.com'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  title: {
    default: 'Lucas Moreno - Senior Full Stack Developer | React, Node.js, NestJS, TypeScript',
    template: '%s | Lucas Moreno',
  },
  description:
    'Senior Full Stack Developer com 7 anos de experiência em arquitetura de sistemas escaláveis. Especialista em React, Next.js, Node.js, NestJS, TypeScript, C# .NET, DDD e Clean Architecture. Fintech, GED e sistemas de alta performance.',
  keywords: [
    'Lucas Moreno',
    'Desenvolvedor Fullstack',
    'Full Stack Developer',
    'Senior Developer',
    'React Developer',
    'Node.js Developer',
    'NestJS Developer',
    'TypeScript Developer',
    'Software Engineer',
    'Next.js Developer',
    'Vue.js Developer',
    'Fintech Developer',
    'SOLID',
    'DDD',
    'Clean Architecture',
    'Hexagonal Architecture',
    'Microsserviços',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Event-Driven',
    'Goiânia',
    'Brasil',
  ],
  authors: [{ name: 'Lucas Moreno', url: 'https://lucasmorenodev.com' }],
  creator: 'Lucas Moreno',
  publisher: 'Lucas Moreno',
  alternates: {
    canonical: 'https://lucasmorenodev.com',
    languages: {
      'pt-BR': 'https://lucasmorenodev.com',
      'en-US': 'https://lucasmorenodev.com/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: 'https://lucasmorenodev.com',
    siteName: 'Lucas Moreno - Portfolio',
    title: 'Lucas Moreno - Senior Full Stack Developer',
    description:
      'Senior Full Stack Developer com 7 anos construindo produtos escaláveis. React, Next.js, Node.js, NestJS, TypeScript, DDD e Clean Architecture.',
    images: [
      {
        url: 'https://lucasmorenodev.com/assets/thumb.png',
        width: 1200,
        height: 630,
        alt: 'Lucas Moreno - Senior Full Stack Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lucasmoreno',
    creator: '@lucasmoreno',
    title: 'Lucas Moreno - Senior Full Stack Developer',
    description: 'Senior Full Stack Developer com 7 anos construindo produtos escaláveis.',
    images: {
      url: 'https://lucasmorenodev.com/assets/thumb.png',
      alt: 'Lucas Moreno - Senior Full Stack Developer',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'IPlgHyKdAf-deRAvoYkVe-GvALpZVpmUNUVdXjvJuEo',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PersonSchema />
        <WebSiteSchema />
        <ProfilePageSchema />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}

const PersonSchema = () => {
  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Lucas Moreno',
          jobTitle: 'Senior Full Stack Developer',
          description:
            'Senior Full Stack Developer com 7 anos de experiência em arquitetura de sistemas escaláveis. Especialista em React, Next.js, Node.js, NestJS, TypeScript, DDD e Clean Architecture.',
          url: 'https://lucasmorenodev.com',
          image: 'https://lucasmorenodev.com/assets/thumb.png',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Goiânia',
            addressRegion: 'GO',
            addressCountry: 'BR',
          },
          knowsAbout: [
            'React',
            'Next.js',
            'Node.js',
            'NestJS',
            'TypeScript',
            'JavaScript',
            'C# .NET',
            'Vue.js',
            'PostgreSQL',
            'Redis',
            'Docker',
            'DDD',
            'Clean Architecture',
            'Hexagonal Architecture',
            'SOLID',
            'Microsserviços',
            'Event-Driven Architecture',
          ],
          alumniOf: {
            '@type': 'Organization',
            name: 'Pontifícia Universidade Católica de Goiás',
          },
        }),
      }}
    />
  )
}

const WebSiteSchema = () => {
  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Lucas Moreno - Portfolio',
          description:
            'Portfolio profissional de Lucas Moreno, Senior Full Stack Developer especializado em React, Node.js, NestJS e arquitetura de software.',
          url: 'https://lucasmorenodev.com',
          inLanguage: ['pt-BR', 'en-US'],
          author: {
            '@type': 'Person',
            name: 'Lucas Moreno',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://lucasmorenodev.com/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }),
      }}
    />
  )
}

const ProfilePageSchema = () => {
  return (
    <Script
      id="profilepage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          mainEntity: {
            '@type': 'Person',
            name: 'Lucas Moreno',
            description: 'Senior Full Stack Developer',
            image: 'https://lucasmorenodev.com/assets/thumb.png',
          },
        }),
      }}
    />
  )
}
