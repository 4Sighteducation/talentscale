'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ease = [0.16, 1, 0.3, 1] as const

const schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(1, 'Required'),
  message: z.string().min(10, 'Please tell me a bit more (10+ characters)'),
})
type FormData = z.infer<typeof schema>

const inputStyle = {
  background: 'rgba(19, 17, 42, 0.7)',
  border: '1px solid rgba(124, 58, 237, 0.14)',
  borderRadius: '10px',
  padding: '13px 18px',
  color: '#f0ecff',
  fontSize: '15px',
  width: '100%',
  outline: 'none',
  fontFamily: 'var(--font-jakarta)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 48px)', position: 'relative' }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 30% 70%, rgba(124, 58, 237, 0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 70% 30%, rgba(139, 92, 246, 0.04) 0%, transparent 70%)
          `,
        }}
      />

      <div
        className="relative max-w-screen-xl mx-auto grid gap-20"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', zIndex: 1 }}
      >
        {/* Left: info */}
        <div>
          <SectionHeader
            label="Get In Touch"
            title={<>Let&apos;s work<br />together</>}
            description="If I can help you or your company find exceptional talent, drop me a line and let's talk."
            inView={inView}
          />

          {/* Contact info items */}
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: 'Address',
              value: '4th Floor, Holden House\n57 Rathbone Place, London W1T 1JU',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              ),
              label: 'Phone',
              value: '+44 (0) 845 888 8144\n+44 (0) 7801 149 327',
              href: 'tel:+447801149327',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              label: 'Email',
              value: 'jeff@talentscale.io',
              href: 'mailto:jeff@talentscale.io',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.24 + i * 0.1 }}
              className="flex gap-4 items-start"
              style={{ marginBottom: '28px' }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(124, 58, 237, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#6b6488', marginBottom: '4px' }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{ color: '#f0ecff', textDecoration: 'none', fontSize: '15px', lineHeight: 1.6, transition: 'color 0.3s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#a78bfa')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#f0ecff')}
                  >
                    {item.value.split('\n').map((line, j) => (
                      <span key={j} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </a>
                ) : (
                  <div style={{ color: '#f0ecff', fontSize: '15px', lineHeight: 1.6 }}>
                    {item.value.split('\n').map((line, j) => (
                      <span key={j} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease }}
              style={{
                padding: '60px 40px',
                background: 'rgba(19, 17, 42, 0.6)',
                border: '1px solid rgba(124, 58, 237, 0.15)',
                borderRadius: '24px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
              <h3 style={{ fontFamily: 'var(--font-jakarta)', fontSize: '24px', fontWeight: 700, color: '#f0ecff', marginBottom: '12px' }}>
                Message sent!
              </h3>
              <p style={{ color: '#c0bcd6', lineHeight: 1.7 }}>
                Thanks for reaching out. Jeff will be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '40px',
                background: 'rgba(12, 11, 24, 0.6)',
                border: '1px solid rgba(124, 58, 237, 0.1)',
                borderRadius: '24px',
              }}
            >
              {/* Name row */}
              <div className="grid grid-cols-2 gap-5">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: '#6b6488' }}>
                    First Name
                  </label>
                  <input
                    {...register('firstName')}
                    placeholder="Your first name"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#8b5cf6'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.14)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                  {errors.firstName && <span style={{ color: '#f87171', fontSize: '12px' }}>{errors.firstName.message}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: '#6b6488' }}>
                    Last Name
                  </label>
                  <input
                    {...register('lastName')}
                    placeholder="Your last name"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#8b5cf6'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.14)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                  {errors.lastName && <span style={{ color: '#f87171', fontSize: '12px' }}>{errors.lastName.message}</span>}
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: '#6b6488' }}>
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#8b5cf6'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.14)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
                {errors.email && <span style={{ color: '#f87171', fontSize: '12px' }}>{errors.email.message}</span>}
              </div>

              {/* Company */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: '#6b6488' }}>
                  Company
                </label>
                <input
                  {...register('company')}
                  placeholder="Your company name"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#8b5cf6'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.14)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
                {errors.company && <span style={{ color: '#f87171', fontSize: '12px' }}>{errors.company.message}</span>}
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: '#6b6488' }}>
                  Message
                </label>
                <textarea
                  {...register('message')}
                  placeholder="Tell me about the role you're looking to fill..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#8b5cf6'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.14)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
                {errors.message && <span style={{ color: '#f87171', fontSize: '12px' }}>{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  alignSelf: 'flex-start',
                  padding: '14px 32px',
                  background: isSubmitting ? '#5b21b6' : '#7c3aed',
                  color: 'white',
                  border: 'none',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  fontFamily: 'var(--font-jakarta)',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    const el = e.currentTarget
                    el.style.background = '#8b5cf6'
                    el.style.transform = 'translateY(-1px)'
                    el.style.boxShadow = '0 8px 28px rgba(124, 58, 237, 0.35)'
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = '#7c3aed'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
