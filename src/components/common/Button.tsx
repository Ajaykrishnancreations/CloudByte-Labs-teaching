import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110',
  secondary:
    'border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30',
  ghost: 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5',
}

interface CommonProps {
  variant?: Variant
  className?: string
  to?: string
  href?: string
  external?: boolean
  onClick?: () => void
}

type Props = PropsWithChildren<
  CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, never>
>

export default function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  href,
  external,
  onClick,
  ...rest
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
