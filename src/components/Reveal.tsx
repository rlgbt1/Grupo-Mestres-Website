import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  /** When true, skip the default fade/translate treatment and only toggle "is-visible" (for custom CSS-driven effects like line-draws). */
  plain?: boolean
  [key: string]: unknown
}

export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', plain = false, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const base = plain ? '' : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${base} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
