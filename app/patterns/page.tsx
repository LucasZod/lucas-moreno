'use client'

import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import { Chip } from '@/app/ui/chip'
import { EXP_CARD } from '@/app/ui/exp-card'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useMaskHover } from '../shared/hooks/use-mask-hover'
import { useState } from 'react'

export default function Patterns() {
  return (
    <Container>
      <Layout>
        <Header />
        <PatternsList />
      </Layout>
    </Container>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  const { handleMouseLeave, handleMouseMove, styleMask } = useMaskHover()
  return (
    <main className="min-h-dvh bg-grid relative" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <ContainerHover styleMask={styleMask} />
      {children}
    </main>
  )
}

const ContainerHover = ({ styleMask }: { styleMask: React.CSSProperties }) => {
  return <div className="absolute inset-0 bg-grid-hover" style={styleMask} />
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="md:py-10 md:px-20 px-5 py-5 relative z-10 md:space-y-15 space-y-10">{children}</section>
}

const Header = () => {
  const { language } = useI18nStore()
  const t = translations[language].patterns

  return (
    <HeaderContainer>
      <HeaderTitle>{t.title}</HeaderTitle>
      <HeaderSubtitle>{t.subtitle}</HeaderSubtitle>
    </HeaderContainer>
  )
}

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
  return <header className="md:space-y-6 space-y-4">{children}</header>
}

const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-white text-5xl md:text-9xl text-glow-soft font-bold animate-left-sheet">{children}</h1>
}

const HeaderSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/70 text-xl md:text-2xl tracking-wide">{children}</p>
}

const PatternsList = () => {
  const { language } = useI18nStore()
  const patterns = translations[language].patterns.items

  return (
    <PatternsContainer>
      {patterns.map((pattern, index) => (
        <PatternCard key={pattern.name} pattern={pattern} index={index + 1} />
      ))}
    </PatternsContainer>
  )
}

const PatternsContainer = ({ children }: { children: React.ReactNode }) => {
  return <section className="flex flex-col gap-y-8">{children}</section>
}

interface Pattern {
  category: string
  name: string
  problem: string
  solution: string
  example: string
  benefits: string[]
}

const PatternCard = ({ pattern, index }: { pattern: Pattern; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const numberFormatted = index.toString().padStart(2, '0')

  return (
    <EXP_CARD.Container className="max-w-330 m-auto">
      <EXP_CARD.Layout>
        <EXP_CARD.Header>
          <EXP_CARD.HeaderTitle className="text-xl">
            {numberFormatted} - {pattern.category} {pattern.name.toUpperCase()}
          </EXP_CARD.HeaderTitle>
        </EXP_CARD.Header>
        <EXP_CARD.TitleContainer>
          <PatternSection>
            <PatternLabel>PROBLEMA:</PatternLabel>
            <PatternText>{pattern.problem}</PatternText>
          </PatternSection>

          <PatternSection>
            <PatternLabel>BENEFÍCIOS:</PatternLabel>
            <BenefitsList>
              {pattern.benefits.map((benefit) => (
                <BenefitItem key={benefit}>{benefit}</BenefitItem>
              ))}
            </BenefitsList>
          </PatternSection>

          <ExpandButton isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />

          <ExpandedContent isExpanded={isExpanded}>
            <div className="space-y-6 pt-4">
              <PatternSection>
                <PatternLabel>SOLUÇÃO:</PatternLabel>
                <PatternText>{pattern.solution}</PatternText>
              </PatternSection>

              {isExpanded && (
                <PatternSection>
                  <PatternLabel>EXEMPLO:</PatternLabel>
                  <CodeBlock>{pattern.example}</CodeBlock>
                </PatternSection>
              )}
            </div>
          </ExpandedContent>
        </EXP_CARD.TitleContainer>
      </EXP_CARD.Layout>
    </EXP_CARD.Container>
  )
}

const ExpandButton = ({ isExpanded, onClick }: { isExpanded: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 mt-4 text-primary text-sm tracking-wide font-semibold hover:text-glow-soft transition-all duration-300 group"
    >
      <span>{isExpanded ? 'VER MENOS' : 'VER EXEMPLO'}</span>
      <svg
        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

const ExpandedContent = ({ children, isExpanded }: { children: React.ReactNode; isExpanded: boolean }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-2499.75 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

const PatternSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-3">{children}</div>
}

const PatternLabel = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary text-sm tracking-wide font-semibold">{children}</span>
}

const PatternText = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/80 tracking-wide leading-relaxed">{children}</p>
}

const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  const customStyle = {
    margin: 0,
    padding: '24px',
    borderRadius: '2px',
    fontSize: '14px',
    lineHeight: '1.6',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 0, 127, 0.2)',
  }

  return (
    <SyntaxHighlighter
      language="typescript"
      style={oneDark}
      customStyle={customStyle}
      showLineNumbers={false}
      wrapLines={true}
      codeTagProps={{
        style: {
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        },
      }}
    >
      {String(children)}
    </SyntaxHighlighter>
  )
}

const BenefitsList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex gap-2 flex-wrap">{children}</ul>
}

const BenefitItem = ({ children }: { children: React.ReactNode }) => {
  return <Chip variant="secondary">{children}</Chip>
}
