import { useNavigate } from 'react-router-dom'
import styles from './About.module.css'

const heroImg = `${import.meta.env.BASE_URL}troy-sideways-building.jpg`
// 2026-04-26: My Story / Our Mission section uses the B&W editorial close-up
// (hand-under-chin pose) — different from the full-body color hero, gives the
// page two visually distinct moments instead of two crops of the same photo.
const storyImg = `${import.meta.env.BASE_URL}troy-portrait.png`

/* (Stats band removed 2026-04-26 per user — was duplicating the same
   14+/1700+/125K+/100% block already shown on the Home StatsBar.) */

/* Why EVA — 4 belief/positioning columns. Each ends with a royal-blue tagline. */
const beliefs = [
  {
    title: 'Who We Are',
    body:
      'EVA Systems is a coaching, consulting, and speaking firm that helps leaders and organizations build systems that create clarity, drive results, and sustain growth.',
    tagline: 'We bring strategy, structure, and heart to everything we do.',
  },
  {
    title: 'What We Believe',
    body:
      'We believe people do their best work in systems that support them.',
    tagline: 'Clarity creates confidence. Structure creates freedom. Community creates lasting impact.',
  },
  {
    title: 'How EVA Works',
    body:
      'We partner with you to assess, design, and implement practical systems that align with your mission and move your goals forward.',
    tagline: 'Strategic. Collaborative. Sustainable.',
  },
  {
    title: 'Why Clients Choose EVA',
    body:
      'Deep listening. Clear thinking. Proven frameworks. Tailored solutions. Real results.',
    tagline: 'We show up as a partner—not just a provider.',
  },
]

export default function About() {
  const navigate = useNavigate()

  return (
    <div className={styles.aboutPage}>

      {/* ══ HERO — text (left, in container) + full-bleed photo (right, spans viewport height) ══ */}
      <section className={styles.hero}>
        {/* Image lives outside the container so it can reach the viewport edge */}
        <div className={styles.heroRight}>
          <img
            src={heroImg}
            alt="Troy Farmer — Founder of EVA Systems"
            className={styles.heroImg}
          />
        </div>

        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>
                Meet<br />Troy Farmer
              </h1>
              <div className={styles.heroEyebrow}>Founder of EVA Systems</div>
              <p className={styles.heroDesc}>
                Coach. Consultant. Speaker. Systems-minded strategist. Troy Farmer helps
                organizations and leaders build what lasts—across small business, nonprofit,
                government, corporate, and founder ecosystems.
              </p>
              <div className={styles.heroCtas}>
                <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>
                  Work With Troy
                </button>
                <button className={styles.btnOutline} onClick={() => navigate('/coaching')}>
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (Stats band removed 2026-04-26 — was duplicating Home page numbers.) */}

      {/* ══ WHY EVA — 4 belief columns ══ */}
      <section className={styles.beliefsSection}>
        <div className="container">
          <div className={styles.beliefsGrid}>
            {beliefs.map((b) => (
              <div key={b.title} className={styles.beliefCol}>
                <h3 className={styles.beliefTitle}>{b.title}</h3>
                <p className={styles.beliefBody}>{b.body}</p>
                <p className={styles.beliefTagline}>{b.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MY STORY / OUR MISSION — 2-column with photo ══ */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyInner}>
            <div className={styles.storyLeft}>
              <span className={styles.storyEyebrow}>Built from experience. Driven by purpose.</span>
              <h2 className={styles.storyTitle}>My Story. Our Mission.</h2>

              <p className={styles.storyText}>
                EVA Systems was born from my belief that systems change everything. After
                more than 14 years serving organizations across industries and sectors, I
                saw a common truth: brilliant people often struggle not because they lack
                talent, but because they lack the right systems.
              </p>
              <p className={styles.storyText}>I founded EVA Systems to change that.</p>
              <p className={styles.storyText}>
                Today, I partner with mission-driven leaders and teams to create systems
                that simplify operations, elevate leadership, and unlock sustainable
                growth—so you can lead with confidence and build what lasts.
              </p>

              <p className={styles.storyTagline}>
                This is more than my work.<br />It&rsquo;s my purpose.
              </p>
            </div>

            <div className={styles.storyRight}>
              <img
                src={storyImg}
                alt="Troy Farmer — editorial portrait"
                className={styles.storyImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA — royal-blue band ══ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Let&rsquo;s Build What&rsquo;s Next—Together.</h2>
            <p className={styles.ctaDesc}>
              Ready to gain clarity, create systems, and scale with confidence?
            </p>
            <div className={styles.ctaBtns}>
              <button className={styles.btnCtaWhite} onClick={() => navigate('/contact')}>
                Book a Discovery Call
              </button>
              <button className={styles.btnCtaWhiteOutline} onClick={() => navigate('/contact')}>
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
