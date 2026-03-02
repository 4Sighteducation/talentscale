'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const ease = [0.16, 1, 0.3, 1] as const

const pros = [
  {
    title: '20+ Years of Real Access',
    desc: 'A network built over two decades of senior placements — giving access to candidates and conversations that most recruiters simply can\'t reach.',
  },
  {
    title: 'Deep Functional Expertise',
    desc: 'Specialist knowledge across Marketing, Product, Sales and Technology — shaped by thousands of conversations with senior leaders at every growth stage.',
  },
  {
    title: 'Direct & Straightforward',
    desc: "I listen carefully and I'm honest about what I can and can't do. No spin, no overselling — just clear thinking and consistent follow-through.",
  },
  {
    title: 'A Track Record You Can Verify',
    desc: '500+ senior placements over two decades. My clients come back and refer me to others. That\'s the only measure I care about.',
  },
]

const cons = [
  {
    title: 'A Volume Recruiter',
    desc: 'I take on mandates I can genuinely deliver on — not everything that comes my way. Volume means nothing without results.',
  },
  {
    title: 'Arrogant or Full of Ego',
    desc: 'No corporate bluster. Just honest, direct conversations about what matters to your business.',
  },
  {
    title: 'An Unknown Quantity',
    desc: 'Every placement is traceable. My clients can speak directly to how I work — and I actively welcome that scrutiny.',
  },
]

export default function Differentiator() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 48px)',
        background: '#0c0b18',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 80% 40%, rgba(124, 58, 237, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-screen-xl mx-auto">
        <SectionHeader
          label="The Difference"
          title={<>What I am —<br />and what I&apos;m not</>}
          inView={inView}
        />

        {/* Two-column grid */}
        <div
          className="grid gap-16"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* What You Get */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--amber-400)',
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '1.5px solid var(--amber-500)',
              }}
            >
              What You Get
            </motion.div>
            {pros.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: 0.22 + i * 0.08 }}
                className="flex gap-4"
                style={{ marginBottom: '28px' }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(251, 191, 36, 0.12)',
                    color: 'var(--amber-400)',
                    fontSize: '14px',
                    marginTop: '2px',
                  }}
                >
                  ✓
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#f0ecff',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#c0bcd6',
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What I'm Not */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#9994aa',
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '1.5px solid rgba(255,255,255,0.1)',
              }}
            >
              What I&apos;m Not
            </motion.div>
            {cons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: 0.28 + i * 0.08 }}
                className="flex gap-4"
                style={{ marginBottom: '28px' }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    color: '#6b6488',
                    fontSize: '14px',
                    marginTop: '2px',
                  }}
                >
                  ✗
                </div>
                <div>
                  <div
                    style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#9994aa',
                    marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#c0bcd6',
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
