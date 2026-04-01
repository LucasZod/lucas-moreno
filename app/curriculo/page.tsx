'use client'

import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import { Chip } from '@/app/ui/chip'
import { INFO_CARD } from '@/app/ui/info-card'
import { forwardRef, useRef } from 'react'
import { Button } from '../ui/button'
import React from 'react'
import { useMaskHover } from '../shared/hooks/use-mask-hover'

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
    <HeaderContainer>
      <HeaderTitle>{t.title}</HeaderTitle>
      <HeaderSubtitle>{t.subtitle}</HeaderSubtitle>
      <ButtonDownload onDownload={handleDownloadPDF} />
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

const ButtonDownload = ({ onDownload }: { onDownload: () => void }) => {
  const { language } = useI18nStore()
  const t = translations[language].resume

  return (
    <Button
      className="inline-flex md:h-11 items-center justify-center bg-primary px-8 font-mono text-sm uppercase tracking-[0.08em] text-black! transition-all duration-300 hover:scale-[1.02] hover:text-glow-strong"
      onClick={onDownload}
    >
      {t.download}
    </Button>
  )
}

const Companies = () => {
  const { language } = useI18nStore()
  const companies = translations[language].resume.companies

  return (
    <CompaniesContainer>
      {companies.map((company, index) => (
        <CompanyCard key={company.name} company={company} index={index + 1} />
      ))}
    </CompaniesContainer>
  )
}

const CompaniesContainer = ({ children }: { children: React.ReactNode }) => {
  return <section className="space-y-8">{children}</section>
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
  const numberFormatted = index.toString().padStart(2, '0')

  return (
    <INFO_CARD.Container>
      <INFO_CARD.Layout>
        <CompanyHeader>
          <CompanyNumber>{numberFormatted}</CompanyNumber>
          <CompanyInfo>
            <CompanyName>{company.name}</CompanyName>
            <CompanyPeriod>{company.period}</CompanyPeriod>
          </CompanyInfo>
        </CompanyHeader>
        <INFO_CARD.TitleContainer>
          <INFO_CARD.Title>{company.role}</INFO_CARD.Title>
          <INFO_CARD.Subtitle>{company.description}</INFO_CARD.Subtitle>
        </INFO_CARD.TitleContainer>
        <AchievementsContainer>
          <AchievementsTitle>PRINCIPAIS CONQUISTAS:</AchievementsTitle>
          <AchievementsList>
            {company.achievements.map((achievement, i) => (
              <AchievementItem key={i}>{achievement}</AchievementItem>
            ))}
          </AchievementsList>
        </AchievementsContainer>
      </INFO_CARD.Layout>
      <INFO_CARD.ChipContainer>
        {company.stack.map((tech) => (
          <CompanyChip key={tech}>{tech}</CompanyChip>
        ))}
      </INFO_CARD.ChipContainer>
    </INFO_CARD.Container>
  )
}

const CompanyHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-6">{children}</div>
}

const CompanyNumber = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary text-5xl md:text-6xl font-bold text-glow-soft">{children}</span>
}

const CompanyInfo = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col md:gap-1">{children}</div>
}

const CompanyName = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">{children}</h3>
}

const CompanyPeriod = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-white/50 text-sm tracking-wide">{children}</span>
}

const AchievementsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-4 md:mt-6 mt-4">{children}</div>
}

const AchievementsTitle = ({ children }: { children: React.ReactNode }) => {
  return <h4 className="text-primary text-sm tracking-wide font-semibold">{children}</h4>
}

const AchievementsList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-3 list-none">{children}</ul>
}

const AchievementItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="text-white/80 text-lg tracking-wide flex items-start gap-3">
      <span className="text-secondary text-xl">→</span>
      <span>{children}</span>
    </li>
  )
}

const CompanyChip = ({ children }: { children: React.ReactNode }) => {
  return <Chip variant="primary">{children}</Chip>
}

const AllHighlights = () => {
  const { language } = useI18nStore()
  const t = translations[language].about

  return (
    <HighlightsFullContainer>
      <HighlightsTitle>COMPETÊNCIAS & HIGHLIGHTS</HighlightsTitle>
      <HighlightsGrid>
        {t.highlights.map((highlight) => (
          <HighlightChip key={highlight}>{highlight}</HighlightChip>
        ))}
      </HighlightsGrid>
    </HighlightsFullContainer>
  )
}

const HighlightsFullContainer = ({ children }: { children: React.ReactNode }) => {
  return <section className="px-12 py-10 border-gradient space-y-6 bg-foreground w-full">{children}</section>
}

const HighlightsTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-white text-3xl font-bold tracking-wide text-center">{children}</h2>
}

const HighlightsGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-3 items-center flex-wrap justify-center">{children}</div>
}

const HighlightChip = ({ children }: { children: React.ReactNode }) => {
  return <Chip variant="secondary">{children}</Chip>
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
  const titleLabel = language === 'pt' ? 'EXPERIÊNCIA PROFISSIONAL' : 'PROFESSIONAL EXPERIENCE'
  const achievementsLabel = language === 'pt' ? 'PRINCIPAIS CONQUISTAS:' : 'KEY ACHIEVEMENTS:'

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
              {achievementsLabel}
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
