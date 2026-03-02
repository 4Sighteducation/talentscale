'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const row1 = [
  'Chief Marketing Officer',
  'Chief Revenue Officer',
  'Chief Commercial Officer',
  'Marketing Director',
  'Commercial Director',
  'Product Director',
  'Sales Director',
  'Director of Growth',
  'Managing Director',
  'Digital Marketing Director',
  'Head of Growth',
  'Head of Product',
]

const row2 = [
  'Head of CRM',
  'Head of Data Science',
  'Head of User Acquisition',
  'Head of Search',
  'Head of User Experience',
  'Head of Performance',
  'Head of Brand Marketing',
  'Head of PR & Communications',
  'Head of Sales',
  'Head of Content',
  'Head of Direct Marketing',
  'VP Engineering',
]

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}
        style={{ display: 'flex', gap: '16px', width: 'max-content', willChange: 'transform' }}
      >
        {doubled.map((role, i) => (
          <span
            key={i}
            style={{
              padding: '10px 24px',
              background: 'rgba(19, 17, 42, 0.6)',
              border: '1px solid rgba(124, 58, 237, 0.12)',
              borderRadius: '100px',
              fontSize: '13px',
              color: '#a8a0c8',
              whiteSpace: 'nowrap',
              cursor: 'default',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLSpanElement
              el.style.borderColor = '#8b5cf6'
              el.style.color = '#f0ecff'
              el.style.background = 'rgba(124, 58, 237, 0.08)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLSpanElement
              el.style.borderColor = 'rgba(124, 58, 237, 0.12)'
              el.style.color = '#a8a0c8'
              el.style.background = 'rgba(19, 17, 42, 0.6)'
            }}
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Roles() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="roles"
      ref={ref}
      style={{ padding: '120px 0' }}
    >
      <div style={{ padding: '0 48px', maxWidth: '1280px', margin: '0 auto 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-5"
          style={{
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#a78bfa',
            fontWeight: 600,
          }}
        >
          <span style={{ width: '24px', height: '1.5px', background: '#7c3aed', display: 'inline-block' }} />
          Roles I Cover
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          style={{
            fontFamily: 'var(--font-jakarta)',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-1px',
            color: '#f0ecff',
            marginBottom: '20px',
          }}
        >
          From C-Suite to<br />senior leadership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.16 }}
          style={{
            fontSize: '17px',
            color: '#a8a0c8',
            maxWidth: '520px',
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          I cover all types of roles for organisations large and small. Here&apos;s a
          snapshot of the searches I&apos;ve conducted.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease, delay: 0.3 }}
        className="flex flex-col gap-4"
      >
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </motion.div>
    </section>
  )
}
