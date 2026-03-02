import { useNavigate } from 'react-router-dom'
import { events, membershipPlans } from '../../data/events'
import styles from './Events.module.css'

export default function Events() {
  const navigate = useNavigate()

  return (
    <div className={styles.eventsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div className="section-label">Evolve 2026</div>
          <h2 className="section-title">Events & Programs</h2>
          <p className="section-subtitle">Invest in your growth. Register for upcoming virtual and in-person events, workshops, and exclusive programs.</p>
        </div>

        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <div key={event.title} className={styles.eventCard}>
              <div className={styles.eventImage} style={event.bgStyle ? { background: event.bgStyle } : undefined}>
                <div className={styles.eventBadge}>{event.badge}</div>
                <div className={styles.eventPriceTag}>{event.price}</div>
              </div>
              <div className={styles.eventBody}>
                <div className={styles.eventDate}>📅 {event.date}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <a href="#" className="btn btn-primary btn-sm">{event.cta}</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.secureNotice}>
          🔒 <strong>Secure Payments</strong> — All transactions are processed through Shopify's secure payment platform. Your credit card and financial information is never stored on our website. EVA Enterprise uses industry-standard encryption to protect your data.
        </div>

        {/* Membership Section */}
        <div className={styles.membershipSection}>
          <div className={styles.membershipHeader}>
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
    </div>
  )
}
