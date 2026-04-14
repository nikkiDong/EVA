import styles from './StatsBar.module.css'

export default function StatsBar() {
  const stats = [
    {
      number: '14+',
      label: 'Years',
      desc: 'Coaching & Consulting Experience',
      subdesc: 'Business Development & Organizational Effectiveness, Innovation & Commercialization',
    },
    {
      number: '1,700+',
      label: 'Events, Programs & Workshops',
      desc: 'Managed, Designed & Delivered',
      subdesc: '',
    },
    {
      number: '125K+',
      label: 'Client Support Hours',
      desc: 'Includes Clients Coached, Trained & Program Delivery',
      subdesc: '',
    },
    {
      number: '100%',
      label: 'Client-Centered',
      desc: 'Small Businesses, Founders, Non-Profits, Government, and Corporate',
      subdesc: '',
    },
  ]

  return (
    <section className={styles.statsBar}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
