'use client'

import Image from 'next/image'
import icon from "../../public/icon-light-32x32.png"

interface LogoProps {
  className?: string
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', showTagline = false, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-10 h-10',
      gap: 'gap-2',
      snl: 'text-lg',
      company: 'text-xs',
      tagline: 'text-[10px]',
      container: 'flex items-center'
    },
    md: {
      icon: 'w-12 h-12',
      gap: 'gap-3',
      snl: 'text-xl',
      company: 'text-sm',
      tagline: 'text-xs',
      container: 'flex items-center'
    },
    lg: {
      icon: 'w-16 h-16',
      gap: 'gap-4',
      snl: 'text-3xl',
      company: 'text-base',
      tagline: 'text-sm',
      container: 'flex items-center'
    }
  }

  const styles = sizeClasses[size]

  return (
    <div className={`${styles.container} ${styles.gap} ${className}`}>
      {/* Icon */}
      <div className="flex-shrink-0">
        <Image
          src={icon}
          alt="Stratoview Nigeria Limited - SNL Logo"
          width={64}
          height={64}
          className={styles.icon}
          priority
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center">
        <div>
          <p className={`${styles.snl} font-bold text-primary leading-none`}>SNL</p>
        </div>
        <div>
          <p className={`${styles.company} font-semibold text-primary leading-tight`}>
            STRATOVIEW NIGERIA
          </p>
          <p className={`${styles.company} font-semibold text-primary leading-tight`}>
            LIMITED
          </p>
        </div>
        {showTagline && (
          <p className={`${styles.tagline} text-primary/70 leading-tight mt-1`}>
            Earthwise Solutions • Sustainable Results
          </p>
        )}
      </div>
    </div>
  )
}
