import { useNavigate } from 'react-router-dom'
import styles from './Hero.module.css'

const marqueeItems = [
  'SMART Coaching', 'Business Development', 'Commercialization',
  'Innovation Strategy', 'Business Modeling', 'Customer Discovery',
  'Consulting', 'Pitching', 'Funding Preparation', 'Events',
  'Speaking', 'Retreats', 'EVOLVE Community', 'Resources', 'SMART Solutions',
]

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className={styles.hero}>
      {/* Full-bleed background image */}
      <div className={styles.heroBg} />
      {/* Gradient overlay — dark left, fades right */}
      <div className={styles.heroOverlay} />

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            EVOLVE Retreat 2027 for Visionary CEOs — Join the Waitlist
          </div>

          <h1 className={styles.heroTitle}>
            Building Your Enterprise One<br />
            <em>SMART Solution</em> at a Time<br />
            Through Innovation and Commercialization
          </h1>

          <p className={styles.heroDesc}>
            Intentional business and organizational solutions for clients.
            Let's explore your growth potential through our SMART Framework.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <button className={styles.heroBtn} onClick={() => navigate('/contact')}>
              Book a Discovery Call →
            </button>
            <button className={styles.heroBtnOutline} onClick={() => navigate('/consulting')}>
              Explore Consulting →
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
