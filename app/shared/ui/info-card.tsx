import { DetailedHTMLProps, HTMLAttributes } from 'react'

const Container = ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div {...props} className={`px-5 py-8 border-l-2 border-primary/40 max-w-237 space-y-6 ${props.className ?? ''}`}>
      {children}
    </div>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="flex flex-col gap-y-4">{children}</section>
}

const TitleContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2">{children}</div>
}

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-white text-xl tracking-wide font-semibold">{children}</h3>
}

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/80 text-lg tracking-wide font-light">{children}</p>
}

const Content = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-white/30 text-lg tracking-wide text-justify">{children}</span>
}

const ChipContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-2 items-center flex-wrap md:mt-10 mt-6">{children}</div>
}

export const INFO_CARD = {
  Container,
  Layout,
  TitleContainer,
  Title,
  Subtitle,
  Content,
  ChipContainer,
}
