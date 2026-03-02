import { useNavigate } from 'react-router-dom'
import styles from './Speaking.module.css'

const topics = [
  'Building SMART Systems for Sustainable Growth',
  'Leadership in Transition: Navigating Change',
  'Workforce Development & Team Alignment',
  'Innovation & Organizational Transformation',
  'Business Development Strategy & Execution',
  'Empowering Women in Enterprise Leadership',
]

export default function Speaking() {
  const navigate = useNavigate()

  return (
    <div className={styles.speakingPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div className="section-label">Engage & Inspire</div>
          <h2 className="section-title">Speaking & Workshops</h2>
          <p className="section-subtitle">Bring the EVA experience to your event, conference, or organization with customized keynotes, workshops, and virtual presentations.</p>
        </div>

        <div className={styles.cardGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="6" stroke="#b8935a" strokeWidth="1.5"/><path d="M14 16v4M10 24h8" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 6l-2-3M20 6l2-3" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h3>Keynote Speaking</h3>
            <p>Engaging keynotes on leadership, business systems, workforce development, and innovation — customized for your event audience and goals.</p>
            <button className={styles.serviceLink} onClick={() => navigate('/contact')}>Book a Speaker →</button>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="3" stroke="#b8935a" strokeWidth="1.5"/><path d="M9 10h10M9 14h7M9 18h10" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h3>Workshops & Seminars</h3>
            <p>Interactive, hands-on workshops equipping participants with practical tools they can apply immediately to their business and leadership roles.</p>
            <button className={styles.serviceLink} onClick={() => navigate('/contact')}>Learn More →</button>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="14" rx="3" stroke="#b8935a" strokeWidth="1.5"/><path d="M12 13l4-2.5v5L12 13z" fill="#b8935a"/><path d="M10 22h8" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 20v2" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h3>Virtual Presentations</h3>
            <p>Live virtual keynotes and masterclasses accessible from anywhere — bringing the EVA experience directly to your team or audience.</p>
            <button className={styles.serviceLink} onClick={() => navigate('/events')}>View Events →</button>
          </div>
        </div>

        <div className={styles.topicsSection}>
          <div className="section-label">Popular Topics</div>
          <h3 className="section-title" style={{ fontSize: '1.6rem' }}>What We Speak About</h3>
          <div className={styles.topicsGrid}>
            {topics.map((topic, i) => (
              <div key={topic} className={styles.topicItem}>
                <span className={styles.topicNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.topicText}>{topic}</span>
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
