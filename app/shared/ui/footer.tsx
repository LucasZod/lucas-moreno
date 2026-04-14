'use client'

import { useI18nStore } from '@/app/stores/i18n-store'
import { translations } from '@/app/locales/translations'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Container>
      <Layout>
        <SocialLinks />
        <Copyright />
      </Layout>
    </Container>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <footer className="w-full border-t border-white/5 bg-linear-to-r from-primary to-olive-700">{children}</footer>
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:py-8 md:px-20 px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {children}
    </div>
  )
}

const SocialLinks = () => {
  const { language } = useI18nStore()
  const contact = translations[language].resume?.contact

  return (
    <nav className="flex items-center gap-6">
      <LinkedInLink url={contact?.linkedin} />
      <PhoneLink phone={contact?.phone} />
      <InstagramLink />
    </nav>
  )
}

const LinkedInLink = ({ url }: { url?: string }) => {
  if (!url) return null

  const linkedinUrl = url.startsWith('http') ? url : `https://${url}`

  return (
    <SocialLink href={linkedinUrl} label="LinkedIn">
      <LinkedInIcon />
      <SocialText>LinkedIn</SocialText>
    </SocialLink>
  )
}

const PhoneLink = ({ phone }: { phone?: string }) => {
  if (!phone) return null

  const phoneNumber = phone.replace(/\D/g, '')

  return (
    <SocialLink href={`tel:+55${phoneNumber}`} label="Telefone">
      <PhoneIcon />
      <SocialText>{phone}</SocialText>
    </SocialLink>
  )
}

const InstagramLink = () => {
  return (
    <SocialLink href="https://instagram.com/lucasmooreno" label="Instagram">
      <InstagramIcon />
      <SocialText>@lucasmooreno</SocialText>
    </SocialLink>
  )
}

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white/70 hover:text-primary hover:text-glow-soft transition-all duration-300 group"
      aria-label={label}
    >
      {children}
    </Link>
  )
}

const SocialText = ({ children }: { children: React.ReactNode }) => {
  return <span className="hidden md:inline text-sm tracking-wide">{children}</span>
}

const Copyright = () => {
  const currentYear = new Date().getFullYear()

  return <CopyrightText>© {currentYear} Lucas Moreno. Todos os direitos reservados.</CopyrightText>
}

const CopyrightText = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/50 text-xs md:text-sm tracking-wide text-center md:text-right">{children}</p>
}

// Icons
const LinkedInIcon = () => {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const PhoneIcon = () => {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

const InstagramIcon = () => {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  )
}
