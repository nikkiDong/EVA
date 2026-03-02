import { useNavigate } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className={styles.hero}>
      <div className={styles.heroBgImage} />
      <div className={styles.heroGridPattern} />
      <div className={styles.heroContent}>
        <div>
          <div className={styles.heroBadge}>Evolve 2026 — Now Enrolling</div>
          <h1>Building Your Enterprise One <em>SMART Solution</em> at a Time</h1>
          <p className={styles.heroDesc}>
            Expert consulting in workforce development, business strategy, organizational growth, and executive coaching — designed to help you transition, scale, and sustain your business with proven systems.
          </p>
          <div className={styles.heroBtns}>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>Book a Consultation →</button>
            <button className="btn btn-outline" onClick={() => navigate('/services')}>Explore Services</button>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroPhotoGrid}>
            <div className={styles.heroPhoto}>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" alt="Business strategy meeting" />
              <div className={styles.heroPhotoOverlay}>Strategy & Leadership</div>
            </div>
            <div className={styles.heroPhoto}>
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80" alt="Team collaboration workshop" />
            </div>
            <div className={styles.heroPhoto}>
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80" alt="Executive coaching session" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
