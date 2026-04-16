'use client'
import React from 'react'
import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CodeXml } from 'lucide-react'
import { motion } from 'framer-motion'

export const Menu = () => {
  return (
    <Container>
      <Layout>
        <BrandSection>
          <Logo />
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
  return (
    <header className="w-full bg-linear-to-r from-primary to-olive-700" role="banner">
      {children}
    </header>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex px-2 md:px-5 h-15 items-center justify-between border-b border-white/30">
      {children}
    </section>
  )
}

const BrandSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex  items-center">{children}</div>
}

const Logo = () => {
  return (
    <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Link href="/" className="inline-flex items-center gap-2 cursor-pointer" aria-label="Página inicial">
        <CodeXml
          size={24}
          className="text-white hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-300"
        />
      </Link>
    </motion.div>
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

const LinkItem = ({ children, href, isActive }: { children: React.ReactNode; href: string; isActive?: boolean }) => {
  return (
    <Link
      className={`group relative inline-flex items-center hover:text-white font-mono text-[0.72rem] uppercase tracking-[0.08em] transition-all duration-300 ${
        isActive ? 'text-white' : 'text-white/60'
      }`}
      href={href}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}

const HomeItem = () => {
  const { language } = useI18nStore()
  const t = translations[language].menu
  const pathname = usePathname()
  const isActive = pathname === '/'

  return (
    <li>
      <LinkItem isActive={isActive} href="/">
        {t.home}
      </LinkItem>
    </li>
  )
}

const ResumeItem = () => {
  const { language } = useI18nStore()
  const t = translations[language].menu
  const pathname = usePathname()
  const isActive = pathname === '/resume'

  return (
    <li>
      <LinkItem isActive={isActive} href="/resume">
        {t.resume}
      </LinkItem>
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
      <LinkItem isActive={isActive} href="/patterns">
        {t.patterns}
      </LinkItem>
    </li>
  )
}

const ActionSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-end gap-4">{children}</div>
}

const LanguageToggle = () => {
  const { language, toggleLanguage } = useI18nStore()

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex h-10 cursor-pointer items-center justify-center border border-white/20 px-3 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
      aria-label="Toggle language"
    >
      {language === 'pt' ? 'PT' : 'EN'}
    </button>
  )
}
