'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-right' | 'scale-in'
  delay?: number
  duration?: number
  className?: string
}

export function ScrollAnimation({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  className = ''
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
