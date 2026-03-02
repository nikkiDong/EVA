import { useNavigate } from 'react-router-dom'
import styles from './ServicePreviewCards.module.css'

const cards = [
  {
    tab: 'coaching',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=75',
    title: 'Coaching',
    desc: 'Executive, workforce, and transition coaching to unlock your leadership potential.',
  },
  {
    tab: 'bizdev',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=75',
    title: 'Business Development',
    desc: 'Strategy, market positioning, and revenue systems for sustainable growth.',
  },
  {
    tab: 'orgdev',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=75',
    title: 'Organizational Dev',
    desc: 'Team alignment, culture building, and process optimization for your org.',
  },
  {
    tab: 'innovation',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=75',
    title: 'Innovation',
    desc: 'Innovation strategy and digital transformation to stay ahead of the curve.',
  },
]

export default function ServicePreviewCards() {
  const navigate = useNavigate()

  return (
    <section className={styles.homeServicesPreview}>
      <div className="container">
        <div className={styles.homeServicesHeader}>
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">Comprehensive consulting tailored to your business stage.</p>
        </div>
        <div className={styles.homeSvcGrid}>
          {cards.map((c) => (
            <div
              key={c.tab}
              className={styles.homeSvcCard}
              onClick={() => navigate('/services', { state: { tab: c.tab } })}
            >
              <div
                className={styles.homeSvcImg}
                style={{ backgroundImage: `url('${c.img}')` }}
              />
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
