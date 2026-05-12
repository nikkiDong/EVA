import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Coaching.module.css'

// Per Troy 2026-04-25:
//   COACHING hero MUST use the burgundy-blazer photo (her explicit pick).
//   File `troy-business-times.jpg` is that burgundy/wine portrait.
const troyImg = `${import.meta.env.BASE_URL}troy-sideways-building.jpg`

/* ────────────────────────────────────────────────────────────────────
   FIVE STAGES — horizontal pathway (rebuilt 2026-04-25 to match the
   user's reference Coaching mockup). Numbers (01–05) are restored as
   elegant column-header glyphs (light teal, Playfair Display) — visually
   different from the circular badges Troy originally objected to.
   ──────────────────────────────────────────────────────────────────── */
type Stage = {
  name: string
  desc: string
  smartLabel: string
  smart: string
}

const stages: Stage[] = [
  {
    name: 'Envision',
    desc: "Gain clarity on your vision, purpose, and the impact you're here to make.",
    smartLabel: 'SMART ACTION:',
    smart: 'Define your vision and core values.',
  },
  {
    name: 'Establish',
    desc: 'Build a strong foundation with aligned systems, offerings, and positioning.',
    smartLabel: 'SMART ACTION:',
    smart: 'Map your systems and ideal client.',
  },
  {
    name: 'Elevate',
    desc: 'Refine your strategy, strengthen your leadership, and create scalable structures.',
    smartLabel: 'SMART ACTION:',
    smart: 'Optimize your offers and operations.',
  },
  {
    name: 'Expand',
    desc: 'Increase visibility, deepen client impact, and grow revenue with intention.',
    smartLabel: 'SMART ACTION:',
    smart: 'Build strategic partnerships and expand reach.',
  },
  {
    name: 'Evolve',
    desc: 'Sustain growth, lead innovation, and create lasting legacy.',
    smartLabel: 'SMART ACTION:',
    smart: 'Document, delegate, and design freedom.',
  },
]

/* ────────────────────────────────────────────────────────────────────
   COACHING OFFERINGS — three service cards
   ──────────────────────────────────────────────────────────────────── */
const offerings = [
  {
    name: '1:1 Coaching',
    desc: "Personalized, high-impact coaching for consultants and founders ready to break through what's next.",
    bullets: [
      'Deep-dive strategy and clarity',
      'Accountability and action planning',
      'Systems and leadership support',
      'Measurable results',
    ],
  },
  {
    name: 'Group Coaching',
    desc: 'Collaborative coaching in a small group setting to grow your business and leadership—together.',
    bullets: [
      'Peer insights and shared learning',
      'Real-time feedback and support',
      'Action-focused sessions',
      'Stronger together',
    ],
  },
  {
    name: 'EVOLVE Retreats',
    desc: 'Transformative retreat experiences that combine strategy, reflection, and focused growth.',
    bullets: [
      'Immersive strategy and planning',
      'Clarity, renewal, and breakthrough',
      'Community and connection',
      'Sustainable momentum',
    ],
  },
]

/* ────────────────────────────────────────────────────────────────────
   WHY EVA COACHING — 4 reasons (dark navy band)
   ──────────────────────────────────────────────────────────────────── */
const whyReasons = [
  {
    title: 'Systematize your business',
    desc: 'Build operations that create freedom and scalability.',
  },
  {
    title: 'Elevate your leadership',
    desc: 'Lead with confidence, vision, and impact.',
  },
  {
    title: 'Make smarter decisions',
    desc: 'Gain clarity to move forward with certainty.',
  },
  {
    title: 'Achieve measurable growth',
    desc: 'Create consistent results that align with your vision.',
  },
]

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

export default function Coaching() {
  const navigate = useNavigate()
  const pathwayRef = useReveal(0.08)
  const offeringsRef = useReveal(0.08)
  const whyRef = useReveal(0.12)
  const ctaRef = useReveal()

  return (
    <div className={styles.page}>

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        {/* Photo lives outside the container so its right edge bleeds to the
            viewport edge; left edge fades into the text area. */}
        <div className={styles.heroRight}>
          <img
            src={troyImg}
            alt="Troy Farmer — EVA Smart Systems Founder & Coach"
            className={styles.heroImg}
          />
        </div>

        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroEyebrow}>
                Coaching that meets you where you are—<br />
                and takes you where you're going.
              </div>
              <h1 className={styles.heroTitle}>
                Coaching that sharpens decisions, systems, and{' '}
                <span className={styles.heroAccent}>next-level growth.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Personalized coaching for emerging and established consultants, founders,
                and service-based professionals who are ready to lead with clarity, build
                stronger systems, and grow with confidence.
              </p>
              <div className={styles.heroCtas}>
                <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>
                  Book a Coaching Call
                </button>
                <button className={styles.btnOutline} onClick={() => navigate('/events')}>
                  Join the EVOLVE Retreat Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE EVOLVE PATHWAY — 5-column horizontal ══ */}
      <section className={styles.pathwaySection}>
        <div className="container">
          <div ref={pathwayRef} className={`${styles.pathwayInner} reveal`}>
            <div className={styles.pathwayHeader}>
              <span className={styles.eyebrowCenter}>The EVOLVE Pathway</span>
              <h2 className={styles.sectionTitle}>Five Stages. One Transformation.</h2>
              <p className={styles.sectionSub}>
                A proven pathway to build the business and life you envision.
              </p>
            </div>

            <div className={styles.pathwayArrows}>
              {stages.map((s) => (
                <div key={s.name} className={styles.pathwayArrow}>
                  {s.name}
                </div>
              ))}
            </div>

            <div className={styles.pathwayGrid}>
              {stages.map((s) => (
                <div key={s.name} className={styles.pathwayCol}>
                  <p className={styles.pathwayDesc}>{s.desc}</p>
                  <div className={styles.pathwaySmartLabel}>{s.smartLabel}</div>
                  <p className={styles.pathwaySmart}>{s.smart}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ COACHING OFFERINGS — 3 cards ══ */}
      <section className={styles.offeringsSection}>
        <div className="container">
          <div ref={offeringsRef} className={`${styles.offeringsInner} reveal`}>
            <div className={styles.offeringsHeader}>
              <span className={styles.eyebrowCenter}>Coaching Offerings</span>
              <h2 className={styles.sectionTitle}>Coaching designed for your goals and growth.</h2>
            </div>

            <div className={styles.offeringsGrid}>
              {offerings.map((o) => (
                <div key={o.name} className={styles.offeringCard}>
                  <h3 className={styles.offeringName}>{o.name}</h3>
                  <p className={styles.offeringDesc}>{o.desc}</p>
                  <ul className={styles.offeringBullets}>
                    {o.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <button
                    className={styles.btnLearnMore}
                    onClick={() => navigate('/contact')}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY EVA COACHING — dark navy band ══ */}
      <section className={styles.whySection}>
        <div className="container">
          <div ref={whyRef} className={`${styles.whyInner} reveal`}>
            <div className={styles.whyHeader}>
              <span className={styles.eyebrowOnDark}>Why EVA Coaching</span>
              <h2 className={styles.whyTitle}>Clarity. Strategy. Accountability. Results.</h2>
            </div>
            <div className={styles.whyGrid}>
              {whyReasons.map((r) => (
                <div key={r.title} className={styles.whyCol}>
                  <div className={styles.whyColTitle}>{r.title}</div>
                  <p className={styles.whyColDesc}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA — royal blue band ══ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div ref={ctaRef} className={`${styles.ctaInner} reveal`}>
            <h2 className={styles.ctaTitle}>
              Your next level is waiting.<br />
              Let's build what's next—together.
            </h2>
            <div className={styles.ctaBtns}>
              <button className={styles.btnCtaWhite} onClick={() => navigate('/contact')}>
                Book a Coaching Call
              </button>
              <button className={styles.btnCtaWhiteOutline} onClick={() => navigate('/events')}>
                Join the EVOLVE Retreat Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
