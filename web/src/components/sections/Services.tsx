'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const ease = [0.16, 1, 0.3, 1] as const

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      </svg>
    ),
    title: 'Executive Search',
    desc: 'Targeted, confidential headhunting for C-suite and senior leadership positions. I find the people who aren\'t actively looking but are the perfect fit.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Team Scaling',
    desc: 'End-to-end support for founders building out leadership teams. From org design to candidate mapping to final placement.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: 'Market Insight',
    desc: 'Strategic advisory on role positioning, compensation benchmarking, and organisational design. I\'ve got my finger on the pulse.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Quality, Not Volume',
    desc: "I'm not a mass volume recruiter. Clients engage me for targeted, quality hiring plans. Rock solid delivery is at the heart of what I do.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Proven Track Record',
    desc: 'An outstanding reputation built on delivery, not promises. My record speaks for itself across hundreds of successful placements.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Investor Connected',
    desc: 'Deep relationships across VC, Private Equity, and the founder ecosystem. I understand the unique demands of investor-backed growth.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="expertise"
      ref={ref}
      style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 48px)', maxWidth: '1280px', margin: '0 auto' }}
    >
      <SectionHeader
        label="What I Do"
        title={<>Strategic recruitment<br />for ambitious companies</>}
        description="I specialise in hiring key leadership roles, helping founders and their teams on critical strategic hires that drive real business impact."
        inView={inView}
      />

      {/* Grid */}
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 40, scale: 0.94, filter: 'blur(4px)' }}
            animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.75, ease, delay: 0.15 + i * 0.09 }}
            style={{
              background: 'rgba(19, 17, 42, 0.55)',
              border: '1px solid rgba(124, 58, 237, 0.1)',
              borderRadius: '24px',
              padding: '40px 32px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            whileHover={{
              y: -4,
              borderColor: 'rgba(124, 58, 237, 0.26)',
              background: 'rgba(19, 17, 42, 0.8)',
            }}
          >
            {/* Top accent line on hover */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
              }}
              className="card-accent"
            />

            {/* Icon */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(124, 58, 237, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: '#a78bfa',
              }}
            >
              {svc.icon}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontSize: '20px',
                fontWeight: 700,
                color: '#f0ecff',
                marginBottom: '12px',
                letterSpacing: '-0.3px',
              }}
            >
              {svc.title}
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#c0bcd6',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {svc.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
