'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const ease = [0.16, 1, 0.3, 1] as const

const logos = [
  { name: 'Deliveroo', src: '/logos/deliveroo.png' },
  { name: 'Monzo', src: '/logos/monzo.png' },
  { name: 'Wise', src: '/logos/wise.png' },
  { name: 'Depop', src: '/logos/depop.png' },
  { name: 'Bloom & Wild', src: '/logos/bloom-and-wild.png' },
  { name: 'Cazoo', src: '/logos/cazoo.png' },
]

export default function TrustStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="px-6 md:px-12"
      style={{
        background: '#0c0b18',
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 mb-5"
            style={{
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#a78bfa',
              fontWeight: 600,
            }}
          >
            <span style={{ width: '20px', height: '1.5px', background: '#7c3aed', display: 'inline-block' }} />
            Client Portfolio
            <span style={{ width: '20px', height: '1.5px', background: '#7c3aed', display: 'inline-block' }} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-jakarta)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.8px',
              color: '#f0ecff',
              marginBottom: '16px',
            }}
          >
            I&apos;ve helped build teams at the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa, #c4b5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              UK&apos;s best
            </span>{' '}
            tech companies
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#b8b3cc',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            From fintech unicorns to DTC disruptors — a selection of the innovative companies I&apos;ve placed exceptional talent at.
          </p>
        </motion.div>

        {/* Logo grid — 2 cols on mobile, 3 on desktop */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.07 }}
              className="logo-card group relative flex items-center justify-center overflow-hidden"
              style={{
                padding: '32px 24px',
                background: 'rgba(19, 17, 42, 0.5)',
                border: '1px solid rgba(124, 58, 237, 0.1)',
                borderRadius: '20px',
                cursor: 'default',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '96px',
              }}
              whileHover={{
                borderColor: 'rgba(124, 58, 237, 0.28)',
                background: 'rgba(19, 17, 42, 0.75)',
                y: -3,
              }}
            >
              {/* Top shimmer on hover */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.5), transparent)',
                }}
              />
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={56}
                sizes="(max-width: 768px) 40vw, 25vw"
                className="transition-opacity duration-500"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '48px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.45,
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.opacity = '0.45'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
          className="mt-12 pt-8 grid gap-6 text-center"
          style={{
            borderTop: '1px solid rgba(124, 58, 237, 0.1)',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          }}
        >
          {[
            { num: '500+', label: 'Placements across these companies' },
            { num: '20+', label: 'Years building these networks' },
            { num: '100%', label: 'Confidentiality guaranteed' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: 'var(--amber-400)',
                  marginBottom: '4px',
                }}
              >
                {stat.num}
              </div>
              <div style={{ fontSize: '13px', color: '#8a8499' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
