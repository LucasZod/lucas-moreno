import { DetailedHTMLProps, HTMLAttributes } from 'react'

const Container = ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`md:px-12 md:py-10 px-5 py-5 space-y-3 md:space-y-6 bg-foreground max-w-125 shrink-0 w-full ${props.className ?? ''}`}
    >
      {children}
    </div>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="flex flex-col gap-y-3 md:gap-y-4">{children}</section>
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return <header className="flex items-center justify-between gap-x-4">{children}</header>
}

const HeaderTitle = ({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return (
    <h3 className={`text-white/50 text-[1rem] tracking-wide ${props.className ?? ''}`} {...props}>
      {children}
    </h3>
  )
}

const TitleContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-5 mt-3">{children}</div>
}

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-white text-xl tracking-wide font-semibold ">{children}</h3>
}

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-white/80  tracking-wide max-w-100">{children}</p>
}

const Content = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-white/50 text-lg tracking-wide text-justify">{children}</span>
}

const ChipContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-2 items-center flex-wrap mt-10">{children}</div>
}

export const EXP_CARD = {
  Container,
  Layout,
  Header,
  HeaderTitle,
  TitleContainer,
  Title,
  Subtitle,
  Content,
  ChipContainer,
}
