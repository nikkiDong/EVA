import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import styles from './Services.module.css'

type Tab = 'coaching' | 'bizdev' | 'orgdev' | 'innovation'

/* ─── Tab definitions ──────────────────────────────────────────── */
const tabs: { key: Tab; label: string; sub: string; icon: ReactNode }[] = [
  {
    key: 'coaching',
    label: 'Coaching',
    sub: 'Leadership & workforce',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: 'bizdev',
    label: 'Business Development',
    sub: 'Strategy & growth',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="16" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11.5" y="10" width="5" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="4" width="5" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: 'orgdev',
    label: 'Organizational Dev',
    sub: 'Culture & alignment',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <circle cx="9" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 22c0-4 3-7 7-7s7 3 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 22c0-4 3-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    key: 'innovation',
    label: 'Innovation',
    sub: 'R&D & transformation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M14 3v3M3 14h3M25 14h-3M6.5 6.5l2 2M21.5 6.5l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
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
  coaching: {
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    tagline: 'Unlock your leadership potential',
    desc: 'Our coaching programs are built for leaders at every stage — from emerging executives to seasoned C-suite professionals navigating complex transitions and high-growth phases.',
    highlights: ['Executive one-on-one sessions', 'Team & workforce programs', 'Transition & change coaching', 'Signature M.O.V.E.-U Lab™'],
    cards: [
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="#b8935a" strokeWidth="1.5"/><circle cx="14" cy="14" r="6" stroke="#b8935a" strokeWidth="1.5"/><circle cx="14" cy="14" r="2" fill="#b8935a"/></svg>,
        title: 'Executive Coaching',
        desc: 'One-on-one coaching designed for C-suite leaders and emerging executives navigating growth, transitions, and high-stakes decisions.',
        link: 'Book a Session →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4v20M4 14h20" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/><circle cx="14" cy="7" r="3" stroke="#b8935a" strokeWidth="1.5"/><circle cx="7" cy="14" r="3" stroke="#b8935a" strokeWidth="1.5"/><circle cx="21" cy="14" r="3" stroke="#b8935a" strokeWidth="1.5"/><circle cx="14" cy="21" r="3" stroke="#b8935a" strokeWidth="1.5"/></svg>,
        title: 'Workforce Development',
        desc: 'Develop your team\'s capacity through targeted coaching programs that build leadership skills, communication, and performance at every level.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 22L22 6" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 6h6v6" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 24h20" stroke="#b8935a" strokeWidth="1" opacity="0.3" strokeLinecap="round"/></svg>,
        title: 'Transition Coaching',
        desc: 'Whether pivoting your business model or stepping into a new role, our transition coaching helps you move forward with clarity and a concrete plan.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="20" height="14" rx="3" stroke="#b8935a" strokeWidth="1.5"/><path d="M10 8V6a4 4 0 018 0v2" stroke="#b8935a" strokeWidth="1.5"/><circle cx="14" cy="16" r="2" fill="#b8935a"/></svg>,
        title: 'M.O.V.E.-U Lab™',
        desc: 'Our signature lab experience combining hands-on coaching, actionable frameworks, and guided support to help leaders create lasting organizational evolution.',
        link: 'View Programs →', linkTo: 'events',
      },
    ],
  },
  bizdev: {
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    tagline: 'Build systems that drive sustainable growth',
    desc: 'From market positioning to revenue architecture, our business development services help you build the strategic foundation and operational systems needed to scale with confidence.',
    highlights: ['Strategic business planning', 'Market positioning & branding', 'Revenue growth systems', 'Competitive analysis'],
    cards: [
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="5" y="16" width="5" height="8" rx="1" stroke="#b8935a" strokeWidth="1.5"/><rect x="11.5" y="10" width="5" height="14" rx="1" stroke="#b8935a" strokeWidth="1.5"/><rect x="18" y="4" width="5" height="20" rx="1" stroke="#b8935a" strokeWidth="1.5"/></svg>,
        title: 'Business Strategy & Planning',
        desc: 'Build comprehensive business plans, identify market opportunities, and define the systems needed to scale sustainably.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="16" rx="3" stroke="#b8935a" strokeWidth="1.5"/><path d="M3 11h22" stroke="#b8935a" strokeWidth="1.5"/><circle cx="7" cy="8.5" r="1" fill="#b8935a"/><circle cx="10" cy="8.5" r="1" fill="#b8935a"/></svg>,
        title: 'Market Positioning',
        desc: 'Stand out with clear positioning, competitive analysis, and branding strategies that attract the clients and partners you want.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 20L10 14L15 17L24 8" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 8h6v6" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
        title: 'Revenue Growth Systems',
        desc: 'Implement proven systems connecting your sales pipeline, marketing efforts, and operations to drive consistent revenue growth.',
        link: 'Learn More →', linkTo: 'contact',
      },
    ],
  },
  orgdev: {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    tagline: 'Align your people, culture, and processes',
    desc: 'Strong organizations don\'t happen by accident. Our organizational development services help you build the internal structures, culture, and operational processes that enable your team to perform at their highest level.',
    highlights: ['Organizational assessment', 'Team alignment workshops', 'Culture & values development', 'Process optimization'],
    cards: [
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="9" height="9" rx="2" stroke="#b8935a" strokeWidth="1.5"/><rect x="15" y="4" width="9" height="9" rx="2" stroke="#b8935a" strokeWidth="1.5"/><rect x="4" y="15" width="9" height="9" rx="2" stroke="#b8935a" strokeWidth="1.5"/><rect x="15" y="15" width="9" height="9" rx="2" stroke="#b8935a" strokeWidth="1.5"/></svg>,
        title: 'Organizational Assessment',
        desc: 'A deep dive into your company\'s structure, culture, and processes — identifying gaps, strengths, and opportunities for improvement.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="9" cy="10" r="4" stroke="#b8935a" strokeWidth="1.5"/><circle cx="19" cy="10" r="4" stroke="#b8935a" strokeWidth="1.5"/><path d="M2 22c0-4 3-7 7-7s7 3 7 7" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 22c0-4 3-7 7-7" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>,
        title: 'Team Alignment & Culture',
        desc: 'Align your team around shared goals, values, and accountability systems that foster collaboration and high performance.',
        link: 'Learn More →', linkTo: 'contact',
      },
      {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#b8935a" strokeWidth="1.5"/><path d="M14 8v6l4 4" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
        title: 'Process Optimization',
        desc: 'Streamline operations by implementing scalable processes that support sustainable growth and reduce organizational friction.',
        link: 'Learn More →', linkTo: 'contact',
      },
    ],
  },
  innovation: {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    tagline: 'Turn ideas into competitive advantages',
    desc: 'Innovation isn\'t just about new technology — it\'s about building the mindset, processes, and systems that help your organization stay ahead of the curve and capitalize on emerging opportunities.',
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
  const [activeTab, setActiveTab] = useState<Tab>('coaching')

  useEffect(() => {
    const state = location.state as { tab?: string } | null
    if (state?.tab && ['coaching', 'bizdev', 'orgdev', 'innovation'].includes(state.tab)) {
      setActiveTab(state.tab as Tab)
    }
  }, [location.state])

  const panel = panelData[activeTab]

  return (
    <div className={styles.servicesPage}>
      {/* ── Page header ── */}
      <div className={styles.pageHeader}>
        <div className="container">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive consulting tailored to your business stage — from startup to scale-up and beyond.
          </p>
        </div>
      </div>

      {/* ── Icon tab nav ── */}
      <div className={styles.tabNav}>
        <div className="container">
          <div className={styles.tabList}>
            {tabs.map((t) => (
              <button
                key={t.key}
                className={`${styles.tabItem} ${activeTab === t.key ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(t.key)}
              >
                <span className={styles.tabIcon}>{t.icon}</span>
                <span className={styles.tabLabel}>{t.label}</span>
                <span className={styles.tabSub}>{t.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Panel ── */}
      <div className={styles.panelWrap} key={activeTab}>
        <div className="container">

          {/* Panel intro: image + overview */}
          <div className={styles.panelIntro}>
            <div className={styles.panelImg}>
              <img src={panel.img} alt={tabs.find(t => t.key === activeTab)?.label} />
            </div>
            <div className={styles.panelOverview}>
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
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Book a Consultation →
              </button>
            </div>
          </div>

          {/* Service cards */}
          <div className={styles.cardsHeader}>
            <div className="section-label">Included Services</div>
          </div>
          <div className={styles.cardGrid}>
            {panel.cards.map((card) => (
              <div key={card.title} className={styles.card}>
                <div className={styles.cardIcon}>{card.icon}</div>
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
  )
}
