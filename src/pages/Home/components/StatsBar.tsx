import styles from './StatsBar.module.css'

export default function StatsBar() {
  const stats = [
    { number: '[X]+', desc: 'Years of Experience' },
    { number: '[X]+', desc: 'Clients Served' },
    { number: '[X]+', desc: 'Workshops Delivered' },
    { number: '[X]%', desc: 'Client Satisfaction' },
  ]

  return (
    <section className={styles.statsBar}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.desc} className={styles.statItem}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
