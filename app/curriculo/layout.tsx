import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Currículo - Experiência Profissional',
  description: 'Experiência profissional completa de Lucas Moreno. Desenvolvedor Fullstack com passagem por Pilotar, Hyperdev e Amppli. Especialista em NestJS, React, Vue.js e sistemas escaláveis.',
  openGraph: {
    title: 'Currículo - Lucas Moreno',
    description: 'Experiência profissional completa. Fintech, GED e sistemas de alta performance.',
  }
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
