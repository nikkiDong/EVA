import styles from './SmartPillars.module.css'

const pillars = [
  {
    title: 'SMART Systems',
    desc: 'Finding the right people, purpose, and processes that connect the collective whole of all parts in your business.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="7" stroke="#c9a84c" strokeWidth="2" />
        <circle cx="18" cy="18" r="2.5" fill="#c9a84c" />
        <path d="M18 4v5M18 27v5M4 18h5M27 18h5" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        <path d="M8.1 8.1l3.5 3.5M24.4 24.4l3.5 3.5M8.1 27.9l3.5-3.5M24.4 11.6l3.5-3.5" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="18" cy="18" r="13" stroke="#1a1a2e" strokeWidth="1" strokeDasharray="3 3" opacity="0.15" />
      </svg>
    ),
  },
  {
    title: 'SMART Results',
    desc: 'When systems are identified, aligned, and implemented, they increase performance and business viability.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="5" y="20" width="6" height="12" rx="1.5" fill="#1a1a2e" opacity="0.2" />
        <rect x="15" y="14" width="6" height="18" rx="1.5" fill="#c9a84c" opacity="0.5" />
        <rect x="25" y="6" width="6" height="26" rx="1.5" fill="#c9a84c" />
        <path d="M6 16L16 10l10-5" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="16" r="2.5" fill="#c9a84c" stroke="#fff" strokeWidth="1" />
        <circle cx="16" cy="10" r="2.5" fill="#c9a84c" stroke="#fff" strokeWidth="1" />
        <circle cx="26" cy="5" r="2.5" fill="#c9a84c" stroke="#fff" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'SMART Impact',
    desc: 'Consistent and focused outcomes provide favorable results through every stage of business transition.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="#1a1a2e" strokeWidth="1.5" opacity="0.12" />
        <circle cx="18" cy="18" r="10" stroke="#c9a84c" strokeWidth="1.5" opacity="0.3" />
        <circle cx="18" cy="18" r="6" stroke="#c9a84c" strokeWidth="2" />
        <circle cx="18" cy="18" r="2" fill="#c9a84c" />
        <path d="M28 8l-8.5 8.5" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 7h4v4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 3l2.5 2.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M31 7l1.5 0" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M27 3l0-1.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'SMART Growth',
    desc: 'Increasing, enhancing, and improving your systems for results that create lasting, sustained success.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 32c0 0 0-6-1-10s-3-6-3-10a4 4 0 018 0c0 4-2 6-3 10s-1 10-1 10z" fill="#c9a84c" opacity="0.2" />
        <path d="M18 30V14" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 18c-3-2-6-1.5-7 1" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M18 14c3-2.5 6-2 7.5 0.5" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M18 22c2.5-2 5.5-1.5 6.5 0.5" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
        <ellipse cx="18" cy="8" rx="4" ry="4.5" fill="#c9a84c" opacity="0.35" />
        <path d="M16 8c0.5-2 1.5-3.5 2-4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 8c-0.5-2-1.5-3.5-2-4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 32h12" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      </svg>
    ),
  },
]

export default function SmartPillars() {
  return (
    <section className={styles.smartPillars}>
      <div className="container">
        <div className={styles.pillarsHeader}>
          <div className="section-label">The SMART Framework</div>
          <h2 className="section-title">How We Build Your Success</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>Our proven SMART methodology connects every part of your business into a cohesive system for sustained growth.</p>
        </div>
        <div className={styles.pillarsGrid}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.pillarCard}>
              <div className={styles.pillarIcon}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
