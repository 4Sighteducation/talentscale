'use client'

import { motion } from 'framer-motion'
import { TalentScaleLogo } from '@/components/ui/TalentScaleLogo'

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease, delay },
  }),
}

const headline1 = 'Helping Disruptors Hire'.split(' ')
const headline2 = 'Incredible Talent'.split(' ')

/* ─── Twinkle stars: fixed positions, pulse in place ─── */
const twinkleStars = [
  { left: '4%',  top: '8%',  size: 2.5, dur: '3.1s', delay: '0s',    color: '#e9d5ff' },
  { left: '11%', top: '22%', size: 1.8, dur: '2.7s', delay: '0.6s',  color: 'white' },
  { left: '19%', top: '10%', size: 3,   dur: '3.8s', delay: '1.4s',  color: '#c4b5fd' },
  { left: '28%', top: '35%', size: 2,   dur: '2.5s', delay: '0.3s',  color: 'white' },
  { left: '38%', top: '18%', size: 2.5, dur: '4.2s', delay: '2.0s',  color: '#e9d5ff' },
  { left: '47%', top: '8%',  size: 1.5, dur: '3.0s', delay: '1.1s',  color: 'white' },
  { left: '55%', top: '28%', size: 3,   dur: '3.5s', delay: '0.8s',  color: '#c4b5fd' },
  { left: '66%', top: '15%', size: 2,   dur: '2.9s', delay: '1.8s',  color: 'white' },
  { left: '74%', top: '32%', size: 2.5, dur: '3.3s', delay: '0.4s',  color: '#e9d5ff' },
  { left: '82%', top: '12%', size: 1.8, dur: '4.0s', delay: '2.5s',  color: 'white' },
  { left: '90%', top: '25%', size: 3,   dur: '3.6s', delay: '1.0s',  color: '#c4b5fd' },
  { left: '95%', top: '42%', size: 2,   dur: '2.6s', delay: '0.2s',  color: 'white' },
  { left: '7%',  top: '55%', size: 2.5, dur: '3.9s', delay: '3.2s',  color: '#e9d5ff' },
  { left: '93%', top: '60%', size: 2,   dur: '3.4s', delay: '1.6s',  color: 'white' },
  { left: '50%', top: '42%', size: 1.5, dur: '3.7s', delay: '2.8s',  color: '#c4b5fd' },
]

/* ─── Drift particles: rise upward ─── */
const driftParticles = [
  { left: '8%',  top: '70%', size: 5, dur: '7s',  delay: '0s',   color: '#8b5cf6' },
  { left: '16%', top: '75%', size: 4, dur: '8.5s', delay: '1.2s', color: '#a78bfa' },
  { left: '25%', top: '68%', size: 6, dur: '6s',  delay: '2.5s', color: '#7c3aed' },
  { left: '35%', top: '80%', size: 3.5, dur: '9s', delay: '0.5s', color: '#c4b5fd' },
  { left: '45%', top: '72%', size: 5, dur: '7.5s', delay: '3.0s', color: '#8b5cf6' },
  { left: '58%', top: '65%', size: 4, dur: '8s',  delay: '1.8s', color: '#a78bfa' },
  { left: '68%', top: '78%', size: 5.5, dur: '7s', delay: '0.8s', color: '#7c3aed' },
  { left: '78%', top: '70%', size: 4, dur: '9.5s', delay: '2.2s', color: '#c4b5fd' },
  { left: '87%', top: '74%', size: 3.5, dur: '6.5s', delay: '4.0s', color: '#8b5cf6' },
  { left: '94%', top: '68%', size: 5, dur: '8s',  delay: '1.5s', color: '#a78bfa' },
]

/* ─── Glow orbs: large, slow pulse ─── */
const glowOrbs = [
  { left: '5%',  top: '40%', size: 10, dur: '5s',  delay: '0s',   color: 'rgba(124,58,237,0.7)' },
  { left: '88%', top: '30%', size: 8,  dur: '6.5s', delay: '1.5s', color: 'rgba(167,139,250,0.6)' },
  { left: '48%', top: '75%', size: 12, dur: '4.5s', delay: '2.5s', color: 'rgba(139,92,246,0.65)' },
  { left: '20%', top: '15%', size: 7,  dur: '7s',  delay: '0.8s', color: 'rgba(196,181,253,0.5)' },
  { left: '75%', top: '55%', size: 9,  dur: '5.5s', delay: '3.2s', color: 'rgba(124,58,237,0.6)' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ padding: 'clamp(100px, 14vw, 120px) clamp(20px, 5vw, 48px) 80px' }}
    >
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 30%, rgba(124, 58, 237, 0.14) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 80% 60%, rgba(139, 92, 246, 0.09) 0%, transparent 70%),
            radial-gradient(ellipse 80% 40% at 50% 80%, rgba(196, 181, 253, 0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)',
        }}
      />

      {/* ── Particle field ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Twinkle stars */}
        {twinkleStars.map((s, i) => (
          <div
            key={`tw-${i}`}
            className="absolute animate-twinkle"
            style={{
              left: s.left, top: s.top,
              width: `${s.size}px`, height: `${s.size}px`,
              borderRadius: '50%',
              background: s.color,
              boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
              ['--tw-dur' as string]: s.dur,
              ['--tw-delay' as string]: s.delay,
            }}
          />
        ))}

        {/* Drift particles */}
        {driftParticles.map((p, i) => (
          <div
            key={`dr-${i}`}
            className="absolute animate-drift"
            style={{
              left: p.left, top: p.top,
              width: `${p.size}px`, height: `${p.size}px`,
              borderRadius: '50%',
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              ['--dr-dur' as string]: p.dur,
              ['--dr-delay' as string]: p.delay,
            }}
          />
        ))}

        {/* Glow orbs */}
        {glowOrbs.map((o, i) => (
          <div
            key={`gl-${i}`}
            className="absolute animate-glow"
            style={{
              left: o.left, top: o.top,
              width: `${o.size}px`, height: `${o.size}px`,
              borderRadius: '50%',
              background: o.color,
              boxShadow: `0 0 ${o.size * 4}px ${o.size * 2}px ${o.color.replace('0.', '0.15')}`,
              ['--glow-dur' as string]: o.dur,
              ['--glow-delay' as string]: o.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="mb-10 flex justify-center"
          style={{ filter: 'drop-shadow(0 0 24px rgba(124, 58, 237, 0.35))' }}
        >
          <TalentScaleLogo size={88} />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-8"
          style={{
            padding: '8px 20px',
            background: 'rgba(124, 58, 237, 0.1)',
            border: '1px solid rgba(124, 58, 237, 0.22)',
            borderRadius: '100px',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#c4b5fd',
          }}
        >
          <span
            className="animate-dot-pulse"
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--amber-400)',
              display: 'inline-block',
              boxShadow: '0 0 8px var(--amber-400)',
            }}
          />
          Executive Recruitment
        </motion.div>

        {/* Headline */}
        <h1
          className="font-bold leading-[1.05] tracking-tight mb-7"
          style={{
            fontFamily: 'var(--font-jakarta)',
            fontSize: 'clamp(42px, 6.5vw, 82px)',
            letterSpacing: '-1.5px',
          }}
        >
          {/* Line 1 — word-by-word reveal */}
          <span className="block">
            {headline1.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease, delay: 0.55 + i * 0.09 }}
                style={{ display: 'inline-block', marginRight: '0.28em', color: '#f0ecff' }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          {/* Line 2 — gradient, staggered after line 1 */}
          <span className="block">
            {headline2.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.7,
                  ease,
                  delay: 0.55 + headline1.length * 0.09 + 0.1 + i * 0.09,
                }}
                style={{
                  display: 'inline-block',
                  marginRight: '0.28em',
                  background: 'linear-gradient(135deg, #a78bfa, #c4b5fd, #ede9fe)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
          style={{
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            color: '#c0bcd6',
            maxWidth: '580px',
            margin: '0 auto 44px',
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          20+ years of precision headhunting across Marketing, Product, Sales &amp; Technology.
          I find the leaders who transform your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="flex gap-4 justify-center items-center flex-wrap"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              padding: '16px 36px',
              background: '#7c3aed',
              color: 'white',
              borderRadius: '100px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 12px 40px rgba(124, 58, 237, 0.45)'
              el.style.background = '#8b5cf6'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
              el.style.background = '#7c3aed'
            }}
          >
            Start a Conversation
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              padding: '16px 36px',
              background: 'transparent',
              color: '#c0bcd6',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '100px',
              fontSize: '15px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = '#8b5cf6'
              el.style.color = '#f0ecff'
              el.style.background = 'rgba(124, 58, 237, 0.06)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(124, 58, 237, 0.3)'
              el.style.color = '#c0bcd6'
              el.style.background = 'transparent'
            }}
          >
            Meet Jeff
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b6488' }}>
          Scroll
        </span>
        <div
          className="animate-scroll-pulse"
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, #7c3aed, transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}
