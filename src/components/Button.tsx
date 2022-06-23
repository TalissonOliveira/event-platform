import { ReactNode } from "react"

interface ButtonProps {
  variant?: 'primary' | 'outlined'
  children: ReactNode
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  const outlineButtonClassNames = 'text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-gray-900'
  const primaryButtonClassNames = 'bg-green-500 hover:bg-green-700'

  return (
    <a href="#" className={`
      flex items-center justify-center gap-2 p-4  text-sm font-bold uppercase rounded  transition-colors
      ${variant === 'primary' ? primaryButtonClassNames : outlineButtonClassNames}
    `}>
      {children}
    </a>
  )
}
