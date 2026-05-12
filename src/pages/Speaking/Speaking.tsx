import { useNavigate } from 'react-router-dom'
import { useInView } from '../../hooks/useInView'
import styles from './Speaking.module.css'

const topics = [
  {
    title: 'Leading Through Growth Without Losing Alignment',
    desc: 'A practical conversation for founders and service-based leaders who are scaling while trying to maintain focus, values, and operational clarity.',
  },
  {
    title: 'From Vision to Viable: Strategy for the Next Level',
    desc: 'Helps leaders translate big ideas into clearer decisions, stronger business models, and more intentional execution.',
  },
  {
    title: 'Commercialization Thinking for Founders and Experts',
    desc: 'Designed for innovation-minded founders and subject-matter experts who need to strengthen value, positioning, and market readiness.',
  },
  {
    title: 'Critical-Mass Thinking and Better Business Decisions',
    desc: 'A leadership session focused on strategic thinking, problem-solving, and the mindset required to lead through complexity.',
  },
  {
    title: 'Building SMART Systems for Sustainable Growth',
    desc: 'A signature topic built around systems, strategy, and aligned growth for leaders ready to move beyond hustle into sustainability.',
  },
]

export default function Speaking() {
  const navigate = useNavigate()
  const [cardsRef, cardsInView] = useInView<HTMLDivElement>()
  const [topicsRef, topicsInView] = useInView<HTMLDivElement>()

  return (
    <div className={styles.speakingPage}>
      {/* Hero banner with real Troy podium photo (added 2026-04-25 per Troy's
          Speaking-page imagery direction) */}
      <div className={styles.speakingHero}>
        <img
          src={`${import.meta.env.BASE_URL}troy-speaking-podium.jpg`}
          alt="Troy Farmer speaking on stage"
          className={styles.speakingHeroImg}
        />
        <div className={styles.speakingHeroOverlay} />
        <div className="container">
          <div className={styles.speakingHeroContent}>
            <div className={styles.speakingHeroEyebrow}>Be Intentional. Grow and Go.</div>
            <h1 className={styles.speakingHeroTitle}>
              Speaking that moves leaders, ideas,<br />and organizations forward.
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.pageHeader}>
          <div className="section-label">Engage & Inspire</div>
          <h2 className="section-title">Book Troy Farmer to Speak at Your Next Event</h2>
          <p className="section-subtitle">Practical, powerful, and engaging conversations at the intersection of leadership, innovation, business growth, and transformation.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>Invite Troy to Speak →</button>
          </div>
        </div>

        <div ref={cardsRef} className={styles.cardGrid}>
          {[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="6" stroke="#4169E1" strokeWidth="1.5"/><path d="M14 16v4M10 24h8" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 6l-2-3M20 6l2-3" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              title: 'Keynote Speaking',
              desc: '45-minute keynotes that blend candor, strategy, humor, and real-world insight — helping audiences think differently and move with greater clarity.',
              link: 'Book a Speaker →',
              to: '/contact',
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="3" stroke="#4169E1" strokeWidth="1.5"/><path d="M9 10h10M9 14h7M9 18h10" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              title: 'Workshops & Retreats',
              desc: '60–90 minute workshops, half-day strategy sessions, panel moderation, and retreat facilitation — customized for your audience and goals.',
              link: 'Learn More →',
              to: '/contact',
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="14" rx="3" stroke="#4169E1" strokeWidth="1.5"/><path d="M12 13l4-2.5v5L12 13z" fill="#4169E1"/><path d="M10 22h8" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 20v2" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              title: 'Virtual Masterclasses',
              desc: 'Live virtual masterclasses and training sessions accessible from anywhere — bringing strategy, systems, and insight to your team in real time.',
              link: 'View Events →',
              to: '/events',
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className={`${styles.serviceCard} reveal ${cardsInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.serviceIcon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <button className={styles.serviceLink} onClick={() => navigate(card.to)}>{card.link}</button>
            </div>
          ))}
        </div>

        <div className={styles.topicsSection}>
          <div className="section-label">Signature Speaking Topics</div>
          <h3 className="section-title" style={{ fontSize: '1.8rem' }}>What Troy Speaks About</h3>
          <div ref={topicsRef} className={styles.topicsGrid}>
            {topics.map((topic, i) => (
              <div
                key={topic.title}
                className={`${styles.topicItem} reveal ${topicsInView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className={styles.topicNum}>{String(i + 1).padStart(2, '0')}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span className={styles.topicText}>{topic.title}</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{topic.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ctaWrap}>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>Book a Speaking Engagement →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
