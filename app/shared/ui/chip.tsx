import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface ChipProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'default'
  className?: string
}

export const Chip = ({ children, variant = 'primary', ...props }: ChipProps) => {
  const variants = {
    default: 'bg-white/10 text-white/30 border border-white/10',
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
  }[variant]

  return (
    <span {...props} className={`p-2 text-[11px] uppercase ${variants} ${props.className}`}>
      {children}
    </span>
  )
}
