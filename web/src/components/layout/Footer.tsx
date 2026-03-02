import { TalentScaleLogo } from '@/components/ui/TalentScaleLogo'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(124, 58, 237, 0.08)',
        padding: '36px 48px',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      <div className="flex items-center gap-3">
        <TalentScaleLogo size={26} />
        <span style={{ fontSize: '13px', color: '#6b6488' }}>
          © {new Date().getFullYear()} Talent Scale. All rights reserved.
        </span>
      </div>
      <span style={{ fontSize: '12px', color: '#6b6488', opacity: 0.5 }}>
        Reg: 12217924
      </span>
    </footer>
  )
}
