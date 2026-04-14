import { useInView } from '../../../hooks/useInView'
import styles from './WhyEVA.module.css'

export default function WhyEVA() {
  const [ref, inView] = useInView<HTMLDivElement>()

  const points = [
    {
      title: 'Proven SMART Methodology',
      desc: 'Our practical framework helps align vision, solutions, results and growth strategy.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="1" y="1" width="20" height="20" rx="4" fill="#4169E1" />
          <path d="M6 11l4 4 6-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Hands-On, Not Hands-Off',
      desc: 'Implementation-focused support designed to create traction that is collaborative, cohesive and connected.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="1" y="1" width="20" height="20" rx="4" fill="#4169E1" />
          <path d="M6 11l4 4 6-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Measured Results',
      desc: 'Every engagement is rooted in progress, accountability, and aligned outcomes.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="1" y="1" width="20" height="20" rx="4" fill="#4169E1" />
          <path d="M6 11l4 4 6-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  return (
    <section className={styles.whyEva}>
      <div className="container">
        <div ref={ref} className={styles.whyEvaGrid}>
          <div className={`${styles.whyEvaImage} revealLeft ${inView ? 'visible' : ''}`}>
            <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Diverse team discussion" />
          </div>
          <div className={`revealRight ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="section-label">Why Empowerment that Values All</div>
            <h2 className="section-title">Working with EVA Is BOLD and BETTER!</h2>
            <p className="section-subtitle" style={{ marginBottom: '0.5rem' }}>Built for Intentional Leaders Who Want More Than Advice</p>
            <p className="section-subtitle">EVA doesn't simply motivate. We partner with you to strengthen thinking systems required to create a mapping journey for measurable outcomes.</p>
            <ul className={styles.whyEvaPoints}>
              {points.map((p, i) => (
                <li
                  key={p.title}
                  className={`reveal ${inView ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.25 + i * 0.12}s` }}
                >
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
