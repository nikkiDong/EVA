import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Coaching.module.css'

/* ─── Data ────────────────────────────────────────────────────── */
const services = [
  {
    num: '01',
    title: 'Executive Coaching',
    desc: 'One-on-one coaching designed for C-suite leaders and emerging executives navigating growth, transitions, and high-stakes decisions. We build clarity, strategic confidence, and presence.',
    tags: ['C-Suite', 'Leadership', 'Decision-Making'],
    cta: 'Book a Session',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
  },
  {
    num: '02',
    title: 'Workforce Development',
    desc: "Develop your team's capacity through targeted coaching programs that build leadership skills, communication, and performance at every level of your organization.",
    tags: ['Team Growth', 'Soft Skills', 'Culture'],
    cta: 'Explore Programs',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    num: '03',
    title: 'Transition Coaching',
    desc: 'Whether pivoting your business model or stepping into a new role, our transition coaching helps you move forward with clarity, confidence, and a concrete action plan.',
    tags: ['Career Transitions', 'Business Pivots', 'Clarity'],
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
]

const moveLetters = [
  { letter: 'M', word: 'Mindset', desc: 'Shift limiting beliefs and cultivate a growth-oriented leadership perspective.' },
  { letter: 'O', word: 'Operations', desc: 'Align your systems, workflows, and team structures for peak performance.' },
  { letter: 'V', word: 'Vision', desc: 'Define a compelling future and the strategic path to get there.' },
  { letter: 'E', word: 'Execution', desc: 'Turn vision into action with accountability frameworks that stick.' },
]

/* ─── Reveal hook ─────────────────────────────────────────────── */
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
  const introRef = useReveal()
  const servicesRef = useReveal(0.05)
  const labRef = useReveal()
  const ctaRef = useReveal()

  return (
    <div className={styles.page}>

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroNoise} />

        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroDot} />
                Coaching Services
              </div>
              <h1 className={styles.heroTitle}>
                Unlock Your<br />
                <span className={styles.heroGoldText}>Leadership</span><br />
                Potential
              </h1>
              <p className={styles.heroSubtitle}>
                Transformative coaching for executives, teams, and organizations ready to lead with clarity, purpose, and lasting impact.
              </p>
              <div className={styles.heroCtas}>
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                  Book a Discovery Call →
                </button>
                <button className={styles.heroSecondaryBtn} onClick={() => navigate('/events')}>
                  <span>View Programs</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroImgWrap}>
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=85"
                  alt="Executive coaching"
                  className={styles.heroImg}
                />
                <div className={styles.heroImgOverlay} />
                <div className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot} />
                  <span>Currently Enrolling</span>
                </div>
                <div className={styles.heroStatCard}>
                  <div className={styles.heroStatNum}>200+</div>
                  <div className={styles.heroStatLabel}>Leaders Coached</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroScrollLine} />
      </section>

      {/* ══ QUICK STATS ══ */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { val: '200+', label: 'Leaders Coached' },
              { val: '15+', label: 'Years Experience' },
              { val: '94%', label: 'Client Retention' },
              { val: '3×', label: 'Avg. Reported ROI' },
            ].map((s, i) => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statVal}>{s.val}</div>
                <div className={styles.statLabel}>{s.label}</div>
                {i < 3 && <div className={styles.statDivider} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INTRO ══ */}
      <section className={styles.introSection}>
        <div className="container">
          <div ref={introRef} className={`${styles.introGrid} reveal`}>
            <div className={styles.introLeft}>
              <div className="section-label">Why Coaching</div>
              <h2 className={styles.introTitle}>
                Programs built for leaders at every stage
              </h2>
              <p className={styles.introDesc}>
                Our coaching programs are designed for leaders navigating complex transitions, high-growth phases, and organizational evolution. We combine evidence-based frameworks with deeply personalized guidance to drive change that lasts.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Start Your Journey →
              </button>
            </div>
            <div className={styles.introRight}>
              {['Executive one-on-one sessions', 'Team & workforce programs', 'Transition & change coaching', 'Signature M.O.V.E.-U Lab™', 'Hybrid & in-person delivery', 'Ongoing accountability support'].map((item, i) => (
                <div key={item} className={styles.introItem} style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className={styles.introItemNum}>0{i + 1}</span>
                  <span className={styles.introItemText}>{item}</span>
                  <span className={styles.introItemArrow}>↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesSectionHead}>
            <div className="section-label">Coaching Offerings</div>
            <h2 className={styles.servicesSectionTitle}>
              Find the right program for you
            </h2>
          </div>
          <div ref={servicesRef} className={`${styles.servicesGrid} reveal`}>
            {services.map((s, i) => (
              <div key={s.title} className={styles.serviceCard} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className={styles.serviceCardImg}>
                  <img src={s.img} alt={s.title} />
                  <div className={styles.serviceCardImgOverlay} />
                  <div className={styles.serviceCardNum}>{s.num}</div>
                </div>
                <div className={styles.serviceCardBody}>
                  <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                  <p className={styles.serviceCardDesc}>{s.desc}</p>
                  <div className={styles.serviceCardTags}>
                    {s.tags.map(tag => <span key={tag} className={styles.serviceCardTag}>{tag}</span>)}
                  </div>
                  <button
                    className={styles.serviceCardCta}
                    onClick={() => navigate('/contact')}
                  >
                    {s.cta} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ M.O.V.E.-U LAB ══ */}
      <section className={styles.labSection}>
        <div className="container">
          <div ref={labRef} className={`${styles.labInner} reveal`}>

            <div className={styles.labHeader}>
              <span className={styles.labBadge}>Signature Program</span>
              <h2 className={styles.labTitle}>M.O.V.E.-U Lab™</h2>
              <p className={styles.labDesc}>
                Our immersive lab experience combines hands-on coaching, actionable frameworks, and peer learning to help leaders create lasting organizational evolution — from insight to impact.
              </p>
            </div>

            <div className={styles.labLetters}>
              {moveLetters.map((m, i) => (
                <div key={m.letter} className={styles.labLetterCard} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={styles.labLetterBig}>{m.letter}</div>
                  <div className={styles.labLetterWord}>{m.word}</div>
                  <div className={styles.labLetterDesc}>{m.desc}</div>
                </div>
              ))}
            </div>

            <div className={styles.labFooter}>
              <button className="btn btn-primary" onClick={() => navigate('/events')}>
                View Upcoming Labs →
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/contact')}>
                Request Info
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div ref={ctaRef} className={`${styles.ctaInner} reveal`}>
            <h2 className={styles.ctaTitle}>Ready to lead with purpose?</h2>
            <p className={styles.ctaDesc}>
              Let's connect to find the coaching program that fits your goals and timeline.
            </p>
            <div className={styles.ctaBtns}>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Book a Free Discovery Call →
              </button>
              <button className="btn btn-dark-outline" onClick={() => navigate('/events')}>
                Browse Programs
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
