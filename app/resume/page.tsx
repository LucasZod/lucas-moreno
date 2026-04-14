'use client'

import { motion, Variants } from 'framer-motion'
import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import { forwardRef, useRef } from 'react'
import React from 'react'
import { Download } from 'lucide-react'

export default function Resume() {
  const pdfRef = useRef<HTMLDivElement>(null)

  return (
    <React.Fragment>
      <Container>
        <Layout>
          <Header pdfRef={pdfRef} />
          <Companies />
          <AllHighlights />
        </Layout>
      </Container>
      <PDFContent ref={pdfRef} />
    </React.Fragment>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-dvh bg-[#F8F7F4]">{children}</main>
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="md:py-24 md:px-30 px-6 py-16 space-y-11">{children}</section>
}

const Header = ({ pdfRef }: { pdfRef: React.RefObject<HTMLDivElement | null> }) => {
  const { language } = useI18nStore()
  const t = translations[language].resume

  const handleDownloadPDF = async () => {
    if (!pdfRef.current) return

    try {
      const html2canvas = (await import('html2canvas')).default
      const jsPDF = (await import('jspdf')).default

      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 0

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('curriculo-lucas-moreno.pdf')
    } catch (error) {
      console.error('Erro ao gerar PDF:', error)
    }
  }

  return (
    <motion.header initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
      <motion.h1 variants={fadeUp} className="text-slate-900 text-4xl md:text-6xl font-semibold tracking-tight">
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

const PDFContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        left: '-9999px',
        top: '0',
        backgroundColor: '#ffffff',
        padding: '20px',
        color: '#000000',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <PDFHeader />
      <PDFDivider />
      <PDFExperiences />
      <PDFDivider />
      <PDFSkills />
      <PDFDivider />
      <PDFEducation />
      <PDFDivider />
      <PDFReferences />
    </div>
  )
})
PDFContent.displayName = 'PDFContent'

const PDFHeader = () => {
  const { language } = useI18nStore()
  const contact = translations[language].resume.contact

  return (
    <div style={{ marginBottom: '24px' }}>
      <h1 style={{ fontSize: '50px', fontWeight: 'bold', color: '#000000', marginBottom: '12px' }}>{contact.name}</h1>
      <p style={{ fontSize: '35px', color: '#333333', marginBottom: '12px' }}>{contact.role}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '35px', color: '#333333' }}>
        <p>📧 {contact.email}</p>
        <p>📞 {contact.phone}</p>
        <p>🔗 {contact.linkedin}</p>
        <p>📍 {contact.location}</p>
      </div>
    </div>
  )
}

const PDFDivider = () => {
  return <div style={{ borderTop: '1px solid #cccccc', margin: '50px 0' }} />
}

const PDFExperiences = () => {
  const { language } = useI18nStore()
  const companies = translations[language].resume.companies
  const t = translations[language].resume
  const titleLabel = language === 'pt' ? 'EXPERIÊNCIA PROFISSIONAL' : 'PROFESSIONAL EXPERIENCE'

  return (
    <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#000000', marginBottom: '16px' }}>{titleLabel}</h2>
      {companies.map((company, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}
          >
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000' }}>{company.name}</h3>
              <p style={{ fontSize: '32px', color: '#333333', fontStyle: 'italic' }}>{company.role}</p>
            </div>
            <span style={{ fontSize: '32px', color: '#666666' }}>{company.period}</span>
          </div>
          <p style={{ fontSize: '30px', color: '#333333', marginBottom: '8px' }}>{company.description}</p>
          <div style={{ marginLeft: '16px' }}>
            <p style={{ fontSize: '28px', fontWeight: '600', color: '#222222', marginBottom: '4px' }}>
              {t.achievementsLabel}:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '8px' }}>
              {company.achievements.map((achievement, i) => (
                <li key={i} style={{ fontSize: '35px', color: '#333333', marginBottom: '4px' }}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

const PDFSkills = () => {
  const { language } = useI18nStore()
  const skills = translations[language].resume.skills

  return (
    <div style={{ marginBottom: '16px' }}>
      <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#000000', marginBottom: '12px' }}>{skills.title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '32px' }}>
        <div>
          <p style={{ fontWeight: '600', color: '#222222', marginBottom: '4px' }}>{skills.languages.title}:</p>
          <p style={{ color: '#333333' }}>{skills.languages.items.join(', ')}</p>
        </div>
        <div>
          <p style={{ fontWeight: '600', color: '#222222', marginBottom: '4px' }}>{skills.frontend.title}:</p>
          <p style={{ color: '#333333' }}>{skills.frontend.items.join(', ')}</p>
        </div>
        <div>
          <p style={{ fontWeight: '600', color: '#222222', marginBottom: '4px' }}>{skills.backend.title}:</p>
          <p style={{ color: '#333333' }}>{skills.backend.items.join(', ')}</p>
        </div>
        <div>
          <p style={{ fontWeight: '600', color: '#222222', marginBottom: '4px' }}>{skills.database.title}:</p>
          <p style={{ color: '#333333' }}>{skills.database.items.join(', ')}</p>
        </div>
        <div>
          <p style={{ fontWeight: '600', color: '#222222', marginBottom: '4px' }}>{skills.architecture.title}:</p>
          <p style={{ color: '#333333' }}>{skills.architecture.items.join(', ')}</p>
        </div>
        <div>
          <p style={{ fontWeight: '600', color: '#222222', marginBottom: '4px' }}>{skills.tools.title}:</p>
          <p style={{ color: '#333333' }}>{skills.tools.items.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}

const PDFEducation = () => {
  const { language } = useI18nStore()
  const education = translations[language].resume.education

  return (
    <div style={{ marginBottom: '16px' }}>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', marginBottom: '12px' }}>
        {education.title}
      </h2>
      <div>
        <p style={{ fontWeight: '600', color: '#222222', fontSize: '32px' }}>{education.institution}</p>
        <p style={{ fontSize: '32px', color: '#333333' }}>{education.degree}</p>
      </div>
    </div>
  )
}

const PDFReferences = () => {
  const { language } = useI18nStore()
  const references = translations[language].resume.references

  return (
    <div style={{ marginBottom: '16px' }}>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', marginBottom: '12px' }}>
        {references.title}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '32px' }}>
        {references.items.map((ref, index) => (
          <div style={{ display: 'flex', gap: 30, alignItems: 'center' }} key={index}>
            <p style={{ fontWeight: '600', color: '#222222' }}>{ref.name}</p>
            <p style={{ color: '#333333' }}>{ref.role}</p>
            <p style={{ color: '#333333' }}>{ref.phone}</p>
          </div>
        ))}
      </div>
    </div>
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
