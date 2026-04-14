import { useNavigate } from 'react-router-dom'
import { useInView } from '../../../hooks/useInView'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  const navigate = useNavigate()
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section className={styles.ctaBanner}>
      <div
        ref={ref}
        className={`container reveal ${inView ? 'visible' : ''}`}
      >
        <div>
          <h2>
            Ready to take <em style={{ fontStyle: 'italic' }}>SMART Action</em> to EVOLVE in Your Business?
          </h2>
          <p>Schedule a discovery call.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexShrink: 0, flexWrap: 'wrap' }}>
          <button className={styles.ctaBtn} onClick={() => navigate('/coaching')}>
            Take the Journey →
          </button>
          <button className={styles.ctaBtn} onClick={() => navigate('/contact')}>
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  )
}
