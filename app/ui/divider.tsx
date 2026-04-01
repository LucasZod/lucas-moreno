import { DetailedHTMLProps, HTMLAttributes } from 'react'

export const Divider = ({ ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={`w-full h-px bg-white/10 ${props.className}`} />
}
