import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { testimonials } from '../../data/testimonials'
import styles from './About.module.css'

type Tab = 'story' | 'founder' | 'testimonials'

const ABOUT_TABS: Tab[] = ['story', 'founder', 'testimonials']

function getTabFromState(state: unknown): Tab | null {
  const tab = (state as { tab?: string } | null)?.tab
  return tab && (ABOUT_TABS as string[]).includes(tab) ? (tab as Tab) : null
}

export default function About() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<Tab>(
    () => getTabFromState(location.state) ?? 'story'
  )
  const [prevLocationState, setPrevLocationState] = useState(location.state)

  if (location.state !== prevLocationState) {
    setPrevLocationState(location.state)
    const nextTab = getTabFromState(location.state)
    if (nextTab) {
      setActiveTab(nextTab)
    }
  }

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <div className={styles.aboutPageHeader}>
          <div className="section-label">About EVA</div>
          <h2 className="section-title">Empowerment That Values All</h2>
        </div>

        <div className={styles.aboutSubTabs}>
          {(['story', 'founder', 'testimonials'] as Tab[]).map((tab) => (
            <button
              key={tab}
              className={`${styles.aboutSubTab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'story' ? 'Our Story' : tab === 'founder' ? 'Meet the Founder' : 'Testimonials'}
            </button>
          ))}
        </div>

        {activeTab === 'story' && (
          <div className={styles.aboutPanel}>
            <div className={styles.aboutGrid}>
              <div>
                <div className={`${styles.aboutImgWrapper} ${styles.storyImgWrapper}`} />
              </div>
              <div>
                <h3 className="section-title" style={{ fontSize: '1.8rem' }}>About EVA</h3>
                <p className={styles.aboutText}>Empowerment That Values All, LLC was founded in 2012 from a deep belief that growth is most powerful when it is both strategic and human-centered. EVA was created to help individuals, businesses, and organizations move beyond ideas into aligned action by building the clarity, confidence, systems, and structure needed to grow with intention.</p>
                <p className={styles.aboutText}>Over time, the work has evolved into a focused platform for coaching, speaking, strategic advising, commercialization insight, and transformational support for leaders who are ready to scale what they have built.</p>

                <h3 className="section-title" style={{ fontSize: '1.4rem', marginTop: '2rem' }}>Mission</h3>
                <p className={styles.aboutText}>Our mission is to empower leaders, businesses, and organizations through strategic guidance, aligned systems, and transformational support that foster growth, innovation, and sustainable success.</p>

                <h3 className="section-title" style={{ fontSize: '1.4rem', marginTop: '1.5rem' }}>Vision</h3>
                <p className={styles.aboutText}>We envision a future where purpose-driven leaders scale with clarity, lead with confidence, and create lasting impact through strategy, innovation, and aligned execution.</p>

                <h3 className="section-title" style={{ fontSize: '1.4rem', marginTop: '1.5rem' }}>Core Values</h3>
                <div className={styles.aboutValues}>
                  {['Empowerment', 'Integrity', 'Transformation', 'Inclusivity'].map((v) => (
                    <div key={v} className={styles.aboutValue}>
                      <div className={styles.aboutValueIcon}>◆</div>
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'founder' && (
          <div className={styles.aboutPanel}>
            <div className={styles.aboutGrid}>
              <div style={{ position: 'relative' }}>
                <div className={styles.aboutImgWrapper} />
                <div className={styles.aboutAccent} />
              </div>
              <div>
                <h3 className="section-title" style={{ fontSize: '1.8rem' }}>Meet Troy</h3>
                <p className={styles.aboutText} style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
                  Troy C. Farmer, MSW, MCC, CPC, CGC, CLAC
                  <br />
                  <span style={{ fontWeight: 400, fontSize: '0.95rem', color: 'var(--text-light)' }}>Founder, Speaker & Strategy Coach</span>
                </p>
                <p className={styles.aboutText}>Troy Farmer is the founder of Empowerment That Values All, LLC and a highly regarded Speaker and Strategy Coach known for helping leaders and founders move from vision to aligned growth. Her work sits at the intersection of executive coaching, commercialization, customer discovery, strategic advising, business readiness, and leadership development.</p>
                <p className={styles.aboutText}>Troy blends behavioral insight with business acumen, supporting clients as they strengthen their thinking, refine their strategy, and build viable systems for growth.</p>

                <h3 className="section-title" style={{ fontSize: '1.3rem', marginTop: '2rem' }}>Key Credentials</h3>
                <p className={styles.aboutText} style={{ fontSize: '0.95rem' }}>
                  Founder of EVA since 2012 · Master Certified Coach (MCC) · Certified Professional Coach (CPC) · Certified Group Coach (CGC) · Certified Laser Coach (CLAC) · NSF I-Corps Instructor · 2024 UD Supplier Diversity Outstanding Community Engagement Award · 2023 Delaware Business Times Top Women in Business
                </p>

                <h3 className="section-title" style={{ fontSize: '1.3rem', marginTop: '1.5rem' }}>Personal Philosophy</h3>
                <p className={styles.aboutText} style={{ fontStyle: 'italic' }}>
                  "I believe meaningful growth requires more than motivation. It requires clarity, strategy, viable systems, and the courage to evolve. My work is driven by a desire to help leaders think critically, grow intentionally, and build something sustainable that reflects both their vision and their values."
                </p>

                <h3 className="section-title" style={{ fontSize: '1.3rem', marginTop: '2rem' }}>Selected Impact</h3>
                <p className={styles.aboutText} style={{ fontSize: '0.95rem' }}>
                  2,800+ individuals trained · 420+ training and outreach events · 50+ strategic and network partners · 20+ advisors managed · 20,000+ reached through outreach and engagement
                </p>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '16px', fontStyle: 'italic' }}>* Professional photo coming soon</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className={styles.aboutPanel}>
            <div className={styles.testimonialGrid}>
              {testimonials.map((t, i) => (
                <div key={i} className={styles.testimonialGridCard}>
                  <div className={styles.tgStars}>★★★★★</div>
                  <p className={styles.tgQuote}>"{t.quote}"</p>
                  <div className={styles.tgAuthor}>
                    <div className={styles.tgAvatar}>{t.initials}</div>
                    <div>
                      <div className={styles.tgName}>{t.name}</div>
                      <div className={styles.tgRole}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.note}>* Verified client testimonials pending — current entries are placeholders to be replaced.</p>
          </div>
        )}
      </div>
    </div>
  )
}
