'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Quote() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      style={{
        padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 48px)',
        background: '#0c0b18',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.07), transparent 60%)',
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        {/* Large quote mark */}
        <div
          style={{
            fontFamily: 'var(--font-jakarta)',
            fontSize: '120px',
            color: '#7c3aed',
            opacity: 0.18,
            lineHeight: 0.8,
            marginBottom: '-16px',
            userSelect: 'none',
          }}
        >
          &ldquo;
        </div>

        <p
          style={{
            fontSize: 'clamp(22px, 2.8vw, 34px)',
            fontWeight: 300,
            lineHeight: 1.55,
            color: '#f0ecff',
            fontStyle: 'italic',
          }}
        >
          The best candidates aren&apos;t applying for jobs. They&apos;re busy doing{' '}
          <strong style={{ color: '#c4b5fd', fontWeight: 600, fontStyle: 'normal' }}>exceptional work</strong>
          {' '}somewhere else. My job is knowing exactly who they are — and having the{' '}
          <strong style={{ color: '#c4b5fd', fontWeight: 600, fontStyle: 'normal' }}>
            relationship to reach them
          </strong>.
        </p>

        <div
          style={{
            marginTop: '40px',
            fontSize: '14px',
            color: '#6b6488',
            letterSpacing: '1px',
          }}
        >
          — Jeff Hardie, Founder
        </div>
      </motion.div>
    </section>
  )
}
