import { useState, useRef, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Contact.module.css'

/**
 * MAILCHIMP INTEGRATION — PENDING TROY'S PLAN DECISION
 *
 * To activate the Mailchimp sync, set two env vars in `.env.local`:
 *   VITE_MAILCHIMP_ACTION_URL=https://<dc>.list-manage.com/subscribe/post?u=<USER_ID>&id=<LIST_ID>
 *   VITE_MAILCHIMP_HIDDEN_FIELD=b_<USER_ID>_<LIST_ID>
 *
 * Until set, submissions stay client-side only.
 */
const MAILCHIMP_ACTION = import.meta.env.VITE_MAILCHIMP_ACTION_URL as string | undefined
const MAILCHIMP_HONEYPOT = import.meta.env.VITE_MAILCHIMP_HIDDEN_FIELD as string | undefined

/* Form shape — matches Troy's 2026-04-26 reference mockup. Earlier richer
   field set (First/Last/Title/Phone) was simplified per the newer mockup;
   the CEO Visionary Waitlist checkbox + privacy disclaimer are kept since
   Troy was explicit about both regardless of layout. */
const INITIAL_FORM = {
  fullName: '',
  email: '',
  organization: '',
  message: '',
  ceoWaitlist: false,
}

/* Service tabs / cards rendered in the "How can we work together?" section.
   Tab nav is purely visual emphasis — all five cards always render. */
type ServiceKey = 'coaching' | 'consulting' | 'speaking' | 'events' | 'waitlist'
const SERVICES: {
  key: ServiceKey
  label: string
  desc: string
  cta: string
  to: string
}[] = [
  {
    key: 'coaching',
    label: 'Coaching',
    desc: '1:1 and group coaching for founders and leaders ready to clarify their vision, strengthen their leadership, and scale with confidence.',
    cta: 'Inquire About Coaching',
    to: '/coaching',
  },
  {
    key: 'consulting',
    label: 'Consulting',
    desc: 'Strategic advisory to design systems, streamline operations, and build the infrastructure your business needs to grow sustainably.',
    cta: 'Inquire About Consulting',
    to: '/consulting',
  },
  {
    key: 'speaking',
    label: 'Speaking',
    desc: 'Dynamic keynotes and workshops that inspire action, ignite transformation, and equip audiences to lead and grow.',
    cta: 'Inquire About Speaking',
    to: '/speaking',
  },
  {
    key: 'events',
    label: 'Events',
    desc: 'From strategy sessions to signature experiences, let’s create events that educate, empower, and drive meaningful impact.',
    cta: 'Inquire About Events',
    to: '/events',
  },
  {
    key: 'waitlist',
    label: 'Waitlist',
    desc: 'Be the first to know about upcoming programs, cohorts, and resources designed to help you elevate and lead.',
    cta: 'Join the Waitlist',
    to: '/evolve-community',
  },
]

/* Service inquiry list shown in the hero left column */
const INQUIRIES = [
  { label: 'Coaching Inquiries', desc: 'Let’s build your leadership muscle and strengthen what lasts.' },
  { label: 'Speaking Inquiries', desc: 'Inspire your audience with strategies that spark action.' },
  { label: 'Consulting Partnerships', desc: 'Let’s design systems that drive results and scale.' },
  { label: 'Event Interest', desc: 'Let’s create powerful experiences together.' },
  { label: 'Join the Waitlist', desc: 'Be the first to know about upcoming programs and resources.' },
]

export default function Contact() {
  const navigate = useNavigate()
  const formRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(INITIAL_FORM)
  const [activeTab, setActiveTab] = useState<ServiceKey>('coaching')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    // TEMP DEBUG — remove once Mailchimp wiring is verified
    console.log('[Mailchimp] action url:', MAILCHIMP_ACTION ?? '(NOT LOADED — env vars missing)')
    console.log('[Mailchimp] honeypot:', MAILCHIMP_HONEYPOT ?? '(NOT LOADED)')

    if (MAILCHIMP_ACTION) {
      const [firstName, ...rest] = form.fullName.trim().split(/\s+/)
      const body = new URLSearchParams()
      body.set('EMAIL', form.email)
      body.set('FNAME', firstName ?? '')
      body.set('LNAME', rest.join(' '))
      body.set('COMPANY', form.organization)
      body.set('MESSAGE', form.message)
      if (form.ceoWaitlist) body.set('VISIONARY', 'yes')
      if (MAILCHIMP_HONEYPOT) body.set(MAILCHIMP_HONEYPOT, '')

      console.log('[Mailchimp] sending body:', body.toString())

      try {
        const res = await fetch(MAILCHIMP_ACTION, { method: 'POST', mode: 'no-cors', body })
        console.log('[Mailchimp] fetch returned (opaque ok):', res)
      } catch (err) {
        console.warn('[Mailchimp] fetch failed:', err)
      }
    } else {
      console.warn('[Mailchimp] action URL missing — submission not sent. Restart dev server.')
    }

    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <div className={styles.contactPage}>

      {/* ══ HERO — 2-column: services list (left) + form card (right) ══ */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>

            {/* LEFT COLUMN */}
            <div className={styles.heroLeft}>
              <div className={styles.heroEyebrow}>
                Coaching · Consulting · Speaking · Community
              </div>
              <h1 className={styles.heroTitle}>Let&rsquo;s Connect.</h1>
              <p className={styles.heroLead}>
                Great things happen when we start the conversation.
              </p>
              <p className={styles.heroDesc}>
                Whether you&rsquo;re ready to elevate your leadership, bring clarity to your
                systems, or create meaningful impact on your stage or in your organization—
                EVA Smart Systems is here to partner with you.
              </p>

              <ul className={styles.inquiryList}>
                {INQUIRIES.map((it) => (
                  <li key={it.label}>
                    <span className={styles.inquiryLabel}>{it.label}</span>
                    <span className={styles.inquirySep}> – </span>
                    <span className={styles.inquiryDesc}>{it.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN — form card */}
            <div className={styles.heroRight}>
              <div className={styles.formCard} ref={formRef}>
                <h2 className={styles.formTitle}>We&rsquo;d love to hear from you.</h2>
                <p className={styles.formIntro}>
                  Complete the form below and a member of our team will be in touch soon.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Full Name*"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      placeholder="Email Address*"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Organization / Company"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <textarea
                      rows={5}
                      placeholder="How can we support you?*"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  {/* CEO Visionary Waitlist opt-in (Troy's explicit ask, kept) */}
                  <label className={styles.checkboxRow}>
                    <input
                      type="checkbox"
                      checked={form.ceoWaitlist}
                      onChange={(e) => setForm({ ...form, ceoWaitlist: e.target.checked })}
                    />
                    <span>
                      <strong>Add me to the CEO Visionary Waitlist</strong> — early access to the
                      EVOLVE Retreat 2027 and Visionary CEO programs.
                    </span>
                  </label>

                  <button type="submit" className={styles.btnSubmit}>
                    Submit Inquiry
                  </button>

                  {/* Confidentiality / privacy note (Troy's explicit ask, kept) */}
                  <p className={styles.disclaimer}>
                    Your information is used solely to respond to your inquiry and, if you opt in
                    above, to send you EVA program updates. We do not sell, rent, or share personal
                    data with third parties outside of the tools required to run our business.
                    Submissions are transmitted securely. You may unsubscribe at any time.
                  </p>

                  {submitted && (
                    <div className={styles.successMsg}>
                      ✓ Thank you — your inquiry has been received. We&rsquo;ll be in touch within 1–2 business days.
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ HOW CAN WE WORK TOGETHER — 5 service cards w/ tab nav ══ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <h2 className={styles.servicesTitle}>How can we work together?</h2>

          <div className={styles.tabRow} role="tablist">
            {SERVICES.map((s) => (
              <button
                key={s.key}
                type="button"
                role="tab"
                aria-selected={activeTab === s.key}
                className={`${styles.tab} ${activeTab === s.key ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES.map((s) => (
              <div
                key={s.key}
                className={`${styles.serviceCard} ${activeTab === s.key ? styles.serviceCardActive : ''}`}
                onClick={() => setActiveTab(s.key)}
              >
                <h3 className={styles.serviceCardTitle}>{s.label}</h3>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
                <button
                  type="button"
                  className={styles.serviceCardLink}
                  onClick={(e) => {
                    e.stopPropagation()
                    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                >
                  {s.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LET'S STAY IN TOUCH ══ */}
      <section className={styles.stayTouchSection}>
        <div className={styles.stayTouchText}>
          <div className="container">
            <div className={styles.stayTouchContent}>
              <h2 className={styles.stayTouchTitle}>Let&rsquo;s stay in touch.</h2>
              <p className={styles.stayTouchDesc}>
                Reach out directly or connect with us online.
              </p>

              <div className={styles.contactRow}>
                <div className={styles.contactLabel}>Email</div>
                <a className={styles.contactValue} href="mailto:hello@evasmartsystems.com">
                  hello@evasmartsystems.com
                </a>
              </div>
              <div className={styles.contactRow}>
                <div className={styles.contactLabel}>Website</div>
                <a className={styles.contactValue} href="https://www.evasmartsystems.com">
                  www.evasmartsystems.com
                </a>
              </div>
              <div className={styles.contactRow}>
                <div className={styles.contactLabel}>Response Time</div>
                <div className={styles.contactValue}>
                  We typically respond within 1–2 business days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA — royal blue band ══ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Ready to Elevate. Lead. Transform?</h2>
            <p className={styles.ctaDesc}>
              Start the conversation. We can&rsquo;t wait to hear from you.
            </p>
            <div className={styles.ctaBtns}>
              <button
                className={styles.btnCtaWhite}
                onClick={() => {
                  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Submit Inquiry
              </button>
              <button
                className={styles.btnCtaWhiteOutline}
                onClick={() => navigate('/evolve-community')}
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
