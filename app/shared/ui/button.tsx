export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors cursor-pointer ${props.className ?? ''}`}
    >
      {children}
    </button>
  )
}
