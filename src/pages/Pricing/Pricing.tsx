import { useNavigate } from 'react-router-dom'
import { membershipPlans } from '../../data/events'
import styles from './Pricing.module.css'

export default function Pricing() {
  const navigate = useNavigate()

  return (
    <div className={styles.pricingPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div className="section-label">Join the Community</div>
          <h2 className="section-title">Membership Plans</h2>
          <p className="section-subtitle">Get exclusive access to resources, events, coaching sessions, and a community of driven leaders.</p>
        </div>

        <div className={styles.membershipGrid}>
          {membershipPlans.map((plan) => (
            <div key={plan.name} className={`${styles.membershipCard} ${plan.variant === 'featured' ? styles.featured : ''}`}>
              {plan.variant === 'featured' && <div className={styles.membershipPopular}>Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className={styles.membershipPrice} style={plan.variant === 'featured' ? { color: 'var(--accent)' } : undefined}>
                {plan.price}<span>/mo</span>
              </div>
              <div className={styles.membershipPeriod}>{plan.period}</div>
              <ul className={styles.membershipFeatures}>
                {plan.features.map((f) => (
                  <li key={f}><span className={styles.check}>✓</span>{f}</li>
                ))}
              </ul>
              <button
                className={`btn ${plan.variant === 'featured' ? 'btn-primary' : 'btn-dark-outline'} btn-sm ${styles.btnFull}`}
                onClick={() => navigate('/contact')}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
