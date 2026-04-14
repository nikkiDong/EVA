import { useNavigate } from 'react-router-dom'
import { membershipPlans } from '../../data/events'
import styles from './EvolveCommunity.module.css'

export default function EvolveCommunity() {
  const navigate = useNavigate()

  return (
    <div className={styles.evolvePage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div className="section-label">EVOLVE Community</div>
          <h2 className="section-title">A strategic community for leaders who are ready to evolve</h2>
          <p className="section-subtitle">EVOLVE Community is designed for consultants, service providers, and founders who want more than occasional inspiration. It is a space for strategic conversation, accountability, practical support, and ongoing momentum as you grow your business and leadership.</p>
        </div>

        <div className={styles.tierGrid}>
          {membershipPlans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.tierCard} ${plan.variant === 'featured' ? styles.tierFeatured : ''}`}
            >
              {plan.variant === 'featured' && <div className={styles.tierBadge}>Most Popular</div>}
              <h3 className={styles.tierName}>{plan.name}</h3>
              <div className={styles.tierPrice}>
                <span className={styles.tierPriceAmount}>{plan.price}</span>
                <span className={styles.tierPricePeriod}>/month</span>
              </div>
              <p className={styles.tierPeriod}>{plan.period}</p>
              <ul className={styles.tierFeatures}>
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className={styles.tierCheck}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={plan.variant === 'featured' ? 'btn btn-primary' : 'btn btn-outline'}
                onClick={() => navigate('/contact')}
                style={{ width: '100%' }}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        <div className={styles.subSections}>
          <div className={styles.subCard} onClick={() => navigate('/blog')}>
            <h3>Blog</h3>
            <p>Insights, reflections, and strategic conversations from EVA.</p>
            <span className={styles.subLink}>Read Blog →</span>
          </div>
          <div className={styles.subCard}>
            <h3>Resources</h3>
            <p>Planning tools, templates, and strategic downloads — coming soon.</p>
            <span className={styles.subLink}>Coming Soon</span>
          </div>
        </div>

        <div className={styles.ctaWrap}>
          <button className="btn btn-primary" onClick={() => navigate('/contact')}>
            Join the EVOLVE Community →
          </button>
        </div>
      </div>
    </div>
  )
}
