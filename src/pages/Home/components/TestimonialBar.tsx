import { testimonials } from '../../../data/testimonials'
import styles from './TestimonialBar.module.css'

export default function TestimonialBar() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className={styles.testimonialBar}>
      <div className={styles.testimonialBarLabel}>
        <div className="section-label" style={{ color: 'var(--accent)' }}>What Our Clients Say</div>
      </div>
      <div className={styles.testimonialTrackWrapper}>
        <div className={styles.testimonialTrack}>
          {doubled.map((t, i) => (
            <div key={i} className={styles.tCard}>
              <div className={styles.tStars}>★★★★★</div>
              <blockquote>"{t.quote}"</blockquote>
              <div className={styles.tAuthor}>
                <div className={styles.tAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.tName}>{t.name}</div>
                  <div className={styles.tRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
