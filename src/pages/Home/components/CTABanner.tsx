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
            Ready to Take <em style={{ fontStyle: 'italic' }}>SMART Action</em> for Your Business?
          </h2>
          <p>Schedule your complimentary consultation to see if Empowerment that Values All is right for you.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexShrink: 0, flexWrap: 'wrap' }}>
          <button
            className="btn btn-outline"
            onClick={() => navigate('/contact')}
          >
            Book a Consultation →
          </button>
          <button
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', fontWeight: 600,
              background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: '10px', padding: '14px 26px', cursor: 'pointer',
              fontFamily: 'inherit', transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.2)'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.85)'
            }}
            onClick={() => navigate('/services')}
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  )
}
