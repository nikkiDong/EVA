import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import styles from './SmartSolutions.module.css'

const boxes: {
  key: string
  num: string
  label: string
  tagline: string
  desc: string
  bullets: string[]
  icon: ReactNode
}[] = [
  {
    key: 'bizdev',
    num: '01',
    label: 'Business Development',
    tagline: 'Strategy & sustainable growth',
    desc: 'Partnering with organizations to close gaps and scale mission-aligned solutions — from Mastermind Groups and Think Tanks to Incubator and Accelerator Programs.',
    bullets: [
      'Program Development',
      'Training & Workshops',
      'Mastermind & Think Tanks',
      'Strategic planning for new ideas',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="16" width="5" height="8" rx="1" stroke="#4169E1" strokeWidth="1.5" />
        <rect x="11.5" y="10" width="5" height="14" rx="1" stroke="#4169E1" strokeWidth="1.5" />
        <rect x="18" y="4" width="5" height="20" rx="1" stroke="#4169E1" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: 'commercialization',
    num: '02',
    label: 'Commercialization',
    tagline: 'Market readiness & ICP validation',
    desc: 'Helping founders and subject-matter experts move from concept to viable, market-ready offerings with sharper positioning and validated demand.',
    bullets: [
      'Ideal Customer Profile validation',
      'Market readiness & positioning',
      'Pitch & funding preparation',
      'Commercialization strategy',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 14L15 17L24 8" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8h6v6" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="12" stroke="#4169E1" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    key: 'innovation',
    num: '03',
    label: 'Innovation',
    tagline: 'R&D & digital transformation',
    desc: 'Building the mindset, processes, and systems to stay ahead of the curve — turning new ideas into durable competitive advantages.',
    bullets: [
      'Innovation roadmap & strategy',
      'Research & development process',
      'Digital workflow adoption',
      'Competitive intelligence',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3v3M3 14h3M25 14h-3M6.5 6.5l2 2M21.5 6.5l-2 2" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="6" stroke="#4169E1" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2" fill="#4169E1" />
      </svg>
    ),
  },
]

export default function SmartSolutions() {
  const navigate = useNavigate()

  return (
    <div className={styles.servicesPage}>

      {/* ── Page header ── */}
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <span className={styles.headerEyebrow}>Consulting</span>
              <h1 className={styles.headerTitle}>
                High-touch consulting<br />
                <em>that delivers ROI</em>
              </h1>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.headerDesc}>
                High-touch consulting across sectors seeking stronger stakeholder alignment, organizational effectiveness, and scalable systems that drive viable ROI.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Book a Consultation →
              </button>
            </div>
          </div>
        </div>
        <div className={styles.headerAccentLine} />
      </div>

      {/* ── Three overview boxes ── */}
      <div className={styles.panelWrap}>
        <div className="container">
          <div className={styles.cardGrid}>
            {boxes.map((b, i) => (
              <div key={b.key} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>{b.icon}</div>
                  <span className={styles.cardNum}>{b.num}</span>
                </div>
                <h3>{b.label}</h3>
                <p className={styles.boxTagline}>{b.tagline}</p>
                <p>{b.desc}</p>
                <ul className={styles.boxBullets}>
                  {b.bullets.map((x) => (
                    <li key={x}>
                      <span className={styles.boxCheck}>
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7.5L6 10.5L11 4.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
                <button className={styles.cardLink} onClick={() => navigate('/contact')}>
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className={styles.bottomCta}>
        <div className="container">
          <div className={styles.bottomCtaInner}>
            <div className={styles.bottomCtaText}>
              <h2>Ready to build something lasting?</h2>
              <p>Let's find the right solution for your organization's next chapter.</p>
            </div>
            <div className={styles.bottomCtaBtns}>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Book a Consultation →
              </button>
              <button className="btn btn-dark-outline" onClick={() => navigate('/coaching')}>
                Explore Coaching
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
