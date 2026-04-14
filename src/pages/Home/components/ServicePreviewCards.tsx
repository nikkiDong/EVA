import { useNavigate } from 'react-router-dom'
import { useInView } from '../../../hooks/useInView'
import styles from './ServicePreviewCards.module.css'

const cards = [
  {
    tab: 'coaching',
    route: '/coaching',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
    title: 'Coaching',
    desc: 'Coaching to refine business models, deepen customer insights and validate market direction.',
  },
  {
    tab: 'consulting',
    route: '/consulting',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    title: 'Consulting',
    desc: 'High-touch consulting across sectors seeking stronger stakeholder alignment, organizational effectiveness, and scalable systems that drive viable ROI.',
  },
  {
    tab: 'bizdev',
    route: '/consulting',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    title: 'Business Development',
    desc: 'Identifying viable revenue pathways and targeted opportunities for business momentum.',
  },
  {
    tab: 'innovation',
    route: '/consulting',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
    title: 'Innovation & Commercialization',
    desc: 'Driving innovation and commercialization to define and validate your Ideal Customer Profile (ICP).',
  },
]

export default function ServicePreviewCards() {
  const navigate = useNavigate()
  const [headerRef, headerInView] = useInView<HTMLDivElement>()
  const [gridRef, gridInView] = useInView<HTMLDivElement>()

  return (
    <section className={styles.homeServicesPreview}>
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.homeServicesHeader} reveal ${headerInView ? 'visible' : ''}`}
        >
          <div>
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">SMART Services</h2>
          </div>
          <p className="section-subtitle">Designed to support at every stage — from emerging vision to sustainable expansion.</p>
        </div>

        <div ref={gridRef} className={styles.homeSvcGrid}>
          {cards.map((c, i) => (
            <div
              key={c.tab}
              className={`${styles.homeSvcCard} reveal ${gridInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => navigate(c.route)}
            >
              <div className={styles.homeSvcImgWrap}>
                <div
                  className={styles.homeSvcImg}
                  style={{ backgroundImage: `url('${c.img}')` }}
                />
              </div>
              <div className={styles.homeSvcBody}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className={styles.homeSvcLink}>View Details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
