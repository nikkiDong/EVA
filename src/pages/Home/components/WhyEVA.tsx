import styles from './WhyEVA.module.css'

export default function WhyEVA() {
  const points = [
    {
      title: 'Proven SMART Methodology',
      desc: 'A structured framework connecting your people, purpose, and processes into a system designed for sustained growth.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 1L14 7.5L21 8.5L16 13.5L17 20.5L11 17.5L5 20.5L6 13.5L1 8.5L8 7.5L11 1Z" stroke="#c9a84c" strokeWidth="1.5" fill="rgba(184,147,90,0.1)" />
        </svg>
      ),
    },
    {
      title: 'Hands-On, Not Hands-Off',
      desc: 'We work alongside you — from coaching sessions to implementation support — ensuring real follow-through.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" stroke="#c9a84c" strokeWidth="1.5" />
          <path d="M7 11l3 3 5-6" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Measurable Results',
      desc: 'Every engagement is designed around clear KPIs and outcomes — so you can see the impact, not just feel it.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="3" width="16" height="16" rx="3" stroke="#c9a84c" strokeWidth="1.5" />
          <path d="M7 14V10M11 14V8M15 14V6" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  return (
    <section className={styles.whyEva}>
      <div className="container">
        <div className={styles.whyEvaGrid}>
          <div className={styles.whyEvaImage}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80" alt="Business workshop and team development" />
          </div>
          <div>
            <div className="section-label">Why EVA CEO Evolve</div>
            <h2 className="section-title">Built for Leaders Who Want More Than Advice</h2>
            <p className="section-subtitle">We don't just consult — we partner with you to build the systems, skills, and strategies that drive real, measurable outcomes.</p>
            <ul className={styles.whyEvaPoints}>
              {points.map((p) => (
                <li key={p.title}>
                  <div className={styles.wepIcon}>{p.icon}</div>
                  <div className={styles.wepText}>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
