'use client'
import React from 'react'
import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import Link from 'next/link'
import Image from 'next/image'
import lmIcon from '@/app/icon.png'
import { useRouter, usePathname } from 'next/navigation'

export const Menu = () => {
  return (
    <Container>
      <Layout>
        <BrandSection>
          <BrandImage />
        </BrandSection>

        <NavigationSection>
          <NavigationList>
            <HomeItem />
            <ResumeItem />
            <PatternsItem />
          </NavigationList>
        </NavigationSection>

        <ActionSection>
          <LanguageToggle />
        </ActionSection>
      </Layout>
    </Container>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <header className="w-full">{children}</header>
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex px-2 md:px-5 h-18 items-center justify-between border-b border-white/5">
      {children}
    </section>
  )
}

const BrandSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex  items-center">{children}</div>
}

const BrandImage = () => {
  const router = useRouter()
  return (
    <figure
      className="w-15 h-15 overflow-hidden cursor-pointer animate-right-sheet"
      key="brand-image"
      onClick={() => router.push('/')}
    >
      <Image src={lmIcon} alt="Brand Icon" className="object-cover" loading="eager" />
    </figure>
  )
}

const NavigationSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav aria-label="Navegação principal" className="flex flex-1 justify-center">
      {children}
    </nav>
  )
}

const NavigationList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex items-center gap-x-4 md:gap-x-8 md:gap-10">{children}</ul>
}

const HomeItem = () => {
  const { language } = useI18nStore()
  const t = translations[language].menu
  const pathname = usePathname()
  const isActive = pathname === '/'

  return (
    <li>
      <Link
        href="/"
        className={`group relative inline-flex items-center font-mono text-[0.72rem] uppercase tracking-[0.08em] transition-all duration-300 ${
          isActive ? 'text-primary text-glow-soft' : 'text-white/70 hover:text-primary hover:text-glow-soft'
        }`}
      >
        {t.home}
        {isActive && (
          <>
            <span className="absolute -bottom-2 left-0 h-px w-full bg-primary opacity-100 shadow-[0_0_8px_rgba(255,0,127,0.6)]" />
            <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-primary/10 blur-sm" />
          </>
        )}
      </Link>
    </li>
  )
}

const ResumeItem = () => {
  const { language } = useI18nStore()
  const t = translations[language].menu
  const pathname = usePathname()
  const isActive = pathname === '/curriculo'

  return (
    <li>
      <Link
        href="/curriculo"
        className={`group relative inline-flex items-center font-mono text-[0.72rem] uppercase tracking-[0.08em] transition-all duration-300 ${
          isActive ? 'text-primary text-glow-soft' : 'text-white/70 hover:text-primary hover:text-glow-soft'
        }`}
      >
        {t.resume}
        {isActive && (
          <>
            <span className="absolute -bottom-2 left-0 h-px w-full bg-primary opacity-100 shadow-[0_0_8px_rgba(255,0,127,0.6)]" />
            <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-primary/10 blur-sm" />
          </>
        )}
      </Link>
    </li>
  )
}

const PatternsItem = () => {
  const { language } = useI18nStore()
  const t = translations[language].menu
  const pathname = usePathname()
  const isActive = pathname === '/patterns'

  return (
    <li>
      <Link
        href="/patterns"
        className={`group relative inline-flex items-center font-mono text-[0.72rem] uppercase tracking-[0.08em] transition-all duration-300 ${
          isActive ? 'text-primary text-glow-soft' : 'text-white/70 hover:text-primary hover:text-glow-soft'
        }`}
      >
        {t.patterns}
        {isActive && (
          <>
            <span className="absolute -bottom-2 left-0 h-px w-full bg-primary opacity-100 shadow-[0_0_8px_rgba(255,0,127,0.6)]" />
            <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-primary/10 blur-sm" />
          </>
        )}
      </Link>
    </li>
  )
}

const ActionSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex  items-center justify-end gap-4">{children}</div>
}

const LanguageToggle = () => {
  const { language, toggleLanguage } = useI18nStore()

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex h-11 items-center justify-center border border-white/10 px-4 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-white/70 transition-all duration-300 hover:border-primary/40 hover:text-primary hover:text-glow-soft"
      aria-label="Toggle language"
    >
      {language === 'pt' ? 'PT' : 'EN'}
    </button>
  )
}
