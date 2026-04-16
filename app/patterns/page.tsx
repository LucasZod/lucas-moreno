'use client'

import { motion, Variants, AnimatePresence } from 'framer-motion'
import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
  return <main className="min-h-dvh bg-app transition-colors duration-300">{children}</main>
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="md:py-24 md:px-30 px-0 py-16 space-y-16">{children}</section>
}

const Header = () => {
  const { language } = useI18nStore()
  const t = translations[language].patterns

  return (
    <motion.header initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 md:px-30 px-6">
      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-7xl font-semibold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-green-accent/85 to-olive-900"
      >
        {t.title}
      </motion.h1>
      <motion.p variants={fadeUp} className="text-base text-slate-600 leading-relaxed max-w-2xl">
        {t.subtitle}
      </motion.p>
    </motion.header>
  )
}

const PatternsList = () => {
  const { language } = useI18nStore()
  const patterns = translations[language].patterns.items

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="space-y-6"
    >
      {patterns.map((pattern, index) => (
        <PatternCard key={pattern.name} pattern={pattern} index={index + 1} />
      ))}
    </motion.section>
  )
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
  const { language } = useI18nStore()
  const t = translations[language].patterns.labels
  const [isExpanded, setIsExpanded] = useState(false)
  const numberFormatted = index.toString().padStart(2, '0')

  return (
    <motion.div
      variants={fadeUp}
      className="bg-slate-50 border border-green-accent/20 md:rounded-xl space-y-6 max-w-7xl mx-auto py-6"
    >
      <PatternHeader>
        <PatternNumber>{numberFormatted}</PatternNumber>
        <PatternInfo>
          <PatternTitle>
            {pattern.category} {pattern.name.toUpperCase()}
          </PatternTitle>
        </PatternInfo>
      </PatternHeader>
      <PatternLayout>
        <PatternSection>
          <PatternLabel>{t.problem}</PatternLabel>
          <PatternText>{pattern.problem}</PatternText>
        </PatternSection>

        <PatternSection>
          <PatternLabel>{t.benefits}</PatternLabel>
          <BenefitsList>
            {pattern.benefits.map((benefit) => (
              <BenefitChip key={benefit}>{benefit}</BenefitChip>
            ))}
          </BenefitsList>
        </PatternSection>

        <ExpandButton isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} label={t} />
      </PatternLayout>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden px-1"
          >
            <ExpandedContent>
              <PatternSection>
                <PatternLabel>{t.solution}</PatternLabel>
                <PatternText>{pattern.solution}</PatternText>
              </PatternSection>

              <PatternSection>
                <PatternLabel>{t.example}</PatternLabel>
                <CodeBlock>{pattern.example}</CodeBlock>
              </PatternSection>
            </ExpandedContent>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const PatternHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-6 px-6">{children}</div>
}

const PatternInfo = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-1">{children}</div>
}

const PatternNumber = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary text-3xl md:text-4xl font-bold">{children}</span>
}

const PatternTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-slate-800 text-xl md:text-2xl font-semibold">{children}</h3>
}

const ExpandedContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6 pt-4 px-1">{children}</div>
}

const PatternLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-6 space-y-3">{children}</div>
}

const PatternSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-3">{children}</div>
}

const PatternLabel = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-mono text-xs uppercase tracking-widest text-primary">{children}</span>
}

const PatternText = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-slate-600 leading-relaxed">{children}</p>
}

const BenefitsList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-1.5 flex-wrap">{children}</div>
}

const BenefitChip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded border border-primary/20 text-primary bg-primary/5">
      {children}
    </span>
  )
}

interface ExpandButtonProps {
  isExpanded: boolean
  onClick: () => void
  label: {
    viewMore: string
    viewLess: string
  }
}

const ExpandButton = ({ isExpanded, onClick, label }: ExpandButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 text-primary text-sm font-medium hover:bg-primary/5 transition-all duration-300 rounded-lg group"
    >
      <span>{isExpanded ? label.viewLess : label.viewMore}</span>
      <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
    </button>
  )
}

const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  const customStyle = {
    margin: 0,
    padding: '24px',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '1.6',
    backgroundColor: '#0f151e',
    border: '1px solid #e2e8f0',
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
          fontFamily: 'var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        },
      }}
    >
      {String(children)}
    </SyntaxHighlighter>
  )
}

// Variantes de animação
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
} as Variants

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
} as Variants
