import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Coaching.module.css'

/* ─── Data ────────────────────────────────────────────────────── */
const stages = [
  {
    letter: 'Envision',
    desc: 'Clarify the vision, direction, and possibilities for what comes next.',
  },
  {
    letter: 'Establish',
    desc: 'Strengthen your foundation through structure, systems, and focused decisions.',
  },
  {
    letter: 'Elevate',
    desc: 'Refine the business, sharpen execution, and raise readiness for the next level.',
  },
  {
    letter: 'Expand',
    desc: 'Scale with stronger positioning, viable systems, and aligned momentum.',
  },
  {
    letter: 'Evolve',
    desc: 'Step into premium coaching and advisory for deeper transformation and sustained growth.',
  },
]

const contentBlocks = [
  {
    num: '01',
    title: '1:1 Advisory',
    desc: 'Private strategic support for leaders working through growth decisions, offer refinement, commercialization opportunities, client strategy, and business structure.',
    tags: ['Private', 'Strategic', 'Advisory'],
    cta: 'Book a Coaching Call',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
  },
  {
    num: '02',
    title: 'Group Coaching',
    desc: 'A guided space for shared learning, live coaching, and strategic momentum with other growth-minded leaders.',
    tags: ['Group', 'Live', 'Momentum'],
    cta: 'Join a Group',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    num: '03',
    title: 'Retreat Intensives',
    desc: 'Focused experiences for reflection, reset, planning, and deeper strategy work away from daily business demands.',
    tags: ['Retreat', 'Deep Work', 'Strategy'],
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
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
  const stagesRef = useReveal()
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
                Scale with <span className={styles.heroGoldText}>Clarity.</span><br />
                Lead with Confidence.<br />
                Are you ready?
              </h1>
              <p className={styles.heroSubtitle}>
                EVA coaches emerging and established high impact consultants, service providers, and founders seeking to refine viable systems, sharpen problem-solving, and scale with market-ready clarity.
              </p>
              <div className={styles.heroCtas}>
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                  Book a Coaching Call →
                </button>
                <button className={styles.heroSecondaryBtn} onClick={() => navigate('/events')}>
                  <span>EVOLVE Retreat 2027 — Join the Waitlist</span>
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
                  alt="Strategic coaching"
                  className={styles.heroImg}
                />
                <div className={styles.heroImgOverlay} />
                <div className={styles.heroStatCard}>
                  <div className={styles.heroStatNum}>14+</div>
                  <div className={styles.heroStatLabel}>Years Coaching Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroScrollLine} />
      </section>

      {/* ══ 5-STAGE FRAMEWORK ══ */}
      <section className={styles.labSection}>
        <div className="container">
          <div ref={stagesRef} className={`${styles.labInner} reveal`}>

            <div className={styles.labHeader}>
              <span className={styles.labBadge}>Coaching Journey</span>
              <h2 className={styles.labTitle}>Five Stages to EVOLVE</h2>
              <p className={styles.labDesc}>
                A progression designed to meet you where you are and move you forward — from vision to sustained growth.
              </p>
            </div>

            <div className={styles.labLetters}>
              {stages.map((m, i) => (
                <div key={m.letter} className={styles.labLetterCard} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={styles.labLetterBig}>{i + 1}</div>
                  <div className={styles.labLetterWord}>{m.letter}</div>
                  <div className={styles.labLetterDesc}>{m.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ INTRO / WHY COACHING ══ */}
      <section className={styles.introSection}>
        <div className="container">
          <div ref={introRef} className={`${styles.introGrid} reveal`}>
            <div className={styles.introLeft}>
              <div className="section-label">Why Coaching</div>
              <h2 className={styles.introTitle}>
                Designed for leaders already in motion
              </h2>
              <p className={styles.introDesc}>
                These coaching experiences are designed for clients who are already in motion and need strategic thought partnership, accountability, and practical support to move with more precision. The work focuses on critical thinking, problem-solving, commercialization insight, viable systems, and aligned growth.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Apply to Work Together →
              </button>
            </div>
            <div className={styles.introRight}>
              {['Critical thinking & problem-solving', 'Commercialization insight', 'Viable systems & structure', 'Aligned growth strategy', 'Accountability & practical support', 'Strategic thought partnership'].map((item, i) => (
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

      {/* ══ COACHING FORMATS ══ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesSectionHead}>
            <div className="section-label">Coaching Formats</div>
            <h2 className={styles.servicesSectionTitle}>
              Find the right support path
            </h2>
          </div>
          <div ref={servicesRef} className={`${styles.servicesGrid} reveal`}>
            {contentBlocks.map((s, i) => (
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

      {/* ══ CTA ══ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div ref={ctaRef} className={`${styles.ctaInner} reveal`}>
            <h2 className={styles.ctaTitle}>Ready to EVOLVE?</h2>
            <p className={styles.ctaDesc}>
              Apply to work together or book a discovery call to identify the best support path.
            </p>
            <div className={styles.ctaBtns}>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Book a Discovery Call →
              </button>
              <button className="btn btn-dark-outline" onClick={() => navigate('/events')}>
                EVOLVE Retreat 2027
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
