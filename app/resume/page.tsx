'use client'

import { motion, Variants } from 'framer-motion'
import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import React from 'react'
import { Download } from 'lucide-react'

export default function Resume() {
  return (
    <Container>
      <Layout>
        <Header />
        <Companies />
        <AllHighlights />
      </Layout>
    </Container>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-dvh bg-app transition-colors duration-300">{children}</main>
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="md:py-24 md:px-30 px-6 py-16 space-y-11">{children}</section>
}

const Header = () => {
  const { language } = useI18nStore()
  const t = translations[language].resume

  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/docs/lucas_moreno_cv.pdf'
    link.download = 'lucas_moreno_cv.pdf'
    link.click()
  }

  return (
    <motion.header initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
      <motion.h1 variants={fadeUp} className="text-slate-800 text-4xl md:text-6xl font-semibold tracking-tight">
        {t.title}
      </motion.h1>
      <motion.p variants={fadeUp} className="text-base text-slate-600 leading-relaxed max-w-2xl">
        {t.subtitle}
      </motion.p>
      <motion.button
        variants={fadeUp}
        onClick={handleDownloadPDF}
        className="inline-flex items-center gap-2 px-4 py-3 bg-[#639922] text-white text-sm font-medium rounded-lg hover:bg-[#537d1d] transition-colors duration-300"
      >
        <Download size={18} />
        {t.download}
      </motion.button>
    </motion.header>
  )
}

const Companies = () => {
  const { language } = useI18nStore()
  const companies = translations[language].resume.companies

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="space-y-6"
    >
      {companies.map((company, index) => (
        <CompanyCard key={company.name} company={company} index={index + 1} />
      ))}
    </motion.section>
  )
}

interface Company {
  name: string
  period: string
  role: string
  description: string
  achievements: string[]
  stack: string[]
}

const CompanyCard = ({ company, index }: { company: Company; index: number }) => {
  const { language } = useI18nStore()
  const t = translations[language].resume
  const numberFormatted = index.toString().padStart(2, '0')

  return (
    <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-6">
      <CompanyHeader>
        <span className="text-[#639922] text-4xl md:text-5xl font-bold">{numberFormatted}</span>
        <CompanyInfo>
          <h3 className="text-slate-900 text-xl md:text-2xl font-semibold">{company.name}</h3>
          <span className="text-slate-500 text-sm">{company.period}</span>
        </CompanyInfo>
      </CompanyHeader>

      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-slate-900">{company.role}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{company.description}</p>
      </div>

      <AchievementsContainer>
        <h5 className="font-mono text-xs uppercase tracking-widest text-[#639922]">{t.achievementsLabel}</h5>
        <AchievementsList>
          {company.achievements.map((achievement, i) => (
            <AchievementItem key={i}>{achievement}</AchievementItem>
          ))}
        </AchievementsList>
      </AchievementsContainer>

      <StackContainer>
        {company.stack.map((tech) => (
          <StackChip key={tech}>{tech}</StackChip>
        ))}
      </StackContainer>
    </motion.div>
  )
}

const CompanyHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-6">{children}</div>
}

const CompanyInfo = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-1">{children}</div>
}

const AchievementsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-3">{children}</div>
}

const AchievementsList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-2 list-none">{children}</ul>
}

const AchievementItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
      <span className="text-[#639922] mt-1">→</span>
      <span>{children}</span>
    </li>
  )
}

const StackContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-1.5 flex-wrap">{children}</div>
}

const StackChip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded border border-[#639922]/20 text-[#639922] bg-[#639922]/5">
      {children}
    </span>
  )
}

const AllHighlights = () => {
  const { language } = useI18nStore()
  const t = translations[language]
  const highlights = t.about.highlights

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-6"
    >
      <motion.h2 variants={fadeUp} className="text-slate-900 text-2xl font-semibold text-center">
        {t.resume.highlightsTitle}
      </motion.h2>
      <motion.div variants={staggerContainer} className="flex gap-1.5 flex-wrap justify-center">
        {highlights.map((highlight) => (
          <motion.span
            key={highlight}
            variants={fadeUp}
            className="font-mono text-xs px-2.5 py-1 rounded border border-[#639922]/20 text-[#639922] bg-[#639922]/5"
          >
            {highlight}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
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
