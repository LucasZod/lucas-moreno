'use client'

import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import { Chip } from './ui/chip'
import { INFO_CARD } from './ui/info-card'
import { EXP_CARD } from './ui/exp-card'
import { Carousel } from './shared/libs/carousel'
import Image from 'next/image'
import { useMaskHover } from './shared/hooks/use-mask-hover'

export default function Home() {
  return (
    <Container>
      <Layout>
        <Title />
        <Subtitle />
        <Experience />
        <Skills />
        <About />
        <Projects />
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

const Title = () => {
  const { language } = useI18nStore()
  const t = translations[language].home

  return (
    <header className="space-y-2">
      <h2 className=" tracking-widest text-primary/70">{t.greeting}</h2>
      <h1 className="text-white text-5xl md:text-9xl text-glow-soft font-bold animate-left-sheet">{t.name}</h1>
    </header>
  )
}

const Subtitle = () => {
  const { language } = useI18nStore()
  const t = translations[language].home

  return (
    <INFO_CARD.Container>
      <INFO_CARD.Layout>
        <INFO_CARD.TitleContainer>
          <INFO_CARD.Subtitle>{t.subtitle}</INFO_CARD.Subtitle>
        </INFO_CARD.TitleContainer>
      </INFO_CARD.Layout>
    </INFO_CARD.Container>
  )
}

const Experience = () => {
  const { language } = useI18nStore()
  const experiences = translations[language].experiences

  return (
    <ExperienceContainer>
      <Carousel>
        {experiences.map((experience) => (
          <EXP_CARD.Container key={experience.headerTitle} className="border-gradient">
            <EXP_CARD.Layout>
              <EXP_CARD.Header>
                <EXP_CARD.HeaderTitle>{experience.headerTitle}</EXP_CARD.HeaderTitle>
                <ExperienceIcon src={experience.iconSrc} alt={experience.headerTitle} />
              </EXP_CARD.Header>
              <EXP_CARD.TitleContainer>
                <EXP_CARD.Title>{experience.title}</EXP_CARD.Title>
                <EXP_CARD.Subtitle>{experience.subtitle}</EXP_CARD.Subtitle>
              </EXP_CARD.TitleContainer>
              <EXP_CARD.ChipContainer>
                {experience.chip.map((chip) => (
                  <ExperienceChip key={chip} chip={chip} />
                ))}
              </EXP_CARD.ChipContainer>
            </EXP_CARD.Layout>
          </EXP_CARD.Container>
        ))}
      </Carousel>
    </ExperienceContainer>
  )
}

const ExperienceIcon = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={23} height={23} style={{ width: 'auto', height: 'auto' }} />
}

const ExperienceChip = ({ chip }: { chip: string }) => {
  return <Chip variant="primary">{chip}</Chip>
}

const ExperienceContainer = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>
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
  return <section className="space-y-10">{children}</section>
}

const SkillsHeader = ({ children }: { children: React.ReactNode }) => {
  return <header className="space-y-4">{children}</header>
}

const SkillsTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-white text-5xl text-glow-soft font-bold tracking-wide">{children}</h2>
}

const SkillsSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/70 text-lg tracking-wide max-w-200">{children}</p>
}

const SkillsGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">{children}</div>
}

const SkillCategory = ({ category }: { category: { title: string; skills: string[] } }) => {
  return (
    <INFO_CARD.Container>
      <INFO_CARD.Layout>
        <INFO_CARD.TitleContainer>
          <INFO_CARD.Title>{category.title}</INFO_CARD.Title>
        </INFO_CARD.TitleContainer>
      </INFO_CARD.Layout>
      <INFO_CARD.ChipContainer>
        {category.skills.map((skill) => (
          <SkillChip key={skill}>{skill}</SkillChip>
        ))}
      </INFO_CARD.ChipContainer>
    </INFO_CARD.Container>
  )
}

const SkillChip = ({ children }: { children: React.ReactNode }) => {
  return <Chip variant="secondary">{children}</Chip>
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
      <INFO_CARD.Container>
        <INFO_CARD.Layout>
          <AboutContent>
            {t.paragraphs.map((paragraph, index) => (
              <AboutParagraph key={index}>{paragraph}</AboutParagraph>
            ))}
          </AboutContent>
        </INFO_CARD.Layout>
        <INFO_CARD.ChipContainer>
          {t.highlights.map((highlight) => (
            <AboutChip key={highlight}>{highlight}</AboutChip>
          ))}
        </INFO_CARD.ChipContainer>
      </INFO_CARD.Container>
    </AboutContainer>
  )
}

const AboutContainer = ({ children }: { children: React.ReactNode }) => {
  return <section className="space-y-10">{children}</section>
}

const AboutHeader = ({ children }: { children: React.ReactNode }) => {
  return <header className="space-y-4">{children}</header>
}

const AboutTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-white text-5xl text-glow-soft font-bold tracking-wide">{children}</h2>
}

const AboutSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/70 text-lg tracking-wide">{children}</p>
}

const AboutContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6">{children}</div>
}

const AboutParagraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/80 text-lg tracking-wide leading-relaxed">{children}</p>
}

const AboutChip = ({ children }: { children: React.ReactNode }) => {
  return <Chip variant="secondary">{children}</Chip>
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
          <ProjectCard key={project.number} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}

const ProjectsContainer = ({ children }: { children: React.ReactNode }) => {
  return <section className="space-y-10">{children}</section>
}

const ProjectsHeader = ({ children }: { children: React.ReactNode }) => {
  return <header className="space-y-4">{children}</header>
}

const ProjectsTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-white text-5xl text-glow-soft font-bold tracking-wide">{children}</h2>
}

const ProjectsSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/70 text-lg tracking-wide">{children}</p>
}

const ProjectsGrid = ({ children }: { children: React.ReactNode }) => {
  return <Carousel>{children}</Carousel>
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

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <EXP_CARD.Container className="max-w-90 border-gradient">
      <EXP_CARD.Layout>
        <EXP_CARD.Header>
          <EXP_CARD.HeaderTitle>
            {project.number} {'//'} {project.title}
          </EXP_CARD.HeaderTitle>
        </EXP_CARD.Header>
        <EXP_CARD.TitleContainer>
          <ProjectSection>
            <ProjectLabel>PROBLEMA:</ProjectLabel>
            <ProjectText>{project.problem}</ProjectText>
          </ProjectSection>
          <ProjectSection>
            <ProjectLabel>SOLUÇÃO:</ProjectLabel>
            <ProjectText>{project.solution}</ProjectText>
          </ProjectSection>
          <ProjectSection>
            <ProjectLabel>IMPACTO:</ProjectLabel>
            <ProjectImpact>{project.impact}</ProjectImpact>
          </ProjectSection>
          <ProjectSection>
            <ProjectLabel>ARQUITETURA:</ProjectLabel>
            <ProjectText>{project.architecture}</ProjectText>
          </ProjectSection>
        </EXP_CARD.TitleContainer>
        <EXP_CARD.ChipContainer>
          {project.stack.map((tech, index) => (
            <ProjectChip key={`${project.number}-${index}`}>{tech}</ProjectChip>
          ))}
        </EXP_CARD.ChipContainer>
      </EXP_CARD.Layout>
    </EXP_CARD.Container>
  )
}

const ProjectSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2">{children}</div>
}

const ProjectLabel = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary text-sm tracking-wide font-semibold">{children}</span>
}

const ProjectText = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/80 tracking-wide">{children}</p>
}

const ProjectImpact = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-secondary tracking-wide font-semibold">{children}</p>
}

const ProjectChip = ({ children }: { children: React.ReactNode }) => {
  return <Chip variant="primary">{children}</Chip>
}
