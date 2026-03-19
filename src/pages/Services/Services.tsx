import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import styles from './Services.module.css'

type Tab = 'bizdev' | 'orgdev' | 'innovation'

/* ─── Tab definitions ──────────────────────────────────────────── */
const tabs: { key: Tab; label: string; sub: string; num: string; icon: ReactNode }[] = [
  {
    key: 'bizdev',
    label: 'Business Development',
    sub: 'Strategy & sustainable growth',
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="16" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="11.5" y="10" width="5" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="18" y="4" width="5" height="20" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    key: 'orgdev',
    label: 'Organizational Development',
    sub: 'Culture, people & alignment',
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <circle cx="9" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="19" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 22c0-4 3-7 7-7s7 3 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 22c0-4 3-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    key: 'innovation',
    label: 'Innovation',
    sub: 'R&D & digital transformation',
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M14 3v3M3 14h3M25 14h-3M6.5 6.5l2 2M21.5 6.5l-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
  },
]

/* ─── Panel content data ───────────────────────────────────────── */
const panelData: Record<Tab, {
  img: string
  tagline: string
  desc: string
  highlights: string[]
  cards: { icon: ReactNode; title: string; desc: string; link: string; linkTo: string }[]
}> = {
  bizdev: {
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85',
    tagline: 'How does your organization create impact with its stakeholders?',
    desc: 'We partner with organizations to identify gaps and develop customized solutions aligned with each client\'s mission and philosophy — from Mastermind Groups and Think Tanks to Incubator and Accelerator Programs. SMART SYSTEMS help you pivot in times of change, transition, or crisis through strengths-based perspectives.',
    highlights: ['Funding sources to launch & grow', 'Strategic planning for new ideas', 'Key partnership networks', 'Financial management optimization', 'Proof of concept & customer dev', 'Marketing plans for distribution', 'Workforce development & onboarding', 'Successful scaling to growth models'],
    cards: [
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="5" y="16" width="5" height="8" rx="1" stroke="#b8935a" strokeWidth="1.5"/><rect x="11.5" y="10" width="5" height="14" rx="1" stroke="#b8935a" strokeWidth="1.5"/><rect x="18" y="4" width="5" height="20" rx="1" stroke="#b8935a" strokeWidth="1.5"/></svg>,
        title: 'Program Development',
        desc: 'Custom programs addressing small business development, workforce development, emotional intelligence, soft skills, diversity/equity/inclusion, and services for diverse populations.',
        link: 'Explore Programs →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="16" rx="3" stroke="#b8935a" strokeWidth="1.5"/><path d="M3 11h22" stroke="#b8935a" strokeWidth="1.5"/><circle cx="7" cy="8.5" r="1" fill="#b8935a"/><circle cx="10" cy="8.5" r="1" fill="#b8935a"/></svg>,
        title: 'Training & Workshops',
        desc: 'One-time or series options for custom training in business ownership and workforce development, delivered in hybrid formats tailored to your team\'s needs.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 20L10 14L15 17L24 8" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 8h6v6" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
        title: 'Mastermind & Think Tanks',
        desc: 'Facilitated Mastermind Groups, Think Tanks, and Incubator/Accelerator Programs that bring together leaders to solve problems and scale breakthrough ideas.',
        link: 'Get Started →', linkTo: 'contact',
      },
    ],
  },
  orgdev: {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85',
    tagline: 'Turning Blind Spots into opportunities for innovation and progression',
    desc: "E.V.A. Management Solutions helps clients identify warning signs or organizational 'Blind Spots.' Through a systemic and creative approach, these Blind Spots become opportunities for innovation and progression — building the internal structures, culture, and processes that enable your team to perform at their highest level.",
    highlights: ['Assessments, evaluations & feedback', 'Culture connection', 'Performance evaluations', 'Relationship building', 'Meditation techniques', 'Systemic & creative approach'],
    cards: [
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="9" height="9" rx="2" stroke="#b8935a" strokeWidth="1.5"/><rect x="15" y="4" width="9" height="9" rx="2" stroke="#b8935a" strokeWidth="1.5"/><rect x="4" y="15" width="9" height="9" rx="2" stroke="#b8935a" strokeWidth="1.5"/><rect x="15" y="15" width="9" height="9" rx="2" stroke="#b8935a" strokeWidth="1.5"/></svg>,
        title: 'Assessments & Evaluations',
        desc: "Deep-dive assessments, evaluations, and feedback tools that surface organizational Blind Spots — revealing gaps, strengths, and hidden opportunities for growth.",
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="9" cy="10" r="4" stroke="#b8935a" strokeWidth="1.5"/><circle cx="19" cy="10" r="4" stroke="#b8935a" strokeWidth="1.5"/><path d="M2 22c0-4 3-7 7-7s7 3 7 7" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 22c0-4 3-7 7-7" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>,
        title: 'Culture Connection',
        desc: 'Build authentic culture through relationship-centered practices, performance evaluations, and meditation techniques that foster collaboration and sustained high performance.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 14l6 6L24 8" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="14" cy="14" r="11" stroke="#b8935a" strokeWidth="1" opacity="0.3"/></svg>,
        title: 'Systemic & Creative Solutions',
        desc: 'Transform organizational warning signs into innovation opportunities using systemic thinking and creative problem-solving approaches tailored to your mission and philosophy.',
        link: 'Get Started →', linkTo: 'contact',
      },
    ],
  },
  innovation: {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=85',
    tagline: 'Turn ideas into competitive advantages',
    desc: "Innovation isn't just about new technology — it's about building the mindset, processes, and systems that help your organization stay ahead of the curve and capitalize on emerging opportunities.",
    highlights: ['Innovation roadmap & strategy', 'Research & development process', 'Digital workflow adoption', 'Competitive intelligence'],
    cards: [
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3v3M3 14h3M25 14h-3M6.5 6.5l2 2M21.5 6.5l-2 2" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/><circle cx="14" cy="14" r="6" stroke="#b8935a" strokeWidth="1.5"/><circle cx="14" cy="14" r="2" fill="#b8935a"/></svg>,
        title: 'Innovation Strategy',
        desc: 'Develop a roadmap for innovation that balances creative thinking with practical execution — turning ideas into competitive advantages.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M8 4h12a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#b8935a" strokeWidth="1.5"/><path d="M10 10h8M10 14h5" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/></svg>,
        title: 'Research & Development',
        desc: 'Leverage data-driven research and development processes to identify emerging opportunities and build a competitive edge in your industry.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#b8935a" strokeWidth="1.5"/><path d="M14 4a10 10 0 000 20" stroke="#b8935a" strokeWidth="1.5"/><ellipse cx="14" cy="14" rx="4" ry="10" stroke="#b8935a" strokeWidth="1" opacity="0.4"/><path d="M4 14h20" stroke="#b8935a" strokeWidth="1" opacity="0.4"/></svg>,
        title: 'Digital Transformation',
        desc: 'Navigate technology adoption and digital workflows that enhance operations, client experience, and competitive position.',
        link: 'Learn More →', linkTo: 'contact',
      },
    ],
  },
}

/* ─── Component ────────────────────────────────────────────────── */
export default function Services() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<Tab>('bizdev')

  useEffect(() => {
    const state = location.state as { tab?: string } | null
    if (state?.tab && ['bizdev', 'orgdev', 'innovation'].includes(state.tab)) {
      setActiveTab(state.tab as Tab)
    }
  }, [location.state])

  const panel = panelData[activeTab]
  const activeTabDef = tabs.find(t => t.key === activeTab)!

  return (
    <div className={styles.servicesPage}>

      {/* ── Page header ── */}
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <span className={styles.headerEyebrow}>Smart Solutions</span>
              <h1 className={styles.headerTitle}>
                Strategic consulting<br />
                <em>that moves</em>
              </h1>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.headerDesc}>
                From business development to organizational transformation and innovation — comprehensive solutions built for your ambition.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Book a Consultation →
              </button>
            </div>
          </div>
        </div>
        <div className={styles.headerAccentLine} />
      </div>

      {/* ── Tab selector ── */}
      <div className={styles.tabStrip}>
        <div className="container">
          <div className={styles.tabList}>
            {tabs.map((t) => (
              <button
                key={t.key}
                className={`${styles.tabBtn} ${activeTab === t.key ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(t.key)}
              >
                <span className={styles.tabNum}>{t.num}</span>
                <span className={styles.tabIcon}>{t.icon}</span>
                <span className={styles.tabMeta}>
                  <span className={styles.tabLabel}>{t.label}</span>
                  <span className={styles.tabSub}>{t.sub}</span>
                </span>
                <span className={styles.tabArrow}>→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Active panel ── */}
      <div className={styles.panelWrap} key={activeTab}>
        <div className="container">

          {/* Hero image strip */}
          <div className={styles.panelHero}>
            <div className={styles.panelHeroImg}>
              <img src={panel.img} alt={activeTabDef.label} />
              <div className={styles.panelHeroOverlay} />
              <div className={styles.panelHeroText}>
                <div className={styles.panelHeroNum}>{activeTabDef.num}</div>
                <div className={styles.panelHeroLabel}>{activeTabDef.label}</div>
              </div>
            </div>
            <div className={styles.panelHeroContent}>
              <p className={styles.panelTagline}>{panel.tagline}</p>
              <p className={styles.panelDesc}>{panel.desc}</p>
              <ul className={styles.highlights}>
                {panel.highlights.map((h) => (
                  <li key={h}>
                    <span className={styles.hlDot} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service cards */}
          <div className={styles.cardsSection}>
            <div className={styles.cardsSectionHeader}>
              <span className={styles.cardsSectionLabel}>Included Services</span>
              <div className={styles.cardsSectionLine} />
            </div>
            <div className={styles.cardGrid}>
              {panel.cards.map((card, i) => (
                <div key={card.title} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardIcon}>{card.icon}</div>
                    <span className={styles.cardNum}>0{i + 1}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <button
                    className={styles.cardLink}
                    onClick={() => navigate('/' + card.linkTo)}
                  >
                    {card.link}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className={styles.bottomCta}>
        <div className="container">
          <div className={styles.bottomCtaInner}>
            <div className={styles.bottomCtaText}>
              <h2>Ready to build something lasting?</h2>
              <p>Let's find the right solution for your organization's next chapter.</p>
            </div>
            <div className={styles.bottomCtaBtns}>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Book a Consultation →
              </button>
              <button className="btn btn-dark-outline" onClick={() => navigate('/coaching')}>
                Explore Coaching
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
