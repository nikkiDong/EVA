import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { testimonials } from '../../data/testimonials'
import styles from './About.module.css'

type Tab = 'story' | 'founder' | 'testimonials'

export default function About() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<Tab>('story')

  useEffect(() => {
    const state = location.state as { tab?: string } | null
    if (state?.tab && ['story', 'founder', 'testimonials'].includes(state.tab)) {
      setActiveTab(state.tab as Tab)
    }
  }, [location.state])

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <div className={styles.aboutPageHeader}>
          <div className="section-label">About EVA</div>
          <h2 className="section-title">Empowering Visionary Ambition</h2>
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
                <h3 className="section-title" style={{ fontSize: '1.8rem' }}>Our Mission & Vision</h3>
                <p className={styles.aboutText}>EVA Enterprise is dedicated to equipping business leaders and organizations with the systems, strategies, and support they need to thrive through transition and sustained growth. From coaching to consulting, we provide SMART solutions that align your people, purpose, and processes.</p>
                <p className={styles.aboutText}>Founded on the belief that every business has the potential to excel, we combine real-world expertise with proven frameworks to drive measurable results across workforce development, business development, organizational development, and innovation.</p>
                <div className={styles.aboutValues}>
                  {['Systems Thinking', 'Measurable Results', 'Authentic Leadership', 'Sustainable Growth'].map((v) => (
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
                <h3 className="section-title" style={{ fontSize: '1.8rem' }}>Meet the Founder</h3>
                <p className={styles.aboutText}>With over 15 years of experience in management consulting, workforce development, and organizational leadership, the founder of EVA Enterprise brings a unique blend of academic rigor and real-world business acumen to every engagement.</p>
                <p className={styles.aboutText}>Passionate about empowering leaders and organizations to reach their full potential, the founder developed the SMART Systems methodology as a comprehensive framework for building businesses that don't just survive — they thrive.</p>
                <p className={styles.aboutText}>Through EVA CEO Evolve, the mission continues: helping visionary leaders build the systems, teams, and strategies they need for lasting impact.</p>
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
            <p className={styles.note}>* Additional testimonials will be added as they are collected from clients.</p>
          </div>
        )}
      </div>
    </div>
  )
}
