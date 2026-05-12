import { useNavigate } from 'react-router-dom'
import { useInView } from '../../../hooks/useInView'
import styles from './ServicePreviewCards.module.css'

// Updated 2026-04-25: card thumbnails switched from Unsplash URLs to
// Troy's user-supplied photo library (generalpics/ + morepics/ folders),
// each chosen to match the service it represents.
const BASE = import.meta.env.BASE_URL
const cards = [
  {
    tab: 'coaching',
    route: '/coaching',
    img: `${BASE}home-card-coaching.jpg`,
    title: 'Coaching',
    desc: '1:1 and group coaching for founders and leaders ready to clarify their vision, strengthen their leadership, and scale with confidence.',
  },
  {
    tab: 'consulting',
    route: '/consulting',
    img: `${BASE}home-card-consulting.jpg`,
    title: 'Consulting',
    desc: 'Strategic advisory to design systems, streamline operations, and build the infrastructure your business needs to grow sustainably.',
  },
  {
    tab: 'speaking',
    route: '/speaking',
    img: `${BASE}troy-speaking-podium.jpg`,
    title: 'Speaking',
    desc: 'Dynamic keynotes and workshops that inspire action, ignite transformation, and equip audiences to lead and grow.',
  },
  {
    tab: 'community',
    route: '/evolve-community',
    img: `${BASE}home-card-community.jpg`,
    title: 'EVOLVE Community',
    desc: 'A private community for ambitious professionals to connect, collaborate, and grow together.',
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
            <h2 className="section-title">Solutions that Elevate. Strategies that Endure.</h2>
          </div>
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
