import styles from './StatsBar.module.css'

export default function StatsBar() {
  const stats = [
    { number: '14+',    label: 'Years',           desc: 'of experience' },
    { number: '1,700+', label: 'Events',          desc: 'designed & delivered' },
    { number: '125K+',  label: 'Support Hours',   desc: 'invested in client success' },
    { number: '100%',   label: 'Client Centered', desc: 'always' },
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
