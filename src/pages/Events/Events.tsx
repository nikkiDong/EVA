import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Events.module.css'

const heroImg = `${import.meta.env.BASE_URL}events-retreat-coast.jpg`
const retreatImg = `${import.meta.env.BASE_URL}events-card-retreat.jpg`
const quoteImg = `${import.meta.env.BASE_URL}troy-portrait.png`
const cardLead = `${import.meta.env.BASE_URL}events-card-private.jpg`
const cardCulture = `${import.meta.env.BASE_URL}events-card-workshops.jpg`
const cardRetreatPreview = `${import.meta.env.BASE_URL}troy-csc-podium.jpg`

type Impact = string

const impacts: Impact[] = [
  'Built practices that ignite new thinking',
  'Interactive experiences that drive real results',
  'Moments that create perspectives that fuel growth',
  'Strategic conversations that create lasting impact',
]

type EventCard = {
  img: string
  badge: string
  title: string
  desc: string
}

const upcomingEvents: EventCard[] = [
  {
    img: cardLead,
    badge: 'LEARN',
    title: 'Leading with Intention',
    desc: 'A keynote experience that explores the mindset, habits, and strategies that shape sustainable leadership.',
  },
  {
    img: cardCulture,
    badge: 'WORKSHOP',
    title: 'Culture, Strategy, Impact',
    desc: 'An interactive workshop designed to help leaders align culture and strategy for measurable, long-term results.',
  },
  {
    img: cardRetreatPreview,
    badge: 'SIGNATURE',
    title: 'Signature Speaker Series',
    desc: 'A signature speaker series for forward-thinking leaders ready to grow with clarity and connect with peers.',
  },
]

type Pillar = {
  title: string
  desc: string
}

const pillars: Pillar[] = [
  {
    title: 'ATTAINABLE INSIGHTS',
    desc: 'Learn how to use strategies you can apply immediately.',
  },
  {
    title: 'MEANINGFUL CONNECTIONS',
    desc: 'Connect with like-minded leaders and professionals.',
  },
  {
    title: 'POWERFUL PERSPECTIVES',
    desc: 'Step back, gain clarity, and see new ways forward with renewed focus.',
  },
  {
    title: 'LASTING IMPACT',
    desc: 'Leave empowered and equipped to move bigger goals, and lead more boldly.',
  },
]

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

export default function Events() {
  const navigate = useNavigate()
  const impactRef = useReveal(0.1)
  const upcomingRef = useReveal(0.08)
  const retreatRef = useReveal(0.1)
  const pillarsRef = useReveal(0.12)
  const ctaRef = useReveal()

  return (
    <div className={styles.page}>

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img
            src={heroImg}
            alt="Coastal retreat setting — wide horizon view"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroEyebrow}>Events &amp; Retreats</div>
            <h1 className={styles.heroTitle}>
              Step Away.<br />
              Level Up.<br />
              <span className={styles.heroAccent}>Lead Forward.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              From powerful keynotes to immersive retreats, EVA Systems Events create space for
              leaders to reflect, recharge, and realign — so they can lead with greater clarity,
              momentum, and impact.
            </p>
            <div className={styles.heroCtas}>
              <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>
                Invite Troy to Speak
              </button>
              <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
                Download Event &amp; Retreat Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DESIGNED FOR IMPACT ══ */}
      <section className={styles.impactSection}>
        <div className="container">
          <div ref={impactRef} className={`${styles.impactInner} reveal`}>
            <div className={styles.impactLeft}>
              <span className={styles.eyebrow}>More Than an Event</span>
              <h2 className={styles.sectionTitle}>Designed for Impact</h2>
              <ul className={styles.impactList}>
                {impacts.map((item) => (
                  <li key={item} className={styles.impactItem}>
                    <span className={styles.impactCheck} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.impactRight}>
              <div className={styles.quoteCard}>
                <div className={styles.quoteImageWrap}>
                  <img src={quoteImg} alt="Troy Parmer portrait" className={styles.quoteImage} />
                </div>
                <div className={styles.quoteBody}>
                  <span className={styles.quoteMark} aria-hidden="true">“</span>
                  <p className={styles.quoteText}>
                    The best leaders invest in themselves, their teams, and the time to think bigger.
                    That&rsquo;s where transformation begins.
                  </p>
                  <div className={styles.quoteAttr}>
                    <strong>Troy Parmer</strong>
                    <span>Founder &amp; CEO, EVA Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ UPCOMING EVENTS ══ */}
      <section className={styles.upcomingSection}>
        <div className="container">
          <div ref={upcomingRef} className={`${styles.upcomingInner} reveal`}>
            <div className={styles.upcomingHeader}>
              <h2 className={styles.sectionTitleCenter}>Upcoming Events</h2>
              <p className={styles.upcomingSub}>
                Join Troy Parmer for powerful conversations and immersive experiences that challenge
                perspectives and accelerate growth.
              </p>
            </div>

            <div className={styles.upcomingGrid}>
              {upcomingEvents.map((e) => (
                <article key={e.title} className={styles.eventCard}>
                  <div className={styles.eventImageWrap}>
                    <img src={e.img} alt={e.title} className={styles.eventImage} />
                  </div>
                  <div className={styles.eventBody}>
                    <span className={styles.eventBadge}>{e.badge}</span>
                    <h3 className={styles.eventTitle}>{e.title}</h3>
                    <p className={styles.eventDesc}>{e.desc}</p>
                    <button
                      className={styles.eventLink}
                      onClick={() => navigate('/contact')}
                    >
                      Learn More <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED EVOLVE RETREAT ══ */}
      <section className={styles.retreatSection}>
        <div className="container">
          <div ref={retreatRef} className={`${styles.retreatInner} reveal`}>
            <div className={styles.retreatContent}>
              <span className={styles.retreatEyebrow}>Featured Retreat</span>
              <h2 className={styles.retreatTitle}>
                EVOLVE Retreat<br />
                <span className={styles.retreatTagline}>Reflect. Realign. Rise.</span>
              </h2>
              <p className={styles.retreatDesc}>
                Join Troy Parmer for an immersive coastal experience designed for leaders ready to
                step away from the noise, reset their strategy, and reconnect with what matters most.
              </p>
              <ul className={styles.retreatList}>
                <li>Strategic planning and visioning sessions</li>
                <li>Curated experiences that fuel insight and renewal</li>
                <li>Peer connection with a small group of high-caliber leaders</li>
              </ul>
              <div className={styles.retreatCtas}>
                <button
                  className={styles.btnRetreatCta}
                  onClick={() => navigate('/contact')}
                >
                  Reserve Your Spot
                </button>
                <button
                  className={styles.btnRetreatGhost}
                  onClick={() => navigate('/contact')}
                >
                  Download Retreat Guide
                </button>
              </div>
            </div>
            <div className={styles.retreatImageWrap}>
              <img
                src={retreatImg}
                alt="EVOLVE Retreat — coastal setting"
                className={styles.retreatImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ MORE THAN AN EVENT — 4 pillars ══ */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div ref={pillarsRef} className={`${styles.pillarsInner} reveal`}>
            <div className={styles.pillarsHeader}>
              <span className={styles.eyebrowCenter}>What attendees can expect</span>
              <h2 className={styles.sectionTitleCenter}>
                More than an event — an experience that stays with you.
              </h2>
            </div>
            <div className={styles.pillarsGrid}>
              {pillars.map((p) => (
                <div key={p.title} className={styles.pillarCol}>
                  <div className={styles.pillarTitle}>{p.title}</div>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA — royal blue band ══ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div ref={ctaRef} className={`${styles.ctaInner} reveal`}>
            <h2 className={styles.ctaTitle}>
              Create space to think bigger, lead stronger, and live fully.
            </h2>
            <p className={styles.ctaSub}>
              Bring Troy to your next event or join an upcoming retreat to reset your strategy,
              expand your network, and step into what&rsquo;s next.
            </p>
            <div className={styles.ctaBtns}>
              <button className={styles.btnCtaWhite} onClick={() => navigate('/contact')}>
                Invite Troy to Speak
              </button>
              <button className={styles.btnCtaWhiteOutline} onClick={() => navigate('/contact')}>
                Download Event &amp; Retreat Guide
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
