'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const ease = [0.16, 1, 0.3, 1] as const

interface StatProps {
  target: string
  suffix: string
  label: string
  delay: number
}

function AnimatedStat({ target, suffix, label, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)
  const num = parseInt(target)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const startTime = Date.now() + delay * 1000
    let frame: number

    const tick = () => {
      const now = Date.now()
      if (now < startTime) {
        frame = requestAnimationFrame(tick)
        return
      }
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * num))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, num, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay }}
    >
      <div
        style={{
          fontFamily: 'var(--font-jakarta)',
          fontSize: '38px',
          fontWeight: 700,
          color: 'var(--amber-400)',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontSize: '13px',
          color: '#6b6488',
          lineHeight: 1.4,
        }}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative"
      style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 48px)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(124, 58, 237, 0.055) 0%, transparent 70%)',
        }}
      />

      <div
        className="relative max-w-screen-xl mx-auto grid gap-20 items-center"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.96 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, ease }}
          className="relative"
        >
          {/* Offset border decoration */}
          <div
            className="absolute"
            style={{
              top: '-12px',
              left: '-12px',
              right: '12px',
              bottom: '12px',
              border: '1.5px solid rgba(124, 58, 237, 0.2)',
              borderRadius: '24px',
            }}
          />
          {/* Corner glow */}
          <div
            className="absolute"
            style={{
              bottom: '-24px',
              right: '-24px',
              width: '140px',
              height: '140px',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.14), transparent 70%)',
              borderRadius: '50%',
            }}
          />
          <Image
            src="/jeffh.webp"
            alt="Jeff Hardie — Founder, Talent Scale"
            width={460}
            height={575}
            className="relative z-10 w-full"
            style={{
              maxWidth: '460px',
              aspectRatio: '4/5',
              objectFit: 'cover',
              borderRadius: '24px',
            }}
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-jakarta)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--amber-400)',
              marginBottom: '16px',
            }}
          >
            Jeff Hardie
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            style={{
              fontFamily: 'var(--font-jakarta)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              marginBottom: '28px',
              color: '#f0ecff',
            }}
          >
            I love people. I love solving problems for&nbsp;companies.
          </motion.h2>

          {[
            `With over 20 years of recruitment experience across the UK and Europe, I've built a network that spans the most ambitious start-ups and scale-ups in Health, Fintech, Media, Technology and SaaS — placing senior leaders who genuinely move the needle.`,
            `I work closely with founders and executive teams on role positioning, organisational design and talent strategy. I have deep relationships across the VC and Private Equity landscape, and with the founders of some of the UK's most successful tech companies.`,
            `My reputation is the foundation of everything I do. Every client and every candidate I've worked with can speak to how I operate — and that track record is something I'm genuinely proud of.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.26 + i * 0.08 }}
              style={{
                fontSize: '16px',
                color: '#c0bcd6',
                lineHeight: 1.8,
                marginBottom: '18px',
                fontWeight: 300,
              }}
            >
              {text}
            </motion.p>
          ))}

          {/* Stats */}
          <div
            className="grid gap-6 mt-10 pt-10"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid rgba(124, 58, 237, 0.12)',
            }}
          >
            <AnimatedStat target="20" suffix="+" label="Years of<br/>Experience" delay={0.5} />
            <AnimatedStat target="500" suffix="+" label="Placements<br/>Made" delay={0.62} />
            <AnimatedStat target="100" suffix="+" label="Companies<br/>Scaled" delay={0.74} />
          </div>
        </div>
      </div>
    </section>
  )
}
