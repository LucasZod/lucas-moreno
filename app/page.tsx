'use client'

import { motion, Variants } from 'framer-motion'
import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import { Code2, Banknote, FileText, Server, Zap, Network } from 'lucide-react'
import { Carousel } from './shared/libs/carousel'

export default function Home() {
  return (
    <Container>
      <Layout>
        <HeroContainer>
          <Title />
          <Subtitle />
        </HeroContainer>
        <Experience />
        <Skills />
        <About />
        <Projects />
      </Layout>
    </Container>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-dvh bg-[#F8F7F4]">{children}</main>
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="md:py-24 md:px-30 px-6 py-16 space-y-16">{children}</section>
}

const HeroContainer = ({ children }: { children: React.ReactNode }) => {
  return <section className="space-y-6">{children}</section>
}

const Title = () => {
  const { language } = useI18nStore()
  const t = translations[language].home

  return (
    <motion.header key={language} initial="hidden" animate="visible" variants={staggerContainer} className="space-y-3">
      <motion.h3 variants={fadeUpGreeting} className="font-mono text-xs uppercase tracking-widest text-green-accent">
        {t.greeting}
      </motion.h3>
      <motion.h1 variants={fadeUpTitle} className="text-slate-800 text-4xl md:text-7xl font-semibold tracking-tight">
        {t.name}
      </motion.h1>
    </motion.header>
  )
}

const Subtitle = () => {
  const { language } = useI18nStore()
  const t = translations[language].home

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="max-w-3xl"
      key={language}
    >
      <motion.p variants={fadeUp} className="text-base text-slate-600 leading-relaxed">
        {t.subtitle}
      </motion.p>
    </motion.section>
  )
}

const Experience = () => {
  const { language } = useI18nStore()
  const experiences = translations[language].experiences

  return (
    <ExperienceContainer key={language}>
      <Carousel>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.headerTitle} experience={experience} />
        ))}
      </Carousel>
    </ExperienceContainer>
  )
}

const ExperienceContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {children}
    </motion.section>
  )
}

const ExperienceGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </motion.div>
  )
}

interface Experience {
  headerTitle: string
  title: string
  subtitle: string
  chip: string[]
  iconSrc: string
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const IconComponent = iconMap[experience.iconSrc] || Code2

  return (
    <motion.div variants={fadeLeft} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <ExperienceCardContainer>
        <ExperienceCardHeader>
          <span className="font-mono text-xs uppercase tracking-widest text-green-accent">
            {experience.headerTitle}
          </span>
          <IconComponent size={24} className="text-green-accent hover:scale-110 transition-transform duration-300" />
        </ExperienceCardHeader>
        <ExperienceCardContent>
          <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">{experience.subtitle}</p>
        </ExperienceCardContent>
        <ExperienceCardTags>
          {experience.chip.map((chip) => (
            <ExperienceChip key={chip}>{chip}</ExperienceChip>
          ))}
        </ExperienceCardTags>
      </ExperienceCardContainer>
    </motion.div>
  )
}

const ExperienceCardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-60 md:w-75 space-y-6">{children}</div>
}

const ExperienceCardHeader = ({ children }: { children: React.ReactNode }) => {
  return <header className="flex items-center justify-between">{children}</header>
}

const ExperienceCardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2">{children}</div>
}

const ExperienceCardTags = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-1.5 flex-wrap">{children}</div>
}

const ExperienceChip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded border border-green-accent/20 text-green-accent bg-green-accent/5">
      {children}
    </span>
  )
}

const Skills = () => {
  const { language } = useI18nStore()
  const t = translations[language].skills

  return (
    <SkillsContainer>
      <SkillsHeader>
        <SkillsTitle>{t.title}</SkillsTitle>
        <SkillsSubtitle>{t.subtitle}</SkillsSubtitle>
      </SkillsHeader>
      <SkillsGrid>
        <SkillCategory category={t.categories.frontend} />
        <SkillCategory category={t.categories.backend} />
        <SkillCategory category={t.categories.database} />
        <SkillCategory category={t.categories.architecture} />
      </SkillsGrid>
    </SkillsContainer>
  )
}

const SkillsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="space-y-8"
    >
      {children}
    </motion.section>
  )
}

const SkillsHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.header variants={staggerContainer} className="space-y-3">
      {children}
    </motion.header>
  )
}

const SkillsTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2 variants={fadeUp} className="text-slate-900 text-2xl font-semibold">
      {children}
    </motion.h2>
  )
}

const SkillsSubtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.p variants={fadeUp} className="text-base text-slate-600 leading-relaxed max-w-2xl">
      {children}
    </motion.p>
  )
}

const SkillsGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </motion.div>
  )
}

const SkillCategory = ({ category }: { category: { title: string; skills: string[] } }) => {
  return (
    <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5">
      <h4 className="text-lg font-semibold text-slate-900">{category.title}</h4>
      <SkillCategoryTags>
        {category.skills.map((skill) => (
          <SkillChip key={skill}>{skill}</SkillChip>
        ))}
      </SkillCategoryTags>
    </motion.div>
  )
}

const SkillCategoryTags = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-1.5 flex-wrap">{children}</div>
}

const SkillChip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded border border-green-accent/20 text-green-accent bg-green-accent/5">
      {children}
    </span>
  )
}

const About = () => {
  const { language } = useI18nStore()
  const t = translations[language].about

  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>{t.title}</AboutTitle>
        <AboutSubtitle>{t.subtitle}</AboutSubtitle>
      </AboutHeader>
      <AboutCard>
        <AboutContent>
          {t.paragraphs.map((paragraph, index) => (
            <AboutParagraph key={index}>{paragraph}</AboutParagraph>
          ))}
        </AboutContent>
        <AboutTags>
          {t.highlights.map((highlight) => (
            <AboutChip key={highlight}>{highlight}</AboutChip>
          ))}
        </AboutTags>
      </AboutCard>
    </AboutContainer>
  )
}

const AboutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="space-y-8"
    >
      {children}
    </motion.section>
  )
}

const AboutHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.header variants={staggerContainer} className="space-y-3">
      {children}
    </motion.header>
  )
}

const AboutTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2 variants={fadeUp} className="text-slate-900 text-2xl font-semibold">
      {children}
    </motion.h2>
  )
}

const AboutSubtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.p variants={fadeUp} className="text-base text-slate-600 leading-relaxed">
      {children}
    </motion.p>
  )
}

const AboutCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-6">
      {children}
    </motion.div>
  )
}

const AboutContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-4">{children}</div>
}

const AboutParagraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-slate-600 leading-relaxed">{children}</p>
}

const AboutTags = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-1.5 flex-wrap">{children}</div>
}

const AboutChip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded border border-green-accent/20 text-green-accent bg-green-accent/5">
      {children}
    </span>
  )
}

const Projects = () => {
  const { language } = useI18nStore()
  const t = translations[language].projects

  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <ProjectsTitle>{t.title}</ProjectsTitle>
        <ProjectsSubtitle>{t.subtitle}</ProjectsSubtitle>
      </ProjectsHeader>
      <ProjectsGrid>
        {t.items.map((project) => (
          <ProjectCard key={project.number} project={project} labels={t.labels} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}

const ProjectsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="space-y-8"
    >
      {children}
    </motion.section>
  )
}

const ProjectsHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.header variants={staggerContainer} className="space-y-3">
      {children}
    </motion.header>
  )
}

const ProjectsTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2 variants={fadeUp} className="text-slate-900 text-2xl font-semibold">
      {children}
    </motion.h2>
  )
}

const ProjectsSubtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.p variants={fadeUp} className="text-base text-slate-600 leading-relaxed">
      {children}
    </motion.p>
  )
}

const ProjectsGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </motion.div>
  )
}

interface Project {
  number: string
  title: string
  problem: string
  solution: string
  stack: string[]
  impact: string
  architecture: string
}

interface ProjectLabels {
  problem: string
  solution: string
  impact: string
  architecture: string
}

const ProjectCard = ({ project, labels }: { project: Project; labels: ProjectLabels }) => {
  return (
    <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5">
      <ProjectCardHeader>
        <span className="font-mono uppercase tracking-wide text-green-accent">
          {project.number} {project.title}
        </span>
      </ProjectCardHeader>
      <ProjectCardContent>
        <ProjectSection>
          <ProjectLabel>{labels.problem}</ProjectLabel>
          <ProjectText>{project.problem}</ProjectText>
        </ProjectSection>
        <ProjectSection>
          <ProjectLabel>{labels.solution}</ProjectLabel>
          <ProjectText>{project.solution}</ProjectText>
        </ProjectSection>
        <ProjectSection>
          <ProjectLabel>{labels.impact}</ProjectLabel>
          <ProjectText>{project.impact}</ProjectText>
        </ProjectSection>
        <ProjectSection>
          <ProjectLabel>{labels.architecture}</ProjectLabel>
          <ProjectText>{project.architecture}</ProjectText>
        </ProjectSection>
      </ProjectCardContent>
      <ProjectCardTags>
        {project.stack.map((tech, index) => (
          <ProjectChip key={`${project.number}-${index}`}>{tech}</ProjectChip>
        ))}
      </ProjectCardTags>
    </motion.div>
  )
}

const ProjectCardHeader = ({ children }: { children: React.ReactNode }) => {
  return <header>{children}</header>
}

const ProjectCardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-3">{children}</div>
}

const ProjectSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-1.5">{children}</div>
}

const ProjectLabel = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-mono text-xs uppercase tracking-widest text-green-accent">{children}</span>
}

const ProjectText = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-slate-600 leading-relaxed">{children}</p>
}

const ProjectCardTags = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-1.5 flex-wrap">{children}</div>
}

const ProjectChip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded border border-green-accent/20 text-green-accent bg-green-accent/5">
      {children}
    </span>
  )
}

// Variantes de animação
const fadeUpTitle = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: [0.1, 0.25, 0.1, 1] } },
} as Variants

const fadeUpGreeting = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
} as Variants

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
} as Variants

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
} as Variants

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
} as Variants

// Mapeamento de ícones
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  '/assets/engf.svg': Code2,
  '/assets/finan.svg': Banknote,
  '/assets/ged.svg': FileText,
  '/assets/back.svg': Server,
  '/assets/engperf.svg': Zap,
  '/assets/sis.svg': Network,
}
