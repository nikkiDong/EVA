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
          <h2>Let&rsquo;s Build What&rsquo;s Next&mdash;Together.</h2>
          <p>Ready to gain clarity, create systems, and scale with confidence?</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexShrink: 0, flexWrap: 'wrap' }}>
          <button className={styles.ctaBtn} onClick={() => navigate('/contact')}>
            Book a Discovery Call
          </button>
          <button className={styles.ctaBtn} onClick={() => navigate('/contact')}>
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  )
}
