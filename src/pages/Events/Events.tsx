import { useNavigate } from 'react-router-dom'
import { events } from '../../data/events'
import styles from './Events.module.css'

export default function Events() {
  const navigate = useNavigate()

  return (
    <div className={styles.eventsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div className="section-label">Live & Virtual</div>
          <h2 className="section-title">Events, Retreats & Live Experiences</h2>
          <p className="section-subtitle">EVA hosts live and virtual experiences designed to help leaders gain insight, strengthen strategy, and create momentum.</p>
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
                <button className="btn btn-primary btn-sm" onClick={() => navigate('/contact')}>{event.cta}</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pricingCta}>
          <p>Looking for ongoing strategic support and coaching?</p>
          <button className="btn btn-primary" onClick={() => navigate('/evolve-community')}>
            Explore EVOLVE Community →
          </button>
        </div>
      </div>
    </div>
  )
}
