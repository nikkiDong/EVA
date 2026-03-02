import { useNavigate } from 'react-router-dom'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  const navigate = useNavigate()

  return (
    <section className={styles.ctaBanner}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2>Ready to Take <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>SMART Action</em> for Your Business?</h2>
        <p>Schedule your complimentary consultation to see if EVA CEO Evolve is right for you.</p>
        <button className="btn btn-primary" onClick={() => navigate('/contact')}>Get Started →</button>
      </div>
    </section>
  )
}
