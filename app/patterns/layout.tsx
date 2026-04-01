import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design Patterns - Padrões de Arquitetura',
  description:
    'Padrões de design e arquitetura aplicados em projetos reais. Repository Pattern, Strategy Pattern, Composition Pattern e Custom Hooks. Exemplos práticos com TypeScript, React e NestJS.',
  openGraph: {
    title: 'Design Patterns - Lucas Moreno',
    description: 'Padrões de design e arquitetura aplicados em projetos reais.',
  },
}

export default function PatternsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
