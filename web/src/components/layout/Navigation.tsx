'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TalentScaleLogo } from '@/components/ui/TalentScaleLogo'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#roles', label: 'Roles' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          padding: scrolled ? '14px clamp(20px,4vw,48px)' : '20px clamp(20px,4vw,48px)',
          background: scrolled ? 'rgba(6, 5, 14, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124, 58, 237, 0.1)' : '1px solid transparent',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex items-center gap-3 no-underline"
          style={{ textDecoration: 'none' }}
        >
          <TalentScaleLogo size={34} />
          <span
            className="font-bold text-[17px] tracking-tight"
            style={{ color: '#f0ecff', fontFamily: 'var(--font-jakarta)' }}
          >
            Talent Scale
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative group"
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  color: '#a8a0c8',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f0ecff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a8a0c8')}
              >
                {link.label}
                <span
                  className="absolute left-0 w-0 group-hover:w-full transition-all duration-300"
                  style={{
                    bottom: '-4px',
                    height: '1.5px',
                    background: '#8b5cf6',
                    display: 'block',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:inline-flex items-center"
          style={{
            padding: '10px 24px',
            background: '#7c3aed',
            color: 'white',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.3px',
            borderRadius: '100px',
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = '#8b5cf6'
            el.style.transform = 'translateY(-1px)'
            el.style.boxShadow = '0 8px 32px rgba(124, 58, 237, 0.35)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = '#7c3aed'
            el.style.transform = 'translateY(0)'
            el.style.boxShadow = 'none'
          }}
        >
          Let&apos;s Talk
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f0ecff' }}
        >
          <span
            className="block rounded transition-transform duration-300"
            style={{
              width: '24px',
              height: '2px',
              background: '#f0ecff',
              transformOrigin: 'center',
              transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            className="block rounded transition-all duration-300"
            style={{
              width: '24px',
              height: '2px',
              background: '#f0ecff',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block rounded transition-transform duration-300"
            style={{
              width: '24px',
              height: '2px',
              background: '#f0ecff',
              transformOrigin: 'center',
              transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-40 left-0 right-0 flex flex-col gap-2 md:hidden"
            style={{
              top: '60px',
              background: '#0c0b18',
              borderBottom: '1px solid rgba(124, 58, 237, 0.12)',
              padding: '24px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: '#a8a0c8',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(124, 58, 237, 0.06)',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              style={{
                marginTop: '12px',
                textAlign: 'center',
                padding: '12px 24px',
                background: '#7c3aed',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
