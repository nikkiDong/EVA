import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SmartSolutions.module.css'

const troyImg = `${import.meta.env.BASE_URL}troy-consulting-hero.png`

type Partner = { name: string; href?: string; domain?: string; logo?: string }

const LOGO_BASE = `${import.meta.env.BASE_URL}partner-logos`

/**
 * Trusted-by partner list — Troy supplied 2026-04-25.
 * Icons resolved in priority order:
 *   1. Local file in /public/partner-logos/ (set via `logo`)
 *   2. DuckDuckGo favicon service (set via `domain`)
 *   3. Initials badge fallback
 */
const PARTNERS: Partner[] = [
  { name: 'U.S. Small Business Administration', href: 'https://www.sba.gov', domain: 'sba.gov' },
  { name: 'SBDC of Delaware', href: 'https://www.delawaresbdc.org', logo: `${LOGO_BASE}/sbdc-delaware.png` },
  { name: 'Zip Code Wilmington', href: 'https://www.zipcodewilmington.com', domain: 'zipcodewilmington.com' },
  { name: 'Delaware Nutrition Association', logo: `${LOGO_BASE}/delaware-nutrition-association.png` },
  { name: 'Colonial School District', href: 'https://www.colonialschooldistrict.org', logo: `${LOGO_BASE}/colonial-school-district.png` },
  { name: 'New Castle County Chamber of Commerce', href: 'https://www.ncccc.com', logo: `${LOGO_BASE}/ncccc.png` },
  { name: 'NSF I-Corps · Princeton University', domain: 'princeton.edu' },
  { name: 'NSF I-Corps · MIT', domain: 'mit.edu' },
  { name: 'Browning the Green Space', href: 'https://browningthegreenspace.org', logo: `${LOGO_BASE}/browning-the-green-space.png` },
  { name: 'Council of Language Access Coordinators', logo: `${LOGO_BASE}/ncsc.jpg` },
  { name: 'U.S. Embassy in Uganda', href: 'https://ug.usembassy.gov', domain: 'state.gov' },
  { name: 'Delaware State University', href: 'https://www.desu.edu', domain: 'desu.edu' },
  { name: 'University of Delaware · InDE Fellowship', href: 'https://www.udel.edu', domain: 'udel.edu' },
  { name: 'Wilmington University', href: 'https://www.wilmu.edu', domain: 'wilmu.edu' },
  { name: 'Goldey-Beacom College', href: 'https://www.gbc.edu', domain: 'gbc.edu' },
  { name: 'NHS Healthcare United States', logo: `${LOGO_BASE}/nhs-healthcare-us.png` },
]

function initials(name: string): string {
  const cleaned = name.replace(/[·.]/g, ' ').replace(/\s+/g, ' ').trim()
  const words = cleaned.split(' ').filter((w) => w.length > 1 && !/^(of|the|and|in|at|de|for)$/i.test(w))
  return words.slice(0, 3).map((w) => w[0].toUpperCase()).join('')
}

function PartnerMark({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(false)
  const src = !failed
    ? partner.logo ?? (partner.domain ? `https://icons.duckduckgo.com/ip3/${partner.domain}.ico` : undefined)
    : undefined
  return (
    <span className={styles.partnerStack}>
      {src ? (
        <img
          src={src}
          alt={partner.name}
          className={styles.partnerLogo}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className={styles.partnerInitials} aria-hidden="true">
          {initials(partner.name)}
        </span>
      )}
      <span className={styles.partnerName}>{partner.name}</span>
    </span>
  )
}

/* ────────────────────────────────────────────────────────────────────
   HOW WE DRIVE IMPACT — 3 service columns
   Per Troy's 2026-04-25 reference: no icons, no card subtitles —
   each column has its title + 3 outcome-style bullets separated by
   thin horizontal dividers.
   ──────────────────────────────────────────────────────────────────── */
const services = [
  {
    title: 'Business Development',
    bullets: [
      'Structure development that supports sustainable growth.',
      'Strategic market alignment that sharpens positioning and focus.',
      'Revenue pathways that create predictable, scalable results.',
    ],
  },
  {
    title: 'Organizational Effectiveness',
    bullets: [
      'Stakeholder alignment that drives shared purpose and progress.',
      'Organizational structure that clarifies roles, responsibilities, and accountability.',
      'Decision support that improves prioritization and execution.',
    ],
  },
  {
    title: 'Innovation & Commercialization',
    bullets: [
      'Customer discovery that uncovers real needs and opportunities.',
      'Market validation and business modeling that de-risk your ideas.',
      'Go-to-market readiness that accelerates impact and adoption.',
    ],
  },
]

/* ────────────────────────────────────────────────────────────────────
   OUR PARTNERSHIP APPROACH — 4 stages
   ──────────────────────────────────────────────────────────────────── */
const approach = [
  {
    name: 'Listen & Understand',
    desc: 'We start by listening—getting clarity on your goals, challenges, context, and what success looks like.',
  },
  {
    name: 'Assess & Align',
    desc: 'We assess your environment, align stakeholders, and identify high-impact priorities that move the needle.',
  },
  {
    name: 'Design & Implement',
    desc: 'We design practical solutions and build the structure, systems, and supports needed to execute with confidence.',
  },
  {
    name: 'Measure & Evolve',
    desc: 'We track results, learn together, and refine strategies so your business continues to grow and adapt.',
  },
]

export default function SmartSolutions() {
  const navigate = useNavigate()

  return (
    <div className={styles.servicesPage}>

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        {/* Photo lives outside the container so its right edge bleeds to the
            viewport edge; left edge fades into the text area. */}
        <div className={styles.heroRight}>
          <img
            src={troyImg}
            alt="Troy Farmer — EVA Smart Systems Consulting Lead"
            className={styles.heroImg}
          />
        </div>

        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroEyebrow}>
                Consulting · Strategy · Structure · Growth
              </div>
              <h1 className={styles.heroTitle}>
                Consulting that strengthens structure, effectiveness, and{' '}
                <span className={styles.heroAccent}>market readiness.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                We partner with organizations, founders, and service-based businesses
                to strengthen growth, operations, market readiness, and sustainability—
                so your business is built to perform and positioned to scale.
              </p>
              <div className={styles.heroCtas}>
                <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>
                  Book a Consultation
                </button>
                <button className={styles.btnOutline} onClick={() => navigate('/coaching')}>
                  Explore Coaching
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUSTED BY — Partner Logo Marquee ══
          Moved directly under hero per Troy's 2026-04-30 feedback:
          logo banner sits right below the page header, matching Home layout. */}
      <section className={styles.trustedBy}>
        <div className="container">
          <p className={styles.trustedLabel}>
            Trusted by leaders, institutions, and partners across the U.S.
          </p>
        </div>
        <div className={styles.marquee} aria-label="Partner organizations">
          <div className={styles.marqueeTrack}>
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span key={`${p.name}-${i}`} className={styles.partnerItem}>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.name}>
                    <PartnerMark partner={p} />
                  </a>
                ) : (
                  <PartnerMark partner={p} />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW WE DRIVE IMPACT — 3 service cards ══ */}
      <section className={styles.impactSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrowCenter}>How We Drive Impact</span>
            <h2 className={styles.sectionTitle}>
              Clarity in strategy. Strength in structure. Results that last.
            </h2>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <ul className={styles.serviceBullets}>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR PARTNERSHIP APPROACH — 4 column band ══ */}
      <section className={styles.approachSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrowCenter}>Our Partnership Approach</span>
            <h2 className={styles.sectionTitle}>
              A focused process. A trusted partnership.
            </h2>
          </div>

          <div className={styles.approachGrid}>
            {approach.map((a) => (
              <div key={a.name} className={styles.approachCol}>
                <h3 className={styles.approachName}>{a.name}</h3>
                <p className={styles.approachDesc}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA — royal blue band ══ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Let&apos;s Build What&apos;s Next—Together.</h2>
            <p className={styles.ctaDesc}>
              Ready to strengthen your business and create lasting impact?
            </p>
            <div className={styles.ctaBtns}>
              <button className={styles.btnCtaWhite} onClick={() => navigate('/contact')}>
                Book a Consultation
              </button>
              <button className={styles.btnCtaWhiteOutline} onClick={() => navigate('/coaching')}>
                Explore Coaching
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
