'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  'Deliveroo',
  'Bloom & Wild',
  'Starling Bank',
  'Wise',
  'Depop',
  'GoCardless',
  'Monzo',
  'Gousto',
  'Checkout.com',
  'Cazoo',
]

const doubled = [...clients, ...clients]

export default function TrustStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden"
      style={{
        padding: '56px 0',
        borderTop: '1px solid rgba(124, 58, 237, 0.08)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.08)',
      }}
    >
      <p
        className="text-center mb-8"
        style={{
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#6b6488',
        }}
      >
        Trusted by innovative companies
      </p>

      {/* Gradient fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, #06050e, transparent)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to left, #06050e, transparent)',
        }}
      />

      {/* Scrolling row */}
      <div className="overflow-hidden">
        <div
          className="animate-marquee flex gap-14 w-max"
          style={{ willChange: 'transform' }}
        >
          {doubled.map((name, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#6b6488',
                opacity: 0.45,
                letterSpacing: '-0.4px',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.opacity = '0.75')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.opacity = '0.45')}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
