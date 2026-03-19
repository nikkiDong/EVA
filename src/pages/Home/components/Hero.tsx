import { useNavigate } from 'react-router-dom'
import PipelineCanvas from './PipelineCanvas'
import styles from './Hero.module.css'

const marqueeItems = [
  'Executive Coaching', 'Business Development', 'Organizational Growth',
  'Innovation Strategy', 'Workforce Development', 'SMART Solutions',
  'Leadership Transformation', 'M.O.V.E.-U Lab™',
]

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className={styles.hero}>
      {/* Animated pipeline canvas — sits behind all content */}
      <PipelineCanvas />

      {/* Subtle vignette to keep edges clean */}
      <div className={styles.heroVignette} />

      {/* Main content */}
      <div className={styles.heroContent}>
        {/* Left column */}
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Evolve 2026 — Now Enrolling
          </div>

          <h1 className={styles.heroTitle}>
            Building Your<br />
            Enterprise One<br />
            <em>SMART Solution</em><br />
            at a Time
          </h1>

          <p className={styles.heroDesc}>
            Expert consulting in workforce development, business strategy,
            organizational growth, and executive coaching — designed to help you
            transition, scale, and sustain with proven systems.
          </p>

          <div className={styles.heroBtns}>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
              Book a Consultation →
            </button>
            <button className={styles.heroBtnSecondary} onClick={() => navigate('/services')}>
              Explore Services →
            </button>
          </div>

          {/* Trust signal */}
          <div className={styles.heroTrust}>
            <div className={styles.heroTrustAvatars}>
              {['L', 'M', 'A', 'J'].map((l) => (
                <div key={l} className={styles.heroTrustAvatar}>{l}</div>
              ))}
            </div>
            <span className={styles.heroTrustText}>Trusted by leaders across industries</span>
          </div>
        </div>

        {/* Right column */}
        <div className={styles.heroRight}>
          <div className={styles.heroPhotoStack}>
            <div className={styles.heroPhotoMain}>
              <img
                src="https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?w=700&q=85"
                alt="Diverse strategy meeting"
              />
              <div className={styles.heroPhotoMainOverlay} />
              <div className={styles.heroPhotoLabel}>Strategy & Leadership</div>
            </div>

            {/* Floating stat card */}
            <div className={styles.heroStatCard}>
              <div className={styles.heroStatNum}>
                94<span className={styles.heroStatSup}>%</span>
              </div>
              <div className={styles.heroStatDesc}>Client Retention</div>
            </div>

            <div className={styles.heroPhotoSm1}>
              <img
                src="https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?w=400&q=80"
                alt="Diverse team workshop"
              />
            </div>
            <div className={styles.heroPhotoSm2}>
              <img
                src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=400&q=80"
                alt="Executive coaching session"
              />
              <div className={styles.heroPhotoBadge}>
                <span className={styles.heroPhotoBadgeDot} />
                Now Enrolling
              </div>
            </div>

            <div className={styles.heroDecorRing} />
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
