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

const particles = [
  { left: '12%', top: '65%', delay: '0s', color: '#8b5cf6' },
  { left: '22%', top: '72%', delay: '1.2s', color: '#a78bfa' },
  { left: '50%', top: '60%', delay: '2.5s', color: '#8b5cf6' },
  { left: '72%', top: '68%', delay: '0.8s', color: '#c4b5fd' },
  { left: '83%', top: '74%', delay: '3.2s', color: '#8b5cf6' },
  { left: '38%', top: '78%', delay: '1.8s', color: '#a78bfa' },
  { left: '62%', top: '50%', delay: '4.0s', color: '#c4b5fd' },
  { left: '30%', top: '55%', delay: '2.0s', color: '#8b5cf6' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ padding: '120px 48px 80px' }}
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

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute animate-float-up"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              background: p.color,
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
              background: '#a78bfa',
              display: 'inline-block',
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
            color: '#a8a0c8',
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
              color: '#a8a0c8',
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
              el.style.color = '#a8a0c8'
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
