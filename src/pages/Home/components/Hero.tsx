import { useNavigate } from 'react-router-dom'
import styles from './Hero.module.css'

const marqueeItems = [
  'Business Development', 'Commercialization', 'Innovation Strategy',
  'SMART Coaching', 'Business Modeling', 'Customer Discovery', 'Consulting',
  'Pitching', 'Funding Preparation', 'SMART Solutions', 'Events',
  'Speaking', 'Retreats', 'EVOLVE Community', 'Resources',
]

export default function Hero() {
  const navigate = useNavigate()

  // 2026-04-29: replaced loft-meeting background with Troy's 2024 headshot,
  // moved into Coaching-style right-side bleed with a left-edge gradient
  // dissolving into the dark text area. Keeps the dramatic dark mood.
  const heroImg = `${import.meta.env.BASE_URL}troy-headshot-2024.png`

  return (
    <section className={styles.hero}>
      {/* Right-side photo: bleeds to viewport edge; left edge fades into the
          dark text area via mask gradient. */}
      <div className={styles.heroPhoto}>
        <img
          src={heroImg}
          alt="Troy Farmer — Founder of EVA Smart Systems"
          className={styles.heroPhotoImg}
        />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>
            Coaching. Consulting. Speaking. Community.
          </div>

          <h1 className={styles.heroTitle}>
            Scale with Clarity.<br />
            Lead with Confidence.<br />
            <span className={styles.heroAccent}>Build What Lasts.</span>
          </h1>

          <p className={styles.heroDesc}>
            EVA Systems partners with emerging and established consultants,
            founders, and professional service providers to build viable systems,
            elevate leadership, and create market-ready growth.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <button className={styles.heroBtn} onClick={() => navigate('/contact')}>
              Book a Discovery Call →
            </button>
            <button className={styles.heroBtnOutline} onClick={() => navigate('/coaching')}>
              Explore Coaching →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className={styles.heroMarqueeWrap}>
        <div className={styles.heroMarqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={styles.heroMarqueeItem}>
              <span className={styles.heroMarqueeDot}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
