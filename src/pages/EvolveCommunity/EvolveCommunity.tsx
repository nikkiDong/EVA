import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { membershipPlans, membershipFeatures } from '../../data/events'
import styles from './EvolveCommunity.module.css'

/* ─────────────────────────────────────────────────────────────────────
   STRIPE PAYMENT LINKS — replace these placeholders with the real URLs
   once Troy creates the Stripe account and generates Payment Links for
   each tier. Keep test-mode links here until Troy is ready to go live.
   ───────────────────────────────────────────────────────────────────── */
const STRIPE_LINKS: Record<string, string> = {
  'EVOLVE Prime':    'https://buy.stripe.com/test_5kQaEZ0K8fZA8oEa3D7EQ01',
  'EVOLVE Prestige': 'https://buy.stripe.com/test_dRm4gB8cA3cOcEUa3D7EQ02',
  'EVOLVE Premier':  'https://buy.stripe.com/test_fZu8wR50odRsawM2Bb7EQ03',
}

/* ─────────────────────────────────────────────────────────────────────
   EVOLVE COMMUNITY MEMBER AGREEMENT — Troy's approved policy (2026)
   ───────────────────────────────────────────────────────────────────── */
const POLICY_SECTIONS = [
  {
    heading: null,
    text: 'By purchasing, joining, or participating in the EVOLVE Community, each member acknowledges that they have read, understood, and agreed to the terms, expectations, and policies outlined below. This agreement governs membership access, community participation, conduct, privacy expectations, intellectual property, and related matters for the EVOLVE Community operated by Empowerment That Values All (EVA), LLC.',
  },
  {
    heading: '1. Membership Access and Participation',
    text: 'The EVOLVE Community is a private, member-only community created to support connection, learning, collaboration, strategic discussion, and professional growth. Membership provides access to the community and to the benefits associated with the membership tier selected at the time of purchase.\n\nMembership access is limited to the individual who purchased the membership and may not be shared, transferred, sublicensed, or used by any other person. EVA reserves the right to suspend or terminate access if membership sharing, misuse, or unauthorized participation is identified.\n\nMembership benefits, offerings, session formats, and access levels may evolve over time in order to improve the community experience, respond to member needs, or maintain operational effectiveness. EVA will make reasonable efforts to communicate material changes when appropriate.\n\nParticipants must be 21 years of age or older to join the EVOLVE Community.',
  },
  {
    heading: '2. Payments, Renewals, and Cancellations',
    text: 'Membership fees are billed according to the membership plan selected by the member, whether monthly or annual. By enrolling, the member authorizes recurring payment for the selected membership term unless and until the membership is canceled in accordance with the applicable cancellation terms.\n\nMembership fees are non-refundable unless otherwise expressly stated in writing by EVA. Canceling a membership stops future billing but does not retroactively refund payments already processed. Access will continue through the end of the current paid term unless otherwise specified.\n\nIf a payment fails or a membership account becomes delinquent, EVA may suspend or revoke access until the account is brought current.',
  },
  {
    heading: '3. Community Privacy and Member Discretion',
    text: 'The EVOLVE Community is intended to be a private, member-only environment where individuals can participate in thoughtful conversation, community engagement, and strategic discussion. Members are expected to respect the privacy of the community and the experiences, ideas, and information shared by others.\n\nMembers may not share, repost, reproduce, distribute, publish, screenshot, record, or otherwise disclose another member\'s comments, personal story, business information, identifying details, or participation in the community without that member\'s express permission.\n\nAlthough EVA expects all members to honor the privacy of the community, absolute confidentiality cannot be guaranteed. Each member is responsible for exercising discretion when sharing sensitive personal, business, legal, financial, medical, proprietary, or otherwise confidential information.',
  },
  {
    heading: '4. Code of Conduct and Community Expectations',
    text: 'All members are expected to contribute to a respectful, professional, inclusive, and constructive environment. Members must communicate in a way that supports healthy dialogue, thoughtful participation, and the dignity of others.\n\nHarassing, threatening, discriminatory, abusive, defamatory, obscene, demeaning, or otherwise harmful language or conduct is prohibited. This applies to community posts, comments, messages, live sessions, calls, chats, written materials, and any other community-related interaction.\n\nEVA reserves the right to remove any member, content, or participation that violates these expectations or compromises the integrity of the community.',
  },
  {
    heading: '5. Participation Does Not Replace Professional Services',
    text: 'The EVOLVE Community is designed for education, strategic discussion, reflection, business insight, and peer engagement. It is not a substitute for professional, therapeutic, clinical, medical, legal, tax, financial, mental health, or healthcare services.\n\nNo statement, discussion, session, resource, comment, or communication within the EVOLVE Community should be interpreted as therapy, counseling, medical advice, legal advice, tax advice, financial advice, health advice, or any other regulated professional service.',
  },
  {
    heading: '6. Intellectual Property',
    text: 'All EVOLVE Community materials, content, frameworks, forms, tools, templates, documents, written resources, recordings, training materials, session structures, and related content are the intellectual property of Empowerment That Values All (EVA), LLC unless otherwise stated.\n\nMembers may use community materials for their own personal or internal business development purposes only. Members may not copy, reproduce, modify, distribute, publish, teach, license, sell, share, or create derivative works from EVA intellectual property without prior written permission.',
  },
  {
    heading: '7. Limitation of Liability',
    text: 'To the fullest extent permitted by law, EVA shall not be liable for indirect, incidental, consequential, special, or punitive damages arising from or related to membership participation, use of community materials, reliance on community discussions, or inability to access the platform.\n\nMembers participate in the community voluntarily and accept full responsibility for how they interpret, apply, or act on information shared within the community.',
  },
  {
    heading: '8. Updates to This Policy',
    text: 'EVA may update this agreement from time to time in order to reflect changes in operations, offerings, legal requirements, or community structure. Continued participation in the EVOLVE Community after such updates constitutes acceptance of the revised terms.',
  },
  {
    heading: '9. Contact',
    text: 'Questions regarding this agreement, membership terms, participation expectations, privacy concerns, or community conduct may be directed to EVA using the official contact information provided on the website or membership platform.',
  },
]

const heroImg = `${import.meta.env.BASE_URL}community-hero.jpg`

/* ────────────────────────────────────────────────────────────────────
   What You'll Find Inside EVOLVE — 4 cards
   ──────────────────────────────────────────────────────────────────── */
const offerings = [
  {
    title: 'Coaching Circles',
    desc: 'Small group sessions designed to help you gain clarity, solve challenges, and elevate your business.',
  },
  {
    title: 'Knowledge Sharing',
    desc: 'Exchange ideas, strategies, and insights with professionals who understand your journey and your goals.',
  },
  {
    title: 'Community Connection',
    desc: 'Build lasting relationships in a supportive network of like-minded leaders and changemakers.',
  },
  {
    title: 'Resources & Support',
    desc: 'Access tools, templates, curated content, and expert guidance to help you grow with confidence.',
  },
]

/* Who It's For — 4 audience pills */
const audience = [
  'Consultants & Coaches',
  'Founders & Entrepreneurs',
  'Service-Based Professionals',
  'Thought Leaders & Experts',
]

/* What Members Gain — 4 outcome cards */
const gains = [
  {
    title: 'Stronger Clarity',
    desc: 'Gain perspective and direction through collaborative conversations and expert support.',
  },
  {
    title: 'Greater Visibility',
    desc: 'Share your expertise, expand your reach, and be seen by the right opportunities.',
  },
  {
    title: 'Practical Knowledge',
    desc: 'Learn from real experiences and proven strategies you can apply to your business right away.',
  },
  {
    title: 'Ongoing Growth',
    desc: 'Stay inspired, accountable, and supported as you scale your impact and income.',
  },
]

/* ── Disclaimer modal state ── */
interface ModalState {
  open: boolean
  planName: string
  planPrice: string
  agreed: boolean
}

export default function EvolveCommunity() {
  const navigate = useNavigate()
  const [modal, setModal] = useState<ModalState>({
    open: false,
    planName: '',
    planPrice: '',
    agreed: false,
  })

  function openModal(planName: string, planPrice: string) {
    setModal({ open: true, planName, planPrice, agreed: false })
  }

  function closeModal() {
    setModal(m => ({ ...m, open: false, agreed: false }))
  }

  function handleProceed() {
    const link = STRIPE_LINKS[modal.planName]
    if (link && !link.includes('PLACEHOLDER')) {
      window.open(link, '_blank', 'noopener,noreferrer')
    } else {
      // Stripe not yet configured — fall back to contact page
      navigate('/contact')
    }
    closeModal()
  }

  return (
    <div className={styles.evolvePage}>

      {/* ══ HERO — 2-column: text (left) + diverse-women photo (right) ══ */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroEyebrow}>Welcome to EVOLVE Community</div>
              <h1 className={styles.heroTitle}>
                Join the<br />
                <span className={styles.heroAccent}>EVOLVE</span><br />
                Community.
              </h1>
              <p className={styles.heroDesc}>
                EVOLVE Community is designed for emerging and established entrepreneurs
                seeking knowledge, insights and a meaningful business connection for
                strategic engagement and intentional growth as they build their enterprise,
                innovate and commercialize a product or service that expands and scales
                their business.
              </p>
              <p className={styles.heroAge}>Must be 21+ years to participate.</p>
              <div className={styles.heroCtas}>
                <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>
                  Join the Waitlist
                </button>
                <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
                  Explore Membership
                </button>
              </div>
            </div>

            {/* Photo column — full-bleed to right viewport edge with a soft
                left-edge fade so it blends into the white hero background. */}
            <div className={styles.heroRight}>
              <img
                src={heroImg}
                alt="Diverse women at a conference table — EVOLVE Community"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT YOU'LL FIND INSIDE EVOLVE — 4 cards ══ */}
      <section className={styles.findSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrowCenter}>Built for Growth. Powered by Community.</span>
            <h2 className={styles.sectionTitle}>What You&rsquo;ll Find Inside EVOLVE.</h2>
          </div>

          <div className={styles.cardGrid4}>
            {offerings.map((o) => (
              <div key={o.title} className={styles.findCard}>
                <h3 className={styles.findCardTitle}>{o.title}</h3>
                <p className={styles.findCardDesc}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MEMBERSHIP PRICING — 3 tiers ══
          Added per Troy's 2026-04-30 feedback: pricing section sits right
          after "What you'll find inside Evolve". */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrowCenter}>Membership Plans</span>
            <h2 className={styles.sectionTitle}>
              Choose the Path That Fits Your Growth.
            </h2>
            <p className={styles.sectionSub}>
              Flexible plans designed to meet you where you are—and help you get
              where you&rsquo;re going.
            </p>
          </div>

          <div className={styles.tierGrid}>
            {membershipPlans.map((plan) => (
              <div
                key={plan.name}
                className={`${styles.tierCard} ${plan.variant === 'featured' ? styles.tierFeatured : ''}`}
              >
                {plan.variant === 'featured' && (
                  <div className={styles.tierBadge}>Most Popular</div>
                )}
                <h3 className={styles.tierName}>{plan.name}</h3>

                {/* Dual pricing: monthly + annual */}
                <div className={styles.tierPricing}>
                  <div className={styles.tierPrice}>
                    <span className={styles.tierPriceAmount}>{plan.monthlyPrice}</span>
                    <span className={styles.tierPricePeriod}>/month</span>
                  </div>
                  <div className={styles.tierAnnual}>
                    {plan.annualPrice}/year
                  </div>
                </div>

                <p className={styles.tierTagline}>{plan.tagline}</p>

                {/* Feature checklist */}
                <ul className={styles.tierFeatures}>
                  {membershipFeatures.map((feature, idx) => {
                    const included = idx < plan.includedCount
                    return (
                      <li key={feature} className={included ? '' : styles.tierFeatureExcluded}>
                        <span className={included ? styles.tierCheck : styles.tierDash}>
                          {included ? '✓' : '—'}
                        </span>
                        {feature}
                      </li>
                    )
                  })}
                </ul>

                <p className={styles.tierFooter}>{plan.footerText}</p>

                <button
                  className={plan.variant === 'featured' ? styles.btnPrimary : styles.btnOutline}
                  onClick={() => openModal(plan.name, plan.monthlyPrice)}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO IT'S FOR — 4 audience pills ══ */}
      <section className={styles.whoSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Who It&rsquo;s For</h2>
            <p className={styles.sectionSub}>
              Emerging and established consultants, founders, and service-based professionals
              seeking connection, visibility, knowledge-sharing, and ongoing growth.
            </p>
          </div>

          <div className={styles.audienceRow}>
            {audience.map((a) => (
              <div key={a} className={styles.audiencePill}>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT MEMBERS GAIN — 4 outcome cards ══ */}
      <section className={styles.gainSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Members Gain</h2>
          </div>

          <div className={styles.cardGrid4}>
            {gains.map((g) => (
              <div key={g.title} className={styles.gainCard}>
                <h3 className={styles.gainCardTitle}>{g.title}</h3>
                <p className={styles.gainCardDesc}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA — royal blue band ══ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Be Part of What&rsquo;s Next—Together.</h2>
            <p className={styles.ctaDesc}>
              Join early to get updates, exclusive content, and priority access when the
              community launches.
            </p>
            <div className={styles.ctaBtns}>
              <button className={styles.btnCtaWhite} onClick={() => navigate('/contact')}>
                Join the Waitlist
              </button>
              <button className={styles.btnCtaWhiteOutline} onClick={() => navigate('/contact')}>
                Stay Connected
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DISCLAIMER MODAL ══ */}
      {modal.open && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal} aria-label="Close">✕</button>

            <div className={styles.modalEyebrow}>Evolve Community — {modal.planName} · {modal.planPrice}/mo</div>
            <h2 className={styles.modalTitle}>
              EVOLVE Community Member Agreement, Terms, Privacy, Participation Policy, and Code of Conduct
            </h2>

            <div className={styles.modalDisclaimer}>
              {POLICY_SECTIONS.map((section, i) => (
                <div key={i} className={styles.policySection}>
                  {section.heading && (
                    <h3 className={styles.policySectionHeading}>{section.heading}</h3>
                  )}
                  {section.text.split('\n\n').map((para, j) => (
                    <p key={j} className={styles.policySectionText}>{para}</p>
                  ))}
                </div>
              ))}
            </div>

            <label className={styles.modalCheckLabel}>
              <input
                type="checkbox"
                checked={modal.agreed}
                onChange={e => setModal(m => ({ ...m, agreed: e.target.checked }))}
                className={styles.modalCheckbox}
              />
              <span>
                I have read and agree to the EVOLVE Community Member Agreement, Terms,
                Privacy, Participation Policy, and Code of Conduct.
              </span>
            </label>

            <div className={styles.modalActions}>
              <button className={styles.btnOutline} onClick={closeModal}>
                Cancel
              </button>
              <button
                className={styles.btnPrimary}
                disabled={!modal.agreed}
                onClick={handleProceed}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
