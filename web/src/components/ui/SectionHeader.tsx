'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

interface SectionHeaderProps {
  label: string
  title: React.ReactNode
  description?: string
  inView: boolean
  align?: 'left' | 'center'
  accentColor?: string
}

export function SectionHeader({
  label,
  title,
  description,
  inView,
  align = 'left',
  accentColor = '#a78bfa',
}: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '72px', textAlign: align === 'center' ? 'center' : 'left' }}>
      {/* Label with decorative lines */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-3 mb-5"
        style={{
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: accentColor,
          fontWeight: 600,
        }}
      >
        <span style={{ width: '24px', height: '1.5px', background: '#7c3aed', display: 'inline-block' }} />
        {label}
        {align === 'center' && (
          <span style={{ width: '24px', height: '1.5px', background: '#7c3aed', display: 'inline-block' }} />
        )}
      </motion.div>

      {/* Title — clip-path slide up from below */}
      <div className="title-reveal-wrap" style={{ marginBottom: description ? '20px' : 0 }}>
        <motion.h2
          initial={{ y: '110%', opacity: 0 }}
          animate={inView ? { y: '0%', opacity: 1 } : {}}
          transition={{ duration: 0.85, ease, delay: 0.08 }}
          style={{
            fontFamily: 'var(--font-jakarta)',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-1px',
            color: '#f0ecff',
            maxWidth: align === 'center' ? 'none' : '680px',
          }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
          style={{
            fontSize: '17px',
            color: '#c0bcd6',
            maxWidth: align === 'center' ? '560px' : '520px',
            lineHeight: 1.75,
            fontWeight: 300,
            margin: align === 'center' ? '0 auto' : undefined,
          }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
